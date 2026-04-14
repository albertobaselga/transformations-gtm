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


## [strat-002] 2026-03-26 | helpful=0
**Context:** When ultrawork is invoked but the task is a single cohesive deliverable (e.g., writing one document)
**Strategy:** Skip parallel decomposition and delegate directly to a single specialized agent (writer) with full context, rather than forcing artificial parallelism
**Outcome:** Faster delivery with better coherence — parallel splits on inherently sequential work (like a strategy document) produce fragmented output that needs stitching
---

## [strat-003] 2026-03-26 | helpful=0
**Context:** When Stitch API cannot reliably return generated screens for review/export
**Strategy:** Bypass Stitch retrieval entirely — create a self-contained HTML deck with all slide content and convert to PDF via Puppeteer, giving full control over layout and output
**Outcome:** Eliminates dependency on unreliable async API; guarantees content fidelity and professional formatting
---

## [strat-004] 2026-03-26 | helpful=0
**Context:** When a content change must propagate across multiple output formats (markdown doc + HTML deck + PDF)
**Strategy:** Parallelize source file updates (md + html) via concurrent agents, then sequentially regenerate derived artifacts (PDF) only after both sources are confirmed updated
**Outcome:** Faster turnaround on content revisions — the bottleneck is PDF generation, not editing, so parallelizing edits saves wall-clock time without risking stale content in the PDF
---

## [strat-005] 2026-03-27 | helpful=0
**Context:** When a strategic nuance must be woven into a comprehensive document that references the concept in 5+ sections
**Strategy:** Edit definition sections first (e.g., 'Cambio 3'), then operational/implementation sections, then framing sections (executive summary, thesis) last — later sections depend on earlier definitions being stable
**Outcome:** Ensures internal consistency across the document; framing text naturally reflects the fully-propagated nuance rather than requiring back-and-forth corrections
---

## [strat-006] 2026-03-27 | helpful=0
**Context:** When a complex visual element (flow diagram, loop, block diagram) renders poorly inside a dense PDF section
**Strategy:** Separate the visual into its own dedicated section/page with full width, rather than trying to fit it inline with surrounding text content
**Outcome:** Visual elements get the space they need to render clearly — cramming diagrams into text-heavy sections causes overlap, truncation, and illegibility in PDF output
---

## [strat-007] 2026-03-27 | helpful=0
**Context:** When rendering flow diagrams with connecting arrows/curves in HTML destined for Puppeteer PDF/PNG export
**Strategy:** Use CSS-pure approaches (borders, pseudo-elements, box-shadow curves) instead of inline SVG with absolute coordinates for connecting visual elements in flow diagrams
**Outcome:** CSS-pure connectors respect the document flow and render reliably in Puppeteer, whereas SVG overlays with absolute positioning misalign with flex/grid-based flow-steps across different viewport sizes
---

## [strat-008] 2026-03-27 | helpful=4
**Context:** When setting up a new tool/platform integration (like Paperclip AI) that requires multiple interconnected config files
**Strategy:** Run parallel research agents to investigate the external tool's model AND the internal requirements simultaneously, then create all config files in a batch only after both investigations complete
**Outcome:** Zero rework on file creation — all agent definitions, company config, and setup scripts were correct on first pass because the data model was fully understood before any writes
**Nuance:** When the mapping involves opaque IDs (UUIDs), persist the slug-to-UUID mapping as a reference file so future sessions skip re-discovery entirely — turns O(N) API queries into a single file read
**Nuance:** Generalize beyond UUID mapping: do a complete API surface discovery pass (list endpoints, test CRUD, map entity relationships) before writing any automation — not just persist slug-to-UUID mappings, but validate endpoint shapes and required fields upfront
**Nuance:** For hierarchical imports (org charts with reportsTo), verify the hierarchy immediately after import and before creating dependent resources (routines → triggers → reference mapping) — catching hierarchy errors early avoids tearing down and recreating the entire dependency chain
**Nuance:** For bulk feature-flag updates across many agents: (1) PATCH a single agent first to confirm the field name and accepted values, (2) categorize agents by role to determine which actually need the feature (e.g., only research agents need Chrome access), (3) then iterate only on the relevant subset — this avoids wasted API calls and prevents enabling capabilities on agents that don't need them
**Nuance:** For pure read-only analysis tasks (no code changes), the same batch-first principle applies even more strongly: gather ALL config files and API responses in a single parallel batch before any analysis, then produce the complete study in one pass — this avoids iterative back-and-forth reads, keeps all data in context for cross-referencing (e.g., comparing heartbeat intervals across agents vs routine schedules), and reduces token usage
**Nuance:** For bulk config updates across many agents, first discover the API surface topology: grep the codebase to map which fields route through which endpoints (e.g., general PATCH vs dedicated /permissions endpoint), then batch all same-endpoint changes together before moving to the next endpoint type — fields sent to the wrong endpoint may appear to succeed (200 OK) but silently fail to persist
**Nuance:** When adding a new recurring routine to an agent (e.g., daily Notion publishing), inventory existing content first (find | wc -l) to size the backfill, then create the routine, update AGENTS.md, and open a backfill issue in one coordinated pass — prevents deploying automation that handles new content while leaving historical knowledge stranded
---

## [strat-009] 2026-03-27 | helpful=0
**Context:** When generating many similar files from a template (e.g., 20 agents x 4 files = 80 files for Paperclip)
**Strategy:** First read the existing file structure to understand the exact format expected, then batch-create files in parallel groups by agent rather than by file type — this keeps each agent's files internally consistent
**Outcome:** Faster generation with fewer format mismatches; reading the target structure first prevents rework from wrong directory paths or missing fields
**Nuance:** When parallelizing multi-component builds, keep the most critical/testable component in the foreground for immediate feedback while running bulk generation in background agents — but always verify background output for completeness before proceeding, as unattended generation can silently miss items
---

## [strat-010] 2026-03-29 | helpful=0
**Context:** When debugging a multi-layer system (Paperclip: config files → server logs → agent run logs → task state) where 'something doesn't work'
**Strategy:** Escalate through log layers systematically: start with config verification, then server-level logs, then per-agent run logs, then application state (tasks/issues). Each layer narrows the hypothesis. Parallelize independent checks (file verification vs log review) but keep layer escalation sequential
**Outcome:** Found the real signal in agent run logs (agents waking with no tasks) after server logs showed zero errors — skipping to task state then revealed 87 issues mostly done, proving the system was actually working. Systematic layer traversal prevented a false diagnosis
---

## [strat-011] 2026-03-29 | helpful=0
**Context:** When debugging why a Paperclip agent isn't executing tasks despite having run logs showing it wakes up repeatedly
**Strategy:** Trace the full message sequence in the agent's conversation logs (SYSTEM init → hooks → USER messages → ASSISTANT responses) to verify whether instructions (AGENTS.md, HEARTBEAT.md) are actually being injected as prompts by the adapter, rather than assuming the agent receives them
**Outcome:** Pinpoints the root cause at the adapter/injection layer instead of wasting time on agent logic — the agent may be functioning correctly but simply never receiving its instructions
---

## [strat-012] 2026-03-29 | helpful=0
**Context:** When a third-party platform's behavior is opaque (e.g., Paperclip adapter not injecting instructions correctly) and API docs don't explain internals
**Strategy:** Clone the platform's source repo and read the actual adapter/execution code to find the exact injection mechanism — in this case, finding `packages/adapters/claude-local/src/server/execute.ts` revealed the default prompt template and how `instructionsFilePath` is read
**Outcome:** Pinpointed exact root cause (default prompt template on lines 302-303 vs instructionsFilePath on line 310) instead of guessing from external API behavior — turned a black-box debug into a white-box one
---

## [strat-013] 2026-03-29 | helpful=0
**Context:** When bulk-updating agent configurations (model, reasoning level) across 20+ agents via API
**Strategy:** Update and verify ONE agent first (confirm heartbeat succeeds with new config), then batch-update the rest. Use the merge behavior of PATCH endpoints to send only changed fields (e.g., `{"adapterConfig": {"model": "..."}}`) instead of replacing the entire config
**Outcome:** Catches config issues before they propagate to all agents; merge-patch avoids accidentally wiping other adapterConfig fields during bulk updates
---

## [strat-014] 2026-03-29 | helpful=0
**Context:** When adding a new output format requirement (e.g., HTML dossiers) across many agents in a multi-agent system like Paperclip
**Strategy:** Layer the change in three sequential steps: (1) create the output folder structure, (2) create a shared template and inject format instructions into all relevant agents via batch scripting, (3) add agent-specific routing (which subfolder each agent writes to) — never skip step 3
**Outcome:** Prevents agents from writing to wrong locations or using inconsistent formats; the per-agent routing step eliminates ambiguity that batch injection alone leaves open
---

## [strat-015] 2026-04-09 | helpful=0
**Context:** When a platform (Paperclip) has agents that aren't working and the user reports missing files
**Strategy:** Investigate the platform's actual requirements (docs, existing working examples) before assuming what's missing — the user suspected missing HEARTBEAT.md/TOOLS.md files, but the real issues were disabled heartbeats, wrong model tiers, and missing workspace configs
**Outcome:** Avoided creating unnecessary files; fixed the actual blockers (config flags, model assignments, workspace UUIDs) that prevented agents from running
---

## [strat-016] 2026-04-09 | helpful=0
**Context:** When configuring a multi-agent platform (Paperclip) with multiple AI engine options (Claude, Codex/GPT)
**Strategy:** Match engine to agent role capabilities: use Codex/GPT for research-oriented agents that benefit from native web search (competitor analysis, job board scraping, market research), keep Claude for code-generation and reasoning-heavy agents
**Outcome:** Each agent uses the engine best suited to its task — research agents get web-native capabilities while implementation agents retain strong reasoning and code generation
**Nuance:** Beyond engine selection, tier heartbeat/polling intervals by role criticality: research agents needing fresh data (competitor analysis, market research) get shorter intervals; stable support/ops agents get longer ones. This maximizes platform utility without wasting cycles. Always manually trigger the first heartbeat for newly configured agents to bootstrap the loop (see pit-017).
---

## [strat-017] 2026-04-09 | helpful=0
**Context:** When rewriting instructions/personalities for a large set of agents (12) that share common traits but differ in role
**Strategy:** Group agents into batches (e.g., 3-4 per executor) and rewrite all AGENTS.md files in parallel via concurrent agents, after first collecting all file paths in a single pass
**Outcome:** Cuts wall-clock time roughly 3x compared to sequential rewrites, while each executor has a small enough batch to maintain quality and consistency across the shared personality traits
---

## [strat-018] 2026-04-10 | helpful=0
**Context:** When adding a new capability (keyword search volumetrics) to an existing multi-agent Paperclip ecosystem with 12+ agents
**Strategy:** Create a dedicated new agent with a focused role rather than overloading an existing agent, then immediately wire it into the org chart hierarchy under the appropriate manager and verify the heartbeat starts before moving on
**Outcome:** Clean separation of concerns — the new agent (Marina Reyes, #13) bootstrapped and ran its first heartbeat immediately, without disrupting the existing 12 agents or requiring changes to their instructions
---

## [strat-019] 2026-04-14 | helpful=0
**Context:** When ultrawork is invoked to organize/group existing files by topic (no code changes, just file moves)
**Strategy:** Skip parallel agent decomposition entirely — list the directory once, classify by filename keywords (e.g., 'comercializacion' vs GTM), then batch mkdir+mv in parallel Bash calls
**Outcome:** Single-pass execution without agent overhead; file moves are inherently fast and don't benefit from agent parallelism
---

## [strat-020] 2026-04-14 | helpful=0
**Context:** When Sara (or any agent) syncs file-based notes to Notion and multiple files per day exist because agents run on sub-daily heartbeats
**Strategy:** Instruct the agent to group/concatenate/summarize all files sharing the same date into a single Notion entry rather than 1:1 file-to-page mapping
**Outcome:** Avoids Notion clutter and duplicate daily entries when agent cadence is faster than the publishing cadence
---

## [strat-021] 2026-04-14 | helpful=0
**Context:** When asked to analyze a large strategy document plus a derivative one-pager for robustness/coherence/DAFO
**Strategy:** Read the master strategy file in parallel chunked Read calls (offset/limit) alongside the one-pager in a single batch, then run analysis once all content is in context
**Outcome:** Avoids sequential reads on long Spanish strategy docs and keeps cross-references (master vs derivative) available for coherence checks in one pass
---

## [strat-022] 2026-04-14 | helpful=0
**Context:** When ultrawork is invoked with 8+ independent analytical annexes plus one cross-cutting edit to the master document
**Strategy:** Dispatch all parallel agents first in a single batch, then use foreground time productively by executing the sequential master-doc edit (taxonomy reconciliation) while background agents run
**Outcome:** Maximizes wall-clock utilization — the sequential edit completes during the parallel window instead of adding latency after
---

## [strat-023] 2026-04-14 | helpful=0
**Context:** When producing a multi-annex deliverable (e.g., 8 anexos, 400-600 lines each) that must be integrated into a master plan
**Strategy:** Generate all annexes in parallel agents first, then once all complete do a single sequential integration pass: verify file presence/line counts via Bash, append the index section (§N) to the master plan, and re-verify master integrity
**Outcome:** Clean separation between parallel authoring and sequential integration avoids race conditions on the master file and guarantees the index matches actual annex content
---

## [strat-024] 2026-04-14 | helpful=0
**Context:** When updating an executive one-pager that exists in multiple synced formats (MD source + HTML deck + PDF)
**Strategy:** Launch parallel agents for HTML (opus, layout-heavy) and MD (sonnet, prose) edits, and prepare the PDF regeneration script in the same turn while agents run — so PDF rebuild starts the instant both sources land
**Outcome:** Eliminates idle wall-clock time between edit completion and derivative regeneration; PDF script is pre-staged not reactive
---

## [strat-025] 2026-04-14 | helpful=0
**Context:** When user feedback signals a derivative doc (one-pager, summary) is too complex with tables/KPIs and the user wants visual simplicity
**Strategy:** Rewrite the markdown source yourself (short, direct) and only delegate the HTML rendering to an agent with strict simplicity constraints — don't delegate the content decisions, only the visual execution
**Outcome:** Preserves editorial control over what to cut while leveraging agent capacity for layout/CSS work
---

## [strat-026] 2026-04-14 | helpful=0
**Context:** When Paperclip agents are burning through token credits faster than planned (e.g., a week of tokens in 2 days)
**Strategy:** Audit heartbeat frequency first — calculate heartbeats/week × model tier cost before tuning anything else. Reduce heartbeat cadence to ~1/day and let routines (cron triggers) be the primary execution driver instead of heartbeat polling
**Outcome:** Opus agents on 2h heartbeats generate 75+ invocations/week per agent; shifting to daily heartbeats + routine-driven execution cuts cost by ~10x while preserving scheduled work
---
