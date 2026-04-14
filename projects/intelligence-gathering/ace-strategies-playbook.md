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


## [strat-002] 2026-04-09 | helpful=0
**Context:** When a research issue requires multiple analysts (e.g., competitors + trends)
**Strategy:** Create sub-issues for each analyst immediately, set up the consolidation framework and source configs before any data arrives, and configure blocker dependencies so the coordinator wakes only when inputs are ready
**Outcome:** Avoids idle heartbeats waiting for data; workspace is ready to consolidate the moment analysts deliver
**Nuance:** After dispatching sub-issues, use remaining coordinator heartbeat time to proactively research the stakeholder's highest-priority signal (e.g., a peak-100 keyword with no competitor coverage) via parallel web searches — this pre-enriches the consolidated note before analysts report back, turning dispatch-only heartbeats into intelligence-producing ones
---

## [strat-003] 2026-04-09 | helpful=0
**Context:** When writing YAML source configs or any structured config files
**Strategy:** Immediately validate with a YAML linter (python -c 'import yaml; yaml.safe_load(...)') after every write, before proceeding to use the config
**Outcome:** Catches silent syntax issues (special characters like > interpreted as block scalars, unquoted commas) before they cause downstream failures in analyst pipelines
---

## [strat-003] 2026-04-09 | helpful=0
**Context:** When a coordinator issue (like FAS-1) needs to direct multiple analyst Heads who already have their own issue instructions
**Strategy:** Read all existing sub-issue descriptions first to understand what each Head already knows, then create one canonical plan document before posting targeted guidance comments — this prevents contradicting existing instructions and ensures consistency across all Heads
**Outcome:** Single heartbeat completes the full coordination cycle: context gathering, plan creation, and parallel communication to all Heads without redundancy or conflicts
---

## [strat-004] 2026-04-09 | helpful=2
**Context:** When a research heartbeat needs to investigate multiple competitors or topics via web search
**Strategy:** Batch 4+ parallel WebSearch calls grouped by competitor/topic in a single tool invocation round, then do a second round of targeted follow-up searches and WebFetch for gaps — this completes a full competitive analysis in a single heartbeat
**Outcome:** FAS-6 competitive analysis (CEI, Lightbox, and others) completed in one heartbeat instead of spreading across multiple wake cycles, because parallel search eliminated serial wait time
**Nuance:** Formalize as a 3-round funnel (Round 1 broad parallel searches per axis, Round 2 targeted gap-fills, Round 3 WebFetch on highest-signal articles) with a hard stop: write the deliverable immediately after Round 3 — no open-ended exploration beyond 3 rounds
---

## [strat-004] 2026-04-09 | helpful=0
**Context:** When a stakeholder posts mid-flight priority changes on a parent issue while sub-issues are already in progress
**Strategy:** Post targeted priority-update comments to each sub-issue in parallel (not rewrite descriptions), acknowledge the stakeholder on the parent issue, and update the daily tracking note — all in a single heartbeat cycle
**Outcome:** Minimizes latency between stakeholder directive and analyst awareness; avoids overwriting existing sub-issue instructions that analysts are already working from
---

## [strat-005] 2026-04-09 | helpful=8
**Context:** When a trends/research heartbeat needs to produce actionable intelligence for a specific team or portfolio
**Strategy:** Analyze the existing portfolio or product catalog FIRST to identify concrete gaps, then use those gaps to focus web searches — this turns generic trend scanning into targeted gap-filling intelligence
**Outcome:** Searches return higher-signal results because queries are shaped by known gaps rather than broad category terms; the final note maps directly to portfolio decisions instead of being a generic trend dump
**Nuance:** When a new research issue overlaps a prior deliverable, read that deliverable first to identify covered vs. uncovered ground, then scope searches to only the delta — applies the 'gap-first' principle to sequential research issues, not just portfolio analysis.
---

## [strat-005] 2026-04-09 | helpful=0
**Context:** When validating an existing data inventory (e.g., portfolio map) against a live external source
**Strategy:** Fetch the live source first and compare total counts (e.g., 21 programs found vs 17 mapped) before deep-diving into individual entries — this immediately reveals gaps and new additions, focusing research time on deltas rather than re-verifying known data
**Outcome:** Caught 4 missing programs and a certification change in a single heartbeat by anchoring on count discrepancy rather than auditing each entry sequentially
---

## [strat-006] 2026-04-09 | helpful=0
**Context:** When a research heartbeat needs to synthesize data from both official statistical sources and industry/sector reports
**Strategy:** Use iterative deepening across search rounds: first round of parallel searches to identify source types (government stats, industry reports), then targeted WebFetch on the most authoritative URLs, then a second round of gap-filling searches for missing dimensions — each round narrows the focus based on what previous rounds revealed
**Outcome:** Completes a multi-layered research note in a single heartbeat by letting early results guide later queries, avoiding redundant broad searches and producing triangulated data rather than single-source summaries
---

## [strat-006] 2026-04-09 | helpful=0
**Context:** When a stakeholder posts mid-flight priority changes on a parent issue while sub-issues are already in progress
**Strategy:** Post targeted priority-update comments to each sub-issue in parallel (not rewrite descriptions), acknowledge the stakeholder on the parent issue, and update the daily tracking note — all in a single heartbeat cycle
**Outcome:** Minimizes latency between stakeholder directive and analyst awareness; avoids overwriting existing sub-issue instructions that analysts are already working from
---

## [strat-007] 2026-04-09 | helpful=0
**Context:** When resuming a multi-deliverable heartbeat where some work was already completed
**Strategy:** Run a quick state audit first (check files, DB, directories) to build a precise delta of what remains, then parallelize all remaining independent deliverables (e.g., seed DB + write notes simultaneously) rather than re-executing sequentially
**Outcome:** FAS-4 completed all remaining deliverables (DB seed, investigation note, daily note) in a single heartbeat by parallelizing independent writes after a 30-second state check, avoiding wasted cycles on already-completed configs
---

## [strat-008] 2026-04-09 | helpful=0
**Context:** When a research heartbeat needs both breadth (multiple clusters/portals) and depth (quantitative validation)
**Strategy:** Use a two-round search pattern: first round fires broad parallel searches across all clusters and portals simultaneously (8+ calls), then analyze gaps in the results and fire a second targeted round with WebFetch on specific URLs and refined search queries to fill quantitative holes
**Outcome:** FAS-10 completed keyword tracking for P1-P4 across all portals in a single heartbeat — the second round caught that LinkedIn's 532 'IA Generativa' jobs were almost all technical/data roles, not audiovisual creative, which would have been a misleading data point if taken at face value
---

## [strat-009] 2026-04-09 | helpful=0
**Context:** When creating follow-up sub-issues after a first research round completes
**Strategy:** Read the full deliverables from completed analyst sub-issues before writing the new sub-issue descriptions — incorporate specific findings, data points, and gaps into the follow-up scope so analysts build on prior work rather than re-discovering it
**Outcome:** FAS-11 and FAS-12 were precisely scoped to P1-P4 priorities because they referenced concrete data from FAS-8/FAS-9 outputs, eliminating redundant research and giving analysts a higher starting point
---

## [strat-010] 2026-04-09 | helpful=0
**Context:** When a stakeholder posts new priority categories (e.g., P1-P5) after research is already substantially complete
**Strategy:** Don't restart research — instead, create a priority-mapping document that categorizes existing findings under the new priority codes, then run only targeted gap-filling searches for areas where existing data is thin
**Outcome:** FAS-4 completed in a single heartbeat despite mid-flight priority reframe: existing competitor/trends data was re-categorized under P1/P4/P5 and only 6 targeted searches filled genuine gaps, avoiding redundant re-research of already-covered ground
---

## [strat-011] 2026-04-09 | helpful=0
**Context:** When a coordinator issue runs sequential rounds of analyst work (e.g., Round 1 baseline, Round 2 deep-dives) that each produce separate deliverables to consolidate
**Strategy:** Read ALL deliverables from the completed round into context before writing the consolidated output — do not start writing after the first deliverable arrives. Produce the cross-reference document in a single write pass so relationships between analyst outputs are captured holistically rather than incrementally patched
**Outcome:** FAS-2 consolidation captured cross-analyst connections (e.g., demand-supply overlaps between FAS-11 and FAS-12 data) that would have been missed if written incrementally; completed in one heartbeat with no revision passes needed
---

## [strat-012] 2026-04-09 | helpful=0
**Context:** When a tool/service was previously reported as down and you need to act on that status in a subsequent heartbeat
**Strategy:** Re-verify the current status by actually calling the service (e.g., curl) before posting updates or escalating — don't trust stale status from a previous heartbeat's findings
**Outcome:** Discovered Lost Leads tool had recovered between heartbeats, avoiding unnecessary escalation noise and enabling immediate progress on dependent work instead of blocking on a resolved issue
---

## [strat-013] 2026-04-10 | helpful=0
**Context:** When a coordinator heartbeat receives a board synthesis comment with prioritized actions alongside raw analyst notes
**Strategy:** Use the board's prioritized action list as the execution checklist, then selectively read raw analyst notes only for the detail needed to execute each action — don't re-derive priorities from scratch
**Outcome:** Single heartbeat completes escalation (FAS-19 creation), consolidated daily note, and parent issue update without wasting cycles on redundant analysis of already-synthesized inputs
---

## [strat-014] 2026-04-10 | helpful=0
**Context:** When a strategic analysis reveals a positioning constraint (e.g., entity can't be a direct funding beneficiary), and derived actions involve multiple people
**Strategy:** In the same heartbeat, pivot the positioning (e.g., training layer for beneficiaries), create assigned sub-issues for monitoring tasks (FAS-21 for Raul), and escalate product proposals to decision-makers via parent issue comments — don't defer derived actions to a separate coordination pass
**Outcome:** Single heartbeat completes the full analysis-to-action chain: strategic pivot + delegation + stakeholder escalation, preventing the insight from going stale or requiring a re-read of the analysis in a future cycle
---

## [strat-015] 2026-04-10 | helpful=0
**Context:** When a research sub-issue delivers findings that shift the parent issue from intelligence-gathering to commercial action (e.g., beneficiaries identified from a public resolution)
**Strategy:** In the same heartbeat, update all dependent artifacts — sub-issue status, parent issue table, daily note, and post a stakeholder comment — before closing the cycle, so the phase transition is fully recorded and no tracking surface is left stale
**Outcome:** Prevents the next heartbeat from re-deriving the transition or posting duplicate updates; stakeholders see the shift immediately and can act on it without waiting for a sync cycle
---

## [strat-016] 2026-04-10 | helpful=0
**Context:** When a heartbeat receives new intelligence from a stakeholder that includes both actionable findings and a blocker
**Strategy:** Process actionable items (update daily note, sub-issues table) and escalate the blocker in a single heartbeat by posting a targeted comment on the relevant issue — don't defer the blocker to a future heartbeat
**Outcome:** Prevents the blocker from silently stalling dependent work across heartbeat boundaries; stakeholders see the escalation immediately alongside the progress update
---

## [strat-017] 2026-04-10 | helpful=0
**Context:** When consolidating daily recurring intelligence notes from multiple analysts
**Strategy:** Read the previous day's consolidated note as a baseline before writing today's, then explicitly call out deltas (stable vs. changed indicators) rather than presenting each day's data in isolation
**Outcome:** The consolidated note gains temporal context — readers see what moved and what held steady, making the intelligence actionable rather than a flat snapshot
---

## [strat-018] 2026-04-10 | helpful=0
**Context:** When a recurring deliverable (e.g., daily standup) already exists for the current period and new intelligence has arrived since it was written
**Strategy:** Compare the deliverable's last-modified timestamp against activity timestamps on source issues (e.g., daily notes, research outputs) — if newer data exists, do a surgical edit to append only the delta rather than regenerating the entire document
**Outcome:** Avoids overwriting human or earlier-heartbeat edits, preserves the original structure, and completes the update in a single heartbeat instead of a full rewrite cycle
---

## [strat-019] 2026-04-10 | helpful=0
**Context:** When a new heartbeat needs to produce a deliverable file and a prior heartbeat may have already written content under a different filename
**Strategy:** Before creating the canonical file, search for existing analyst output files that contain the expected content but under variant names — then rename/copy rather than re-generating from scratch
**Outcome:** Avoids duplicate work and data loss; the HB17 findings were already complete in analyst-raul-demand.md and just needed renaming to analyst-corporate.md, saving an entire research cycle
---

## [strat-020] 2026-04-11 | helpful=0
**Context:** When multiple regulatory monitoring items (e.g., BOE classifications, EPA updates) are stalled simultaneously over many weeks
**Strategy:** Investigate a single shared root cause (e.g., a Real Decreto or legislative change) rather than treating each stalled item as independent — trace the common upstream blocker and close the investigation once identified
**Outcome:** Eliminates redundant per-item investigation cycles; a single root-cause finding (Real Decreto 10/2025 → CNAE-2025) resolved the status of multiple correlated monitoring items in one heartbeat instead of N separate ones
---

## [strat-021] 2026-04-13 | helpful=0
**Context:** When a standup/summary issue requires aggregating activity across multiple analysts and sub-issues in a single heartbeat
**Strategy:** Read all daily-note files and recent git activity in parallel first to build a complete picture, then write the standup in one pass — avoid incremental writes or partial summaries that require re-reading
**Outcome:** Completes the entire standup generation and issue closure in a single heartbeat without wasted cycles on incomplete data gathering
---

## [strat-022] 2026-04-13 | helpful=0
**Context:** When creating pages in a Notion database via MCP (e.g., logging standups, research entries)
**Strategy:** Always run notion-search to locate the database, then notion-fetch on its URL to retrieve the schema and data_source_id before calling notion-create-pages — this gives you exact property names and types in one step
**Outcome:** Page creation succeeds on the first attempt with correct field mapping; avoids trial-and-error property name guessing that wastes heartbeat cycles
---

## [strat-023] 2026-04-14 | helpful=0
**Context:** When a wake payload references an issue ID that doesn't exist in the system (stale or premature wake)
**Strategy:** Immediately check the agent's inbox for actual in-progress issues and fall back to productive work on those, rather than retrying or waiting for the missing issue to appear
**Outcome:** Heartbeat is not wasted on a non-existent issue; the agent pivots within seconds and delivers a full consolidated note on FAS-4 instead of producing nothing
---

## [strat-024] 2026-04-14 | helpful=0
**Context:** When a heartbeat needs to write a daily analyst note that another analyst session may have already started
**Strategy:** Read the existing deliverable file before writing — detect prior contributions (e.g., another analyst's sections), then merge new findings into the existing structure instead of overwriting with a fresh file
**Outcome:** Preserves cross-analyst accumulated intelligence in a single canonical note; avoids data loss from concurrent analyst heartbeats writing to the same daily file (directly prevents the class of error in pit-004)
---

## [strat-025] 2026-04-14 | helpful=0
**Context:** When a Google Trends query for a multi-word keyword returns 'Something went wrong' or empty results (e.g., 'inteligencia artificial video')
**Strategy:** Try progressively shorter variants of the keyword (e.g., 'ia video' instead of 'inteligencia artificial video') — Trends often fails on longer phrases but succeeds on abbreviated forms that capture the same intent, and the Related Queries section of the shorter variant often surfaces the original long-tail as a rising query, confirming coverage
**Outcome:** Recovers blocked Trends validation in the same heartbeat instead of deferring to the next cycle, and often discovers new high-signal keywords (e.g., 'imagen a video ia' +60%) via the Related Queries of the working variant
---

## [strat-026] 2026-04-14 | helpful=0
**Context:** When a coordinator issue has all analyst sub-issues completed and needs to produce a consolidated deliverable
**Strategy:** Read all analyst deliverable files in parallel in a single tool invocation round, then write the consolidated note immediately without additional research rounds — the analysts have already done the deep work
**Outcome:** Consolidation completes in a single heartbeat (read parallel + write + close) instead of spreading across multiple cycles; avoids redundant re-research of topics analysts already covered
---

## [strat-027] 2026-04-14 | helpful=0
**Context:** When a wake payload references an issue ID that doesn't exist or isn't in your inbox
**Strategy:** Check your identity and inbox first (2 API calls max), then fall back to your actual active assignment rather than exhaustively searching for the referenced issue across multiple endpoints
**Outcome:** Limits wasted heartbeat time on phantom issue lookups to under 30 seconds instead of burning 4-5 API calls on progressively broader searches
---

## [strat-027] 2026-04-14 | helpful=0
**Context:** When a heartbeat needs to write a daily note and a prior heartbeat in the same day may have already created the file
**Strategy:** Check for an existing file first with ls/read before writing — if it exists, read it to identify what data is already present vs. missing, then surgically edit to add only the delta (e.g., new API stats, latest standup) instead of overwriting
**Outcome:** Preserves work from earlier heartbeats and avoids data loss; the merged note is richer than either heartbeat could produce alone
---

## [strat-028] 2026-04-14 | helpful=0
**Context:** When multiple analysts report on the same signal with conflicting conclusions (e.g., one says 'confirmed real', another says 'noise')
**Strategy:** Weight conclusions by methodology quality — direct source access (e.g., Adrian's live LinkedIn sessions) outweighs indirect/scraped fragments (e.g., Iker's Google-based inference). Explicitly document the discrepancy and adjudication reasoning in the consolidated note rather than silently picking one
**Outcome:** Stakeholders see the evidentiary basis for the call, not just the conclusion; prevents a single analyst's methodology weakness from driving strategy
---

## [strat-029] 2026-04-14 | helpful=0
**Context:** When bulk-uploading many similar records to Notion (e.g., 56+ daily knowledge pages from local files)
**Strategy:** Batch reads and creates in parallel rounds of 4-6: read all files for the batch in parallel, then create all Notion pages in parallel, then advance to the next batch — and fetch the DB schema exactly once at the start to reuse field mappings
**Outcome:** Maximizes throughput per heartbeat; avoids redundant schema fetches; each round completes ~5 pages instead of doing them serially
---

## [strat-030] 2026-04-14 | helpful=0
**Context:** When auditing a Notion database for duplicates or inconsistencies across bulk-uploaded entries
**Strategy:** Fetch suspicious pages in parallel pairs to compare content side-by-side, rather than relying solely on title-based search — empty stubs and content-rich pages can share similar titles but differ in naming scheme, so comparing actual page content reveals which is the canonical entry vs. the duplicate
**Outcome:** Completes a full duplicate audit in a single heartbeat by progressively narrowing from broad search to targeted fetch-and-compare, producing an actionable cleanup report with specific page IDs and recommended actions
---

## [strat-031] 2026-04-14 | helpful=0
**Context:** When generating a cross-organization standup or summary report from multiple analysts' daily notes
**Strategy:** Read the previous standup first to establish format and baseline, then batch-read all current daily notes in parallel (6+ concurrent reads), and only write the report after all inputs are collected — never start writing incrementally
**Outcome:** Produces a consistent, complete standup in a single heartbeat without format drift or missing analyst coverage; parallel reads keep the gather phase fast
---
