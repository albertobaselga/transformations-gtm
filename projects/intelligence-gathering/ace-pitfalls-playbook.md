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

## [pit-003] 2026-04-10 | helpful=1
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

## [pit-009] 2026-04-15 | helpful=0
**Context:** When waking for a scoped issue and needing to locate it via the Paperclip API
**Pitfall:** Relied on inbox and keyword search endpoints to find the issue (FAS-55), both returned empty — had to fall back to listing all tasks and extracting the direct task ID after multiple failed calls
**Consequence:** Wasted 4-5 API calls and significant heartbeat time on discovery before reaching the actual work; in a time-boxed heartbeat this reduces productive capacity
**Prevention:** When the wake payload includes an issue identifier, immediately list assigned tasks filtered by that identifier or use the direct task-get endpoint with the full ID — skip inbox and broad search endpoints which may not index routine sub-issues
**Nuance:** Before any inbox or search call, parse the wake payload header and check PAPERCLIP_ISSUE_ID (or equivalent) env vars — the scoped issue ID is often already provided by the wake mechanism, making discovery redundant. Only fall back to inbox/search if neither source supplies an ID.
---

## [pit-010] 2026-04-15 | helpful=0
**Context:** When a wake payload references a specific issue ID (e.g., FAS-61) that doesn't exist yet in the system
**Pitfall:** Spent multiple heartbeat cycles searching for FAS-61 across inbox, broad search, and issue listing before concluding it doesn't exist — serial API calls to confirm absence of a non-existent resource
**Consequence:** Wasted 4-5 API calls and significant heartbeat time on a dead-end search before falling back to the actual active assignment (FAS-4)
**Prevention:** When a wake payload references an unknown issue ID: do ONE broad search, and if not found, immediately fall back to active assignments (check inbox for in_progress issues) within 2 API calls maximum — don't iterate through multiple search strategies for a missing resource
---

## [pit-011] 2026-04-15 | helpful=0
**Context:** When updating a sync-status or config file after a successful API call (e.g., Notion page creation) in the same heartbeat
**Pitfall:** Attempted to Edit a file that had not been Read in the current session — the Edit tool requires a prior Read to establish the file's content baseline
**Consequence:** Edit fails, requiring an extra Read+Edit round-trip; if the heartbeat budget is tight, the sync-status update may be dropped, leaving state inconsistent with the actual Notion page that was already created
**Prevention:** Always Read any file you intend to Edit at the start of the heartbeat (batch it with other parallel reads), even if you wrote or edited it in a previous session — the Read requirement is per-session, not per-file-lifetime
---

## [pit-012] 2026-04-16 | helpful=0
**Context:** When searching for institutions or brands that share names with larger global events or entities (e.g., 'CES' school vs CES Las Vegas, 'NAB' school vs NAB Show)
**Pitfall:** Generic queries like 'CES Open Day' return results for the dominant global entity (CES Las Vegas), drowning out the local institution
**Consequence:** Wastes a search round on irrelevant results and requires a corrective follow-up query, delaying the research funnel
**Prevention:** Always disambiguate institution searches by prepending the full name, city, or domain (e.g., 'Escuela CES Madrid open day' or 'ces-escuela.com') — never use bare acronyms that match major international events
---

## [pit-013] 2026-04-16 | helpful=0
**Context:** When updating Paperclip issues via PATCH using the human-readable identifier (e.g., FAS-69) as the path parameter
**Pitfall:** The PATCH endpoint returns null silently when given the string issue key (FAS-69) instead of the internal UUID — no error is raised, the update simply doesn't happen
**Consequence:** Issue status appears unchanged; the heartbeat reports success but the tracker is stale, misleading coordinators who rely on issue state for sequencing
**Prevention:** Always retrieve the UUID from the issue checkout/GET response and use that for PATCH calls — never assume the human-readable key works as a path param, even if GET accepts it
---

## [pit-014] 2026-04-16 | helpful=0
**Context:** When WebSearch returns a company domain and the next step is WebFetch to scrape SEO/content details
**Pitfall:** Assumed the obvious domain (shifta.es) was correct without verifying — the actual site was weareshifta.com, wasting a fetch round-trip on a 404/redirect
**Consequence:** Lost one tool-call round in the heartbeat to a failed fetch, requiring a retry with the correct URL — in a time-constrained heartbeat this can cascade into incomplete deliverables
**Prevention:** When WebSearch results include a company URL, use the URL directly from the search snippet rather than guessing the domain; if no URL is in the snippet, do a targeted site-finding search (e.g., 'SHIFTA site:weareshifta.com OR site:shifta.es') before committing to a WebFetch
---

## [pit-015] 2026-04-16 | helpful=0
**Context:** When an analyst agent has no issues assigned in the issue tracker and relies on Paperclip heartbeats to wake
**Pitfall:** The agent silently goes idle with no output because the heartbeat system only wakes agents that have open issues — zero assigned issues means zero heartbeats, which looks like the agent stopped working
**Consequence:** Creates a growing gap in daily notes that triggers false escalations (e.g., FAS-71 claiming 6 days of inactivity) and blocks dependent workflows like the job-postings stability series
**Prevention:** When closing or completing an analyst's last issue, always create or assign a follow-up issue in the same heartbeat to ensure the agent continues receiving wake triggers — never leave an analyst with zero open issues unless intentionally deactivating them
---

## [pit-016] 2026-04-16 | helpful=0
**Context:** When scraping LinkedIn job counts across heartbeats where session state may vary (logged in vs logged out)
**Pitfall:** LinkedIn without an active session returns inflated, algorithmically broadened counts (7,000+) that are not comparable to authenticated session counts (81) — the platform uses different matching logic for anonymous visitors
**Consequence:** Time series breaks silently — the D2-to-D7 delta appears as a massive spike that is actually a methodology artifact, not a real demand signal, potentially triggering false alerts or misleading trend analysis
**Prevention:** Before recording a LinkedIn count, confirm session state (check for profile avatar or login prompt in the page snapshot); if unauthenticated, record the value as 'LinkedIn (no session)' with a non-comparable flag and exclude it from trend calculations
---

## [pit-017] 2026-04-16 | helpful=0
**Context:** When fetching government statistical data (SEPE, INE) where URL paths change by month/year and are not predictable
**Pitfall:** Spent 3+ rounds guessing URL paths for SEPE CNAE tables (trying /datos/, /estadisticas/, /series/ variants) after the first fetch failed — URL structure for March 2026 differed from known patterns
**Consequence:** Burned most of the heartbeat on serial URL trial-and-error instead of extracting and synthesizing data, leaving the SEPE analysis incomplete for this cycle
**Prevention:** When a government data URL fails on first attempt, immediately pivot to WebSearch for the exact document title + filetype:pdf/xlsx rather than guessing path variants — search engines index these files even when site navigation changes. Cap URL guessing at 1 retry before switching to search-based discovery
**Nuance:** SEPE/INE portal landing pages (e.g., sepe.es/HomeSepe/...) are JavaScript-rendered and return empty or navigation-only content to WebFetch — skip portal-page fetches entirely and go straight to WebSearch with PDF-specific patterns (filetype:pdf site:sepe.es 'marzo 2026' CNAE) or known direct-PDF URL patterns (/estadisticas/contratos/datos/YYYY/MMM.pdf). This is upstream of the URL-guessing failure: even the correct-looking portal page yields no data because the content is client-rendered.
---

## [pit-018] 2026-04-16 | helpful=0
**Context:** When analysts complete their assigned issues and no new issues are queued for them
**Pitfall:** Analysts silently go idle (0 assigned issues, no heartbeats) with no automatic alert — the gap is only discovered when a Head or coordinator checks their status during a review cycle
**Consequence:** Days of missing analyst notes (Sofia had no April 16 note despite SEPE being unblocked the day before), creating data gaps in synthesis inputs and delaying time-sensitive intelligence
**Prevention:** During every Head review heartbeat, explicitly check each analyst's assigned issue count and agent status (not just their latest note) — if any analyst has 0 issues, treat it as a blocking action item and create an issue before writing the consolidated note
---

## [pit-019] 2026-04-16 | helpful=0
**Context:** When a scheduled heartbeat targets an issue ID (e.g., FAS-82) that cannot be located in the tracker but checkout still succeeds
**Pitfall:** Proceeded to write and publish the deliverable without first verifying whether the routine actually instantiated the issue — treated 'checkout exitoso' as confirmation the issue exists
**Consequence:** Risk of publishing a done-status against a phantom/stale issue reference; if the routine failed to create FAS-82, the deliverable lands but the tracker never surfaces it, creating silent orphan work
**Prevention:** When the initial issue lookup returns empty, run a second confirmation (e.g., list recent issues by title or query the routine's expected ID pattern) before writing the deliverable; if still unconfirmed, flag the routine-instantiation gap in the heartbeat output rather than silently bridging it
---

## [pit-020] 2026-04-16 | helpful=0
**Context:** When consolidating multiple analyst outputs into a single Notion page in the daily-notes database
**Pitfall:** The 'Agente' property is a single-select (not multi-select), so a consolidated note covering 9 analysts cannot tag all of them — you must pick one value (e.g., 'Coordinator') or leave it empty
**Consequence:** Attempting to pass an array of analyst names to a single-select field fails, or silently truncates, hiding the multi-analyst provenance of the consolidated note from downstream filters
**Prevention:** For consolidated daily notes, set 'Agente' to a dedicated coordinator value and list individual analyst contributors in the page body or a separate text/relation field — never assume select fields accept arrays without checking the schema's type
---

## [pit-021] 2026-04-17 | helpful=0
**Context:** When assigning new sub-issues to analysts from a coordinator heartbeat without first checking their current workload
**Pitfall:** Creating sub-issues (e.g., FAS-91, FAS-92) before confirming the analyst has 0 active issues via a list/filter query — risks duplicate or overlapping assignments if the analyst already has an open sub-issue from a prior coordinator cycle
**Consequence:** Analyst wakes to conflicting instructions across two open issues, wastes a heartbeat reconciling scope, or silently drops one issue — breaks the assumption that each analyst has exactly one canonical task per day
**Prevention:** Before notion-create-pages or CLI issue-create for an analyst, run an active-issues query filtered by assignee and open status; only create the sub-issue if the count is 0, otherwise update the existing issue with the new scope
---

## [pit-022] 2026-04-17 | helpful=0
**Context:** When citing GitHub repository popularity metrics (stars, forks) sourced from secondary aggregators or cached search snippets
**Pitfall:** Secondary sources reported wildly divergent star counts for OpenMontage (790 vs 1.7k vs 2.4k) because of caching lag and mirror confusion
**Consequence:** Citing a stale or aggregated number in a daily note misrepresents momentum and can trigger either false alarm or false reassurance for heads making portfolio decisions
**Prevention:** Before citing a GitHub metric in any deliverable, issue a direct WebFetch to the canonical github.com/<org>/<repo> page in the final round — never trust search snippet counts or secondary aggregator numbers as the source of record
---

## [pit-023] 2026-04-17 | helpful=0
**Context:** When a research task references a CNAE code (e.g., CNAE 59) across multiple months in 2025-2026
**Pitfall:** Failing to account for the CNAE-2009 → CNAE-2025 reclassification (Real Decreto 10/2025) which creates structural breaks in YoY comparisons starting at an unknown cutover date
**Consequence:** YoY percentages reported as 'declining' or 'stable' may actually reflect code remapping rather than real market movement, misleading strategic decisions about sector demand
**Prevention:** Before citing any YoY CNAE metric from SEPE post-2025, explicitly check whether the reporting month uses CNAE-2009 or CNAE-2025 classification and flag any comparison that crosses the cutover — reference [strat-020] for the shared root cause
---

## [pit-024] 2026-04-17 | helpful=0
**Context:** When attempting to capture Google Trends values for keyword baselines via Playwright MCP
**Pitfall:** Tried to scrape Google Trends multi-keyword and single-keyword pages via browser automation; Google detects the headless session and blocks chart rendering, returning empty/broken DOM
**Consequence:** Multiple navigation + wait + snapshot cycles consumed without producing any trend value; baseline capture fails and heartbeat budget is wasted on a known-blocked surface
**Prevention:** Do not attempt Google Trends via Playwright for value capture — go directly to WebSearch for recent third-party trend reports and articles citing Trends data, or use the Trends CSV export endpoint with proper headers; reserve Playwright for sites without aggressive bot detection
---
