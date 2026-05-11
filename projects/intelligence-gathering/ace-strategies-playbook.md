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

## [strat-004] 2026-04-09 | helpful=4
**Context:** When a research heartbeat needs to investigate multiple competitors or topics via web search
**Strategy:** Batch 4+ parallel WebSearch calls grouped by competitor/topic in a single tool invocation round, then do a second round of targeted follow-up searches and WebFetch for gaps — this completes a full competitive analysis in a single heartbeat
**Outcome:** FAS-6 competitive analysis (CEI, Lightbox, and others) completed in one heartbeat instead of spreading across multiple wake cycles, because parallel search eliminated serial wait time
**Nuance:** Formalize as a 3-round funnel (Round 1 broad parallel searches per axis, Round 2 targeted gap-fills, Round 3 WebFetch on highest-signal articles) with a hard stop: write the deliverable immediately after Round 3 — no open-ended exploration beyond 3 rounds
**Nuance:** Enforce a hard stop after Round 3: write the deliverable with available intelligence and explicitly flag missing data points (e.g., 'pricing not publicly available') rather than burning additional rounds chasing diminishing returns. The 90%-complete deliverable written in one heartbeat is more valuable than a 100%-complete one that takes three.
**Nuance:** Apply the parallel-batch pattern as a mandatory freshness gate before daily consolidated notes lock in — 3-4 parallel WebSearch calls on highest-stakes live signals (Indeed score, job posting counts, BOE/regulatory status) in a single round before drafting. Distinct from the 3-round research funnel: this is a single-round verification pass, not open-ended exploration, and targets values that will be cited verbatim in downstream deliverables.
**Nuance:** Extend parallelism beyond homogeneous WebSearch batches: when a task needs both tool setup (e.g., pip install pdfminer.six) and information gathering (WebSearch), fire them in the same tool-call round since they are independent — the toolchain is ready by the time URLs are identified, eliminating the serial setup-after-discovery wait.
**Nuance:** When a heartbeat falls T-1 before a major industry event (NAB, IBC, etc.), bias Round 1 parallel queries toward pre-announcement partnership leaks and keynote preview articles rather than generic trend terms — these signals commoditize within 24h of Day 0, so capturing them pre-event yields disproportionate intelligence value vs. post-event recap coverage.
**Nuance:** When a heartbeat falls T-1/T-0 of a major industry event and the downstream goal is quantifying post-event demand lift (not just capturing pre-event partnership leaks), skip Google Trends entirely (bot-blocked) and use the parallel-WebSearch round to pin down a W-N baseline value for each target keyword, then write a 'baseline pre-event' note that logs the reference value explicitly — this turns the post-event heartbeat into a delta calculation instead of a context-free spike report.
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
**Nuance:** When the task is refreshing a specific data point (not broad delta scoping), read the prior deliverable first to pin down the exact metric name and baseline value, then scope searches and PDF extraction to that single data point — prevents scope creep into adjacent metrics and keeps extraction targeted (e.g., 'confirm CNAE 59 YoY for March vs -19.5% Jan-Feb baseline' instead of re-scanning the whole SEPE report).
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

## [strat-032] 2026-04-15 | helpful=0
**Context:** When a coordinator heartbeat wakes for a daily consolidation routine (e.g., FAS-55)
**Strategy:** Before producing any deliverable, check if analyst notes and the consolidated note already exist for today's date — if all outputs are present, close the issue immediately without redundant work
**Outcome:** Avoids wasting heartbeat time re-generating content that prior sessions already produced; closes the issue in a single heartbeat instead of duplicating effort
---

## [strat-033] 2026-04-15 | helpful=0
**Context:** When a data-extraction heartbeat finds an empty queue (0 unprocessed items) but still needs to produce value
**Strategy:** Pivot from extraction to cross-referencing existing aggregates with intelligence from other areas (e.g., CEO standup, peer analyst notes) — the deliverable becomes a synthesis note rather than a processing report
**Outcome:** Heartbeat produces actionable intelligence instead of a vacuous 'nothing to process' update; cross-area signals (like price-value dissonance: top churn reason = price but 57% sensitivity = LOW) surface insights invisible to single-source analysis
---

## [strat-034] 2026-04-15 | helpful=0
**Context:** When a Head coordinator runs a morning review heartbeat and needs to produce a consolidated daily note
**Strategy:** Read other Heads' daily notes (cross-team intel) before writing your own consolidation — specifically look for data points that directly reinforce or contradict your own analysts' findings, then weave those cross-references into your note as actionable connections (e.g., Lucia's pricing map directly arms Daniel's no-compra objection handling)
**Outcome:** The consolidated note becomes a cross-functional intelligence product rather than a siloed summary, surfacing connections that no single analyst would see in isolation — this is the unique value a Head adds beyond aggregation
---

## [strat-035] 2026-04-15 | helpful=0
**Context:** When creating a Notion page from a local standup markdown file with multi-select properties
**Strategy:** Fetch the Notion database schema (data_source_id/collection) first to discover exact property names and valid enum values before constructing the create-pages payload — this prevents mismatched field names or invalid enum entries
**Outcome:** Page creation succeeds on the first attempt without trial-and-error, saving a heartbeat cycle that would otherwise be lost to a schema mismatch error
---

## [strat-036] 2026-04-15 | helpful=0
**Context:** When creating a consolidated Notion page from multiple analyst notes where the DB schema has single-select fields (e.g., Agente)
**Strategy:** Fetch the database schema BEFORE composing the page payload to discover field constraints (single-select vs multi-select), then use a catch-all value like 'Otros' with a distinguishing Area like 'Consolidado' for multi-source entries
**Outcome:** Avoids a failed create call due to passing multiple values into a single-select field, completing the sync in one heartbeat instead of two
---

## [strat-037] 2026-04-16 | helpful=0
**Context:** When a daily heartbeat falls on a pre-synthesis day (e.g., Thursday before weekly synthesis) and there are unresolved personnel issues (prolonged absences, missing inputs)
**Strategy:** Combine personnel escalation actions (flagging Adrian's 6-day absence per CEO directive) with parallel research web searches in the same heartbeat — address coordination debt and content gaps simultaneously before the synthesis deadline
**Outcome:** A single heartbeat handles both the time-sensitive escalation and content production, preventing the escalation from consuming the entire window and leaving no research done before the weekly cutoff
---

## [strat-038] 2026-04-16 | helpful=0
**Context:** When a research heartbeat needs to produce a reusable operational framework (not just a one-off note) for a multi-day event like NAB
**Strategy:** Structure the deliverable as a detection framework with channels, signal/noise criteria, and daily reporting format — not just a list of findings from today's searches. Write the framework scaffolding first, then fill it with Round 1-3 search results
**Outcome:** The note becomes a reusable tool for subsequent heartbeats during the event period, so future sessions can apply the same filters and channels without re-deriving the methodology each time
---

## [strat-039] 2026-04-16 | helpful=0
**Context:** When a heartbeat picks up pending items from a prior deliverable (e.g., D3 left 5 action items for D4)
**Strategy:** Parse the prior note into an explicit checklist via TodoWrite at heartbeat start, then execute items in parallel where independent — this prevents drift and makes progress auditable within the heartbeat
**Outcome:** All 5 pending items from D3 were tracked and completed in a single heartbeat without losing any; TodoWrite also signals to the coordinator which items were addressed
---

## [strat-039] 2026-04-16 | helpful=0
**Context:** When a coordinator heartbeat discovers that a blocking data source (e.g., SEPE monthly report) has become available after days of being unavailable
**Strategy:** Immediately fetch and extract the key data points in the same heartbeat, then flag the unblock in the consolidated daily note with explicit attribution to the analyst who was blocked — this converts a discovery into actionable intelligence without requiring an additional wake cycle
**Outcome:** Sofia's 5+ day block on SEPE March 2026 data was resolved in the same heartbeat that discovered availability, eliminating what would have been another idle analyst cycle waiting for coordinator notification
---

## [strat-040] 2026-04-16 | helpful=0
**Context:** When a team member (analyst/head) has been absent for multiple days with no activity trail in the system
**Strategy:** Create a formal escalation issue assigned to the absent person's manager (or CEO for heads) with specific absence duration, last-known activity, and impact on blocked workstreams — don't just mention the absence in a daily note where it can be overlooked
**Outcome:** Adrian's 6-day absence was escalated as FAS-71 to Elena (CEO) with clear accountability, rather than being buried in a daily note that decision-makers might not read
---

## [strat-041] 2026-04-16 | helpful=0
**Context:** When a coordinator heartbeat finds all child analyst issues already completed and needs to produce a consolidated note
**Strategy:** Read all analyst notes in parallel first, then read the previous day's consolidated note for continuity context before writing — this lets you detect cross-analyst convergence (multiple analysts independently confirming the same signal from different angles) and highlight it as high-confidence intelligence rather than treating each analyst's findings as independent items
**Outcome:** The consolidated note surfaces triangulated signals (e.g., all three analysts confirming SHIFTA has FUNDAE) with higher confidence than any single analyst could provide, and the previous-day read ensures the note answers known open questions from the last standup rather than restating already-known context
---

## [strat-042] 2026-04-16 | helpful=0
**Context:** When the primary browser automation tool (Chrome MCP) is unavailable during a heartbeat that requires web scraping
**Strategy:** Immediately fall back to Playwright MCP without spending additional cycles debugging Chrome availability — check for Playwright via ToolSearch and proceed with browser_navigate
**Outcome:** Preserves the heartbeat's web-scraping capability instead of wasting the cycle on tool troubleshooting; the monitoring task can still complete with an alternative browser backend
---

## [strat-042] 2026-04-16 | helpful=0
**Context:** When an escalation issue claims an analyst has been inactive for N days
**Strategy:** Before acting on the escalation's stated timeline, independently verify the claim by checking the actual deliverable files (daily-notes directories) and agent status — the escalation description may contain stale or incorrect data
**Outcome:** Discovered FAS-71 claimed 6-day gap from April 10 but notes existed through April 14 — the real gap was 2 days, caused by zero assigned issues (agent idle), not analyst failure. This led to the correct fix (assigning a new issue to wake the agent) rather than an unnecessary investigation or reprimand
---

## [strat-043] 2026-04-16 | helpful=0
**Context:** When scanning job portals for demand signals and an AI-native company (e.g., ElevenLabs) appears as an employer for the same roles being tracked
**Strategy:** Flag AI companies hiring creative roles (motion designer, video editor) as an 'inverted signal' — they validate demand for the skill even as their tools automate parts of it, and represent a new employer category for the client's talent positioning
**Outcome:** Surfaces a non-obvious insight: AI companies are net creators of certain creative roles, not just disruptors — this reframes the client's competitive narrative from threat to opportunity
---

## [strat-044] 2026-04-16 | helpful=0
**Context:** When an analyst heartbeat finds zero new data (no new leads, same totals) but the CEO standup or external signals introduce a context shift (e.g., a competitor gaining a capability previously treated as a differentiator)
**Strategy:** Perform a 'delta analysis' — reinterpret the same static dataset through the lens of the new external signal, updating strategic implications and recovery arguments rather than reporting 'no change'
**Outcome:** The analyst note remains valuable even with no new raw data, because the interpretation layer changes — stakeholders get updated strategic framing (e.g., FUNDAE no longer a unique differentiator) instead of a stale 'nothing to report' update
---

## [strat-045] 2026-04-16 | helpful=0
**Context:** When a heartbeat coincides with a cross-cutting deadline (e.g., pre-synthesis input due Thursday) and the daily note already contains comprehensive analysis
**Strategy:** Check the CEO standup first to surface time-sensitive deliverable deadlines, then verify whether the target output directory (e.g., opportunity-synthesis/working/) is populated — if empty, formalize existing daily-note analysis into the required deliverable format rather than re-researching from scratch
**Outcome:** Delivers the formal pre-synthesis input in a single heartbeat by reusing already-synthesized daily-note content, avoiding redundant research and meeting the cross-cutting deadline without an extra wake cycle
---

## [strat-046] 2026-04-16 | helpful=0
**Context:** When a time-sensitive deliverable is due (e.g., pre-synthesis by 16:00) but one analyst's input is days stale and another has no note today
**Strategy:** Proceed with available data in a single heartbeat: use the freshest note from each analyst (even if days old), cross-fill gaps from Lost Leads API and cross-team notes, and write both the daily note AND the pre-synthesis input in the same heartbeat rather than deferring to wait for fresh analyst input
**Outcome:** Both deliverables land before the deadline instead of missing it waiting for inputs that may never arrive; the pre-synthesis exists for Elena even if imperfect, versus no input at all
---

## [strat-047] 2026-04-16 | helpful=0
**Context:** When a Head reviews analyst status and finds one idle with 0 assigned issues
**Strategy:** Immediately create and assign a new issue to the idle analyst in the same heartbeat rather than just flagging the gap — replicate the pattern that previously unblocked another analyst (e.g., FAS-72 for Adrian → FAS-77 for Sofia)
**Outcome:** The analyst gets unblocked within one heartbeat instead of waiting for a coordinator to notice and act in a separate cycle; the Head note documents both the gap and the resolution, giving the synthesis layer a complete picture
---

## [strat-048] 2026-04-16 | helpful=0
**Context:** When a scoped wake payload targets a single issue (e.g., FAS-83) with a clear deliverable
**Strategy:** Skip the generic repo-exploration phase entirely and go straight to the execution tool chain: checkout → read source artifact → load target API schema → write → close issue — acknowledge the wake in one sentence, not a paragraph
**Outcome:** Single-heartbeat completion of scoped issues; the wake-payload instruction to avoid generic exploration is honored, keeping the heartbeat under the intended scope
**Nuance:** When the scoped issue isn't visible in `paperclip inbox` or active-issue listings, check environment variables (e.g., PAPERCLIP_ISSUE_ID) or the wake payload header first — the scoped ID is typically provided by the wake mechanism, so skip repeated CLI searches and proceed directly to checkout.
---

## [strat-049] 2026-04-16 | helpful=0
**Context:** When a coordinator heartbeat needs to consolidate multiple analyst daily notes into a single Notion page
**Strategy:** Read ALL daily-notes files for the date in a single parallel tool round BEFORE loading Notion tools, then fetch the target database schema once to confirm the data source URL and property types before calling notion-create-pages
**Outcome:** Consolidation completes in one heartbeat: parallel reads eliminate serial wait, and fetching schema first prevents property-mismatch failures that would waste a retry cycle
---

## [strat-050] 2026-04-17 | helpful=0
**Context:** When a daily-collection coordinator issue fires and needs to dispatch subtasks to multiple analysts (e.g., Iker, Noa, Marina) with date-specific priorities
**Strategy:** Read the latest CEO standup AND the prior day's coordinator note in parallel first to extract today's cross-cutting theme (e.g., 'NAB T-1 synthesis day'), then create all analyst subtasks in a single parallel batch with that theme baked into each brief
**Outcome:** All analysts receive coherent, theme-aligned briefs in one heartbeat instead of generic task assignments; avoids follow-up heartbeats to retrofit priorities after reading the standup
---

## [strat-051] 2026-04-17 | helpful=0
**Context:** When a heartbeat starts with a scoped wake payload naming a specific issue (e.g., FAS-90) and date-sensitive priorities
**Strategy:** Skip the generic inbox scan and repo exploration — go straight to checkout, then read standup + issue context + yesterday's deliverable in parallel in a single tool round before any action
**Outcome:** Condenses context-gathering to one parallel round, leaving the rest of the heartbeat budget for actual intelligence work instead of orientation
---

## [strat-052] 2026-04-17 | helpful=0
**Context:** When a heartbeat needs to use an MCP tool (e.g., Playwright browser_navigate, Notion, Granola) whose schema is not pre-loaded at session start
**Strategy:** Call ToolSearch with query `select:<tool_name>` to load the schema before the first invocation — do this proactively the moment you identify the tool you'll need, not after a failed call
**Outcome:** Avoids InputValidationError failures that would waste a heartbeat cycle; the schema-load is cheap and unblocks subsequent parallel MCP calls
---

## [strat-053] 2026-04-17 | helpful=0
**Context:** When tracking a fast-moving open-source project (e.g., OpenMontage) across heartbeats as a competitive signal
**Strategy:** Always record the absolute star/metric count AND the delta vs the prior heartbeat's recorded value in the daily note — momentum rate is the actionable signal, not the snapshot
**Outcome:** Heads can detect acceleration/deceleration inflection points (e.g., 1.7k → 2.4k in one day) that a flat snapshot would hide, enabling faster strategic response
---

## [strat-054] 2026-04-17 | helpful=0
**Context:** When a research heartbeat surfaces new keywords from an external catalyst (e.g., NAB product announcements) that should be tracked in the keywords database
**Strategy:** Before adding new keywords, grep the existing cluster to confirm they are not already present (including future-dated entries other sessions may have queued), then add only the genuine deltas in a single Edit and verify with a follow-up grep
**Outcome:** Prevents duplicate keyword entries across sessions and confirms the DB state matches the intended addition before closing the issue
---
