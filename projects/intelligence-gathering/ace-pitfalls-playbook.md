# ACE Pitfalls Playbook

<!--
This playbook tracks mistakes to avoid in this workspace.
Claude reads this before each prompt to avoid repeating errors.
Reference entry IDs like [pit-001] when avoiding a pitfall.

Format:
## [pit-XXX] YYYY-MM-DD | helpful=N
**Context:** When this can happen
**Pitfall:** What went wrong
**Consequence:** Impact
**Prevention:** How to avoid
---
-->


## [pit-002] 2026-04-09 | helpful=0
**Context:** When using LinkedIn or job-board searches to estimate workforce size for niche roles (e.g., '3D animators' in a specific market)
**Pitfall:** LinkedIn headline/title counts include semantically adjacent but irrelevant roles (e.g., 'hotel animators' matching '3D animators'), inflating headcounts significantly
**Consequence:** Workforce sizing estimates become unreliable and mislead strategic decisions about talent pool availability
**Prevention:** Always apply Boolean exclusion filters (e.g., -hotel -entertainment) and cross-reference with at least one additional source (guild registries, studio headcounts, industry reports) before reporting workforce numbers as reliable
---

## [pit-003] 2026-04-10 | helpful=0
**Context:** When creating Notion databases via MCP using a workspace or space ID as the parent
**Pitfall:** Assumed the workspace root ID (e.g., `c06e83f1...`) could serve as `parent.page_id` for database creation — Notion API requires an actual page as parent, not a workspace-level container
**Consequence:** Database creation fails, wasting a heartbeat on the error and requiring a follow-up search for a valid parent page before retrying
**Prevention:** Before creating Notion databases, first run `notion-search` to find or confirm a valid parent page exists, then use that page's ID as parent — never pass a raw workspace/space ID directly
---

## [pit-004] 2026-04-10 | helpful=0
**Context:** When multiple heartbeat sessions contribute to the same research area with analyst-prefixed deliverable files
**Pitfall:** A prior session wrote findings to a non-canonical filename (analyst-raul-demand.md instead of analyst-corporate.md), creating a naming inconsistency that the next heartbeat had to detect and fix
**Consequence:** Subsequent heartbeats waste cycles discovering and reconciling misnamed files instead of advancing research; risks creating duplicate files with overlapping content
**Prevention:** Establish and check the canonical filename from the issue/task config before writing any deliverable — if the naming convention says analyst-corporate.md, always use that exact name regardless of the analyst's personal identifier
**Nuance:** When the inconsistency spans a shared database (not just local files), duplicates are harder to detect — enforce canonical naming by reading existing entries before uploading, and schedule a normalization pass immediately if the scheme changed mid-project
---

## [pit-005] 2026-04-11 | helpful=0
**Context:** When posting comments to an API (e.g., Notion or issue tracker) during a heartbeat session
**Pitfall:** Comment creation API call returned null silently instead of failing with an error, requiring manual detection and retry
**Consequence:** Heartbeat cycle wastes time on silent failures; if not caught, the comment is lost and downstream consumers (other analysts, coordinators) never receive the update
**Prevention:** Always check the return value of comment/create API calls for null or missing ID before proceeding — if null, retry once with the same payload before logging a failure; do not assume success from a non-error response
---

## [pit-006] 2026-04-14 | helpful=0
**Context:** When a coordinator heartbeat runs after a multi-day gap (e.g., weekend) and needs analyst inputs that may not yet exist for the current date
**Strategy:** The agent searched for today's analyst notes (e.g., analyst-raul-demand for April 14) and found nothing, but proceeded to write its own consolidated note using stale Thursday data without flagging the gap prominently
**Pitfall:** Writing a consolidated daily note that silently uses multi-day-old analyst data without explicitly marking which inputs are stale and which are fresh
**Consequence:** Stakeholders reading the consolidated note may assume all data is current-day, leading to decisions based on outdated signals — especially dangerous for time-sensitive metrics like Lost Leads counts or trending keywords
**Prevention:** When analyst inputs are missing for the current date, explicitly timestamp each data source in the consolidated note (e.g., 'Demand data: last updated April 10') and post a comment requesting fresh analyst input before the next heartbeat
**Nuance:** Before writing or declaring any consolidated note complete, enumerate all expected analyst inputs from the sub-issue list, confirm each has been read in the current heartbeat, and flag any missing inputs — write only after all available inputs are loaded. This prevents both the stale-data problem (pit-006) and the premature-completion problem where new analyst findings require multi-section patches to an already-written deliverable.
---

## [pit-007] 2026-04-14 | helpful=0
**Context:** When a coordinator heartbeat fires multiple times in the same day and no analyst inputs or external data sources have changed since the last heartbeat
**Strategy:** The agent ran a full context-gathering cycle (read daily notes, check Lost Leads API, check analyst deposits, read standup) only to confirm nothing changed since HB18 earlier the same day
**Pitfall:** Running full context-gathering and data-check sequences on a same-day heartbeat without first checking whether any upstream source has a newer timestamp than the last heartbeat's note
**Consequence:** Entire heartbeat consumed by redundant reads with zero new intelligence produced — the only output was a status comment confirming no changes
**Prevention:** Before full context gathering, compare the last heartbeat note's timestamp against upstream source timestamps (analyst files mtime, Lost Leads API last-modified, standup dates); if all sources predate the last note, post a one-line 'no-change' status and exit early to conserve heartbeat budget
---

## [pit-008] 2026-04-14 | helpful=0
**Context:** When a bulk-upload task requires creating 50+ Notion pages from individual file reads
**Pitfall:** Processing each day as individual Read + Notion-create tool calls exhausted the context window 3 times across continuations, with each continuation needing to re-derive progress state (which days are done vs pending)
**Consequence:** 3 context resets wasted heartbeat time on re-reading tracker state and re-orienting; risk of duplicate page creation if progress tracking is imprecise across continuations
**Prevention:** For bulk uploads exceeding ~20 items, generate a shell script or Python script that reads all files and produces a consolidated JSON payload, then create pages from that single data source — or maintain an explicit progress checkpoint file (e.g., last-uploaded-date) that survives context resets without re-scanning
---
