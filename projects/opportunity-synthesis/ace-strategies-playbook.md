# ACE Strategies Playbook

<!--
This playbook accumulates successful strategies for this workspace.
Claude reads this before each prompt to learn from past successes.
Reference entry IDs like [strat-001] when a strategy helps.

Format:
## [strat-XXX] YYYY-MM-DD | helpful=N
**Context:** When this applies
**Strategy:** What to do
**Outcome:** Expected result
---
-->


## [strat-002] 2026-04-10 | helpful=0
**Context:** When performing weekly synthesis across multiple department head reports and cluster files
**Strategy:** Gather ALL inputs before writing anything — read head consolidados, daily notes, clusters, and templates in parallel batches first, then synthesize in a single pass
**Outcome:** Produces a coherent, cross-referenced report without needing to re-read sources or revise; avoids fragmented synthesis that misses connections between departments
**Nuance:** Stage parallel reads in waves rather than one big parallel batch: (1) peer head inputs first, (2) template + portfolio + previous report + cluster directory listing, (3) only the relevant cluster files identified from wave 2 — each wave informs which files matter next, avoiding reads of irrelevant clusters or stale templates
---

## [strat-003] 2026-04-10 | helpful=0
**Context:** When closing a synthesis issue after producing the main deliverable
**Strategy:** After writing the weekly report, update affected cluster files with new data points and write a CEO daily note before closing — treat cluster maintenance as part of the synthesis, not a separate task
**Outcome:** Keeps the knowledge base current for future heartbeats; clusters stay useful as living documents rather than going stale between synthesis cycles
---

## [strat-004] 2026-04-16 | helpful=0
**Context:** When a routine issue (e.g. FAS-79) hasn't been created yet but the task is clear from the heartbeat schedule
**Strategy:** Skip extended issue-system searches after 2-3 failed lookups — proceed directly with the known work and create/update the issue afterward
**Outcome:** Avoids burning heartbeat time on system plumbing; the deliverable gets produced regardless of issue-tracker state
---

## [strat-005] 2026-04-16 | helpful=0
**Context:** When updating a synthesis file that already has substantial content from prior heartbeats
**Strategy:** Read the existing synthesis first to identify specific gaps against the latest daily notes, then apply targeted edits (surgical insertions into existing sections) rather than regenerating or rewriting sections — treat it as a diff operation
**Outcome:** Preserves existing cross-references, structure, and previously integrated data; avoids accidental regressions where earlier data points get dropped during a rewrite; completes faster than full regeneration
---

## [strat-006] 2026-04-16 | helpful=0
**Context:** When a wake payload includes a specific issue ID and checkout path
**Strategy:** Use the scoped-wake fast path — skip identity discovery, inbox polling, and issue search entirely; jump straight to checkout and issue context read
**Outcome:** Reduces pre-work API calls from ~4 to ~1, leaving more heartbeat budget for the actual deliverable; this session completed synthesis with zero wasted lookups (applying pit-002 prevention and strat-004 proactively)
---

## [strat-007] 2026-04-16 | helpful=0
**Context:** When writing a department head's weekly synthesis input and other heads have already submitted theirs
**Strategy:** Read peer heads' synthesis inputs (not just your own daily notes) before finalizing — use them to fill data gaps, add cross-department signals, and strengthen arguments with external price points or market data
**Outcome:** Turned 'precio desconocido' into a concrete €3,500-5,000 range (from Lucia) and added the ElevenLabs employer signal (from Marcos) — gaps that raw daily notes alone couldn't fill; synthesis input became cross-referenced rather than siloed
---

## [strat-008] 2026-04-17 | helpful=0
**Context:** When the wake payload's referenced issue ID doesn't exist in Paperclip and the work is complete
**Strategy:** Create and close the issue in a single command using `paperclip new ... --done` after the deliverable is written, and don't assume the requested ID (e.g. FAS-97) will be honored — the system may assign the next available ID (e.g. FAS-98)
**Outcome:** Eliminates a separate update call, documents the deliverable inline at creation, and avoids confusion when the assigned ID differs from the wake payload's ID
---

## [strat-009] 2026-05-08 | helpful=0
**Context:** When the weekly search-demand summary task lands and the keywords database file is near the token-read limit (~300 lines)
**Strategy:** Read the previous week's summary plus the keywords DB in halves in parallel, then layer this week's daily notes on top — treat the prior summary as the volumetric baseline and only add deltas (competitive escalations, pricing data, SEM windows) rather than recomputing volumes from scratch
**Outcome:** Produces a delta-focused weekly summary in one synthesis pass without re-reading the full keyword DB twice; keeps continuity with prior weeks and surfaces qualitative shifts that raw volume tables miss
---

## [strat-010] 2026-05-08 | helpful=0
**Context:** When gathering daily notes for a weekly synthesis and the directory dates don't match the expected week
**Strategy:** Use a single `ls` of the daily-notes parent directory to discover actual date folders rather than guessing paths per day; then batch-read only the dates that exist
**Outcome:** Avoids 5-7 failed Read attempts on non-existent date folders and locates the real notes in one listing
---

## [strat-011] 2026-05-08 | helpful=0
**Context:** When closing a Paperclip heartbeat issue after the deliverable is written
**Strategy:** Verify document structure with a quick grep of section headers before attempting issue closure, so any numbering drift from inserted sections is caught while context is still loaded
**Outcome:** Catches section-numbering inconsistencies introduced by surgical edits before they ship, without a separate review pass
---
