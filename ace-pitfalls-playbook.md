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


## [pit-002] 2026-03-26 | helpful=0
**Context:** When generating multi-page PDFs from HTML with Puppeteer's page.pdf()
**Pitfall:** CSS page-break-after/before properties are unreliable in Puppeteer — slides with variable content height get merged onto fewer pages
**Consequence:** 10-slide deck rendered as 8-page PDF, requiring rework and strategy change
**Prevention:** Default to screenshot-per-slide approach for fixed-layout decks; only use print-to-PDF for flowing document content
---

## [pit-003] 2026-03-26 | helpful=0
**Context:** When verifying PDF page counts after generation
**Pitfall:** Used `file` command to check PDF page count, which gave imprecise results
**Consequence:** Wasted a verification step; had to re-verify with Python PDF library
**Prevention:** Always use a proper PDF library (PyPDF2/pikepdf in Python, pdf-lib in Node) for page count verification — never trust `file` command metadata for PDFs
---

## [pit-004] 2026-03-27 | helpful=0
**Context:** When updating a derivative document (One Pager) that should reflect content from a master document (Estrategia_Transformacion_GTM.md)
**Pitfall:** Added new content directly to the One Pager instead of first reading the source strategy document and extracting the relevant section
**Consequence:** Content drift between master and derivative documents; user had to correct that the One Pager must be a faithful extract, not original material
**Prevention:** Always read the master/source document BEFORE editing any derivative (one-pager, deck, summary). Extract and condense from the source — never invent content for derivative documents
---

## [pit-005] 2026-03-27 | helpful=0
**Context:** When generating visual deliverables (PDFs, one-pagers) for executive/business audiences
**Pitfall:** Defaulted to dark mode design (dark background, violet accents) for a business strategy document
**Consequence:** User rejected the output — dark themes read as 'tech product UI', not 'executive document'. Required a full HTML rewrite to light theme
**Prevention:** Default to light, clean, executive design (white background, minimal accent color, professional typography) for business/strategy documents. Reserve dark themes only when explicitly requested or for developer-facing materials
---

## [pit-006] 2026-03-27 | helpful=0
**Context:** When designing flow diagrams for strategy documents that have stages, actions, and iteration loops
**Pitfall:** Rendered flow steps as a flat linear sequence without distinguishing between stages (states), actions (transitions), and decision gates — treating all items as equivalent boxes in a row
**Consequence:** User had to stop and ask to rethink the conceptual model; the diagram didn't reflect the real process structure (stages vs actions vs decisions) and had to be redesigned from scratch
**Prevention:** Before coding any flow diagram, explicitly categorize each element as: Stage (state/phase), Action (what happens), Decision (gate with yes/no paths), and Loop (iteration back to earlier stage). Map connections between them FIRST as a text outline, then translate to visual HTML
---

## [pit-007] 2026-03-27 | helpful=0
**Context:** When rendering flow diagrams for documents with tight vertical space (one-pagers, executive summaries, inline sections)
**Pitfall:** Rendered the Mermaid diagram with default top-down (TD) direction without considering the target container's aspect ratio first
**Consequence:** Produced a 512x1575px image that was unusable in the one-pager layout — required re-editing the Mermaid config, adjusting viewport, and re-rendering
**Prevention:** Before rendering any diagram, define the target dimensions (width x max-height) from the container, then choose graph direction (LR for wide containers, TD for tall ones) and label length accordingly
---

## [pit-008] 2026-03-27 | helpful=0
**Context:** When a conceptual model change (e.g., 6 stages → 4 phases) must propagate across multiple output formats (markdown, HTML deck, diagram, PDF)
**Pitfall:** Started editing the HTML without first auditing how many places referenced the old model — discovered mid-edit that the HTML had 6 hardcoded steps from the previous version
**Consequence:** Had to stop, re-read the full HTML, then do a larger rewrite than expected — wasted a read/edit cycle and risked partial updates
**Prevention:** Before any model-level change, grep all output files for the old model's artifacts (step counts, phase names, labels) to build a complete edit list. Audit first, then edit all locations in one pass
---

## [pit-009] 2026-03-27 | helpful=0
**Context:** When designing an organizational structure (orgchart) for a simulated company or project team
**Pitfall:** Defaulted to a minimal org structure (CEO + a few analysts) without considering all functional areas needed to execute the work — missing CTO, CPO, engineering, data, and product roles
**Consequence:** User had to stop and correct the incomplete structure, wasting a round-trip; the task description had to be rewritten from scratch with a realistic company model
**Prevention:** Before proposing any org structure, enumerate ALL functional domains the work requires (technology, product, data, operations, strategy) and staff each one. Think 'what departments would a real company need to do this?' — not 'what's the minimum headcount?'
---

## [pit-010] 2026-03-27 | helpful=0
**Context:** When designing an organizational structure (agent roles/orgchart) to execute a multi-phase strategy document
**Pitfall:** Designed the org chart from general knowledge of business functions instead of systematically mapping each strategy phase's specific activities to required roles and skill sets
**Consequence:** Missing critical roles (strategist, market intelligence depth, data science) that the user had to flag — required a full rewrite after re-reading the strategy document
**Prevention:** Before designing any org structure or agent team, read the strategy document phase-by-phase and list every distinct capability required, then map capabilities to roles. Don't rely on generic org templates
---

## [pit-011] 2026-03-28 | helpful=0
**Context:** When files written to disk appear empty or broken in an external platform UI (e.g., Paperclip agent instructions)
**Pitfall:** Assumed the issue was file content or markdown formatting, spent cycles verifying file contents on disk instead of investigating how the platform ingests/renders the files
**Consequence:** Multiple read/verify cycles confirmed files were fine locally, but never identified the actual root cause in Paperclip's rendering layer — issue remained unresolved for the user
**Prevention:** When a user reports content appears empty in an external UI but local files have content, shift investigation to the platform's ingestion mechanism (API sync timing, format requirements, encoding) rather than re-reading local files repeatedly
---

## [pit-012] 2026-03-28 | helpful=0
**Context:** When automating resource creation against an undocumented or partially-documented API (e.g., Paperclip localhost instance)
**Pitfall:** Assumed standard REST patterns (GET /resource/:id) existed without verifying — the individual project endpoint didn't exist in this Paperclip version
**Consequence:** Wasted API calls and had to backtrack to discover the correct endpoint structure, delaying the automation script
**Prevention:** Before writing batch-creation scripts, explicitly test each CRUD endpoint you plan to use (list, get-by-id, create, update) with a single manual curl call — don't assume RESTful conventions hold for every platform
---

## [pit-013] 2026-03-29 | helpful=0
**Context:** When a user reports 'something isn't working' in a system with UI + backend + agents
**Pitfall:** Assumed the problem was in configuration/files and spent cycles verifying all 21 agents' configs and grepping 60MB of server logs, when the actual issue was likely a UI rendering problem (as noted early: 'Si la UI los muestra vacios, es un tema de renderizado')
**Consequence:** Multiple rounds of log grep on a 60MB file with zero findings before pivoting to run logs and task state — the early hypothesis about UI rendering was correct but wasn't pursued first
**Prevention:** When the initial diagnosis already identified a likely cause (UI rendering issue), verify that hypothesis FIRST before doing exhaustive infrastructure checks. Start with the most likely explanation, not the most thorough scan
---

## [pit-014] 2026-03-29 | helpful=0
**Context:** When Paperclip uses instructionsBundleMode: managed with a claude_local adapter to inject agent instructions
**Pitfall:** Assumed agents were receiving their AGENTS.md/HEARTBEAT.md instructions because the files existed in the instructions/ directory and the config referenced them — never verified the actual prompt injection in conversation logs
**Consequence:** Agent (Carlos) ran 32+ heartbeat cycles doing nothing, reporting 'no tasks' because it never received the instructions telling it how to query the Paperclip API for assigned issues
**Prevention:** After configuring any agent's instruction bundle, immediately check the first conversation log to verify the instruction content appears as a user/system message before the agent's first response — don't trust config alone, verify the runtime injection
---

## [pit-015] 2026-03-29 | helpful=0
**Context:** When searching for adapter/module code in an unfamiliar monorepo (e.g., Paperclip's codebase)
**Pitfall:** Searched in the obvious top-level `adapters/` directory but the actual code was nested under `packages/adapters/claude-local/` — monorepo package structure doesn't match intuitive directory naming
**Prevention:** When searching unfamiliar repos, use broad recursive grep (`grep -r 'pattern' .`) or `find . -name 'filename'` across the entire repo first, rather than assuming directory structure from top-level folder names
---

## [pit-016] 2026-03-29 | helpful=0
**Context:** When calling internal APIs to update resources (agents, companies, etc.) in a multi-tenant system
**Pitfall:** Assumed the API route included the company prefix (`/api/companies/:companyId/agents/:id`) based on the data model, but the actual route was flat (`/api/agents/:id`)
**Consequence:** First update attempt failed with 404; had to read the source code to find the correct route before proceeding
**Prevention:** Always check the actual route definitions in the codebase (router files, route handlers) before calling internal APIs — don't infer routes from the data model hierarchy
---

## [pit-017] 2026-04-06 | helpful=0
**Context:** When summarizing a multi-step process (like 'Signals to Opportunities') in a one-pager or executive document
**Pitfall:** Elevated an operational detail (TAM calculation) to the same prominence as strategic steps, and listed sub-processes (multiple formations/same TAM, portfolio comparison) as standalone sections instead of nesting them under the parent concept they belong to (portfolio restructuring, recommendation report)
**Consequence:** User had to correct the hierarchy — the document gave disproportionate weight to a minor detail and fragmented concepts that belong together, weakening the narrative flow
**Prevention:** Before structuring a summary: (1) ask which steps are strategic vs operational detail, (2) check if any listed item is actually a sub-step of another — if so, nest it rather than listing it at the same level, (3) for each element, verify its relative importance matches the space it gets in the document
**Nuance:** When documenting decision/triage steps, clarify the exact unit being decided on (recommendation vs opportunity vs signal) and the exact gate criteria (advance vs hold for more evidence) — don't assume the decision object from context
**Nuance:** After fixing agent configuration issues, the system still won't self-start — you must also: (1) create at least one seed issue per active project, (2) manually trigger the first heartbeat to bootstrap the loop. Correct config alone is necessary but not sufficient.
**Nuance:** Before bulk config changes across many agents: (1) list which agents are currently active vs inactive, (2) check for prerequisite blockers (workspace bindings, seed issues), (3) after config update, trigger one heartbeat manually and verify the agent actually runs before proceeding to the next. Correct config alone is necessary but not sufficient.
---

## [pit-018] 2026-04-09 | helpful=0
**Context:** When writing utility scripts (DB init with exec/spawn) or local-only HTML tools (with innerHTML) in a workspace with security hooks
**Pitfall:** Security hooks flagged legitimate patterns (exec in init-db.mjs, innerHTML in a local tool's index.html) as violations, blocking file writes
**Consequence:** Had to rewrite files to work around hook false positives, adding friction to straightforward tool creation
**Prevention:** For local-only tools and init scripts, anticipate hook restrictions: use safer APIs where possible (child_process.execFile instead of exec, DOM manipulation instead of innerHTML), or document why the pattern is safe in a comment so the hook context is clear on retry
---

## [pit-019] 2026-04-09 | helpful=0
**Context:** When background agents are still running and an intermediate check suggests one missed a file
**Pitfall:** Started manually rewriting a file (Iker Molina AGENTS.md) before confirming the background agent had actually failed — the agent was still in flight and completed the work moments later
**Consequence:** Duplicate effort and potential race condition — manual edit could have conflicted with or been overwritten by the background agent's eventual write
**Prevention:** Wait for all background agent completion notifications before diagnosing failures. If an agent appears slow, check its status first rather than assuming failure and starting a manual fix
---

## [pit-020] 2026-04-10 | helpful=0
**Context:** When proposing agent model tiers (Haiku/Sonnet/Opus) for Paperclip agents that will represent the company externally (comms, publishing)
**Pitfall:** Defaulted to Haiku for a comms agent based on cost optimization, but the user wanted Sonnet for higher quality output on customer-facing communications
**Consequence:** Had to revise the spec after user correction — minor rework but signals a misread of quality expectations for externally visible agent output
**Prevention:** For agents whose output is externally visible (comms, publishing, client-facing), default to Sonnet unless the user explicitly asks for cost optimization — reserve Haiku for internal/operational agents only
---

## [pit-021] 2026-04-10 | helpful=0
**Context:** When creating resources via POST to an external API (e.g., Paperclip routines with triggers) and then verifying them via a list endpoint
**Pitfall:** List/index endpoints may omit nested sub-resources (triggers inside routines) that were successfully created — the inline listing showed routines but not their triggers
**Consequence:** False alarm that triggers were missing, requiring extra verification calls to confirm they actually existed
**Prevention:** After creating resources with nested sub-resources via API, verify by fetching the individual resource detail endpoint (GET /resource/:id) rather than relying on the list endpoint to show all nested data
---

## [pit-022] 2026-04-14 | helpful=0
**Context:** When classifying Spanish-language deliverables (GTM vs operativa comercial) by filename alone
**Pitfall:** Ambiguous names like 'One_Pager_Ejecutivo' don't reveal their topic from the filename — risk of misclassification
**Consequence:** Files land in the wrong folder, requiring a second pass to fix after user correction
**Prevention:** For ambiguous filenames, grep the file content for topic keywords ('GTM', 'comercializacion', 'operativa') before moving, rather than guessing from the name
---

## [pit-023] 2026-04-14 | helpful=0
**Context:** When reasoning about company runtime from file date ranges in a Paperclip workspace
**Pitfall:** Assumed file date span (09/04–17/07) reflected actual company runtime, but Paperclip generates future-dated notes programmatically from agent heartbeats
**Consequence:** Misleading estimate of activity volume and incorrect grouping assumptions
**Prevention:** Cross-check file dates against actual heartbeat activity windows before inferring runtime; treat Paperclip-generated dates as scheduled slots, not real timestamps
---

## [pit-024] 2026-04-14 | helpful=0
**Context:** When ultrawork is invoked on a derivative-document update that must stay faithful to a master strategy doc
**Pitfall:** Risk of dispatching parallel rewriter agents without first re-reading the master source, causing the parallel agents to invent executive framing that drifts from canonical content
**Consequence:** Derivative documents diverge from master, requiring a second correction pass after user catches the drift
**Prevention:** Before spawning parallel rewrite agents, read the master strategy doc in the orchestrator turn and pass the extracted executive-relevant sections as explicit context in each agent prompt
---

## [pit-025] 2026-04-14 | helpful=0
**Context:** When generating executive one-pagers for GTM/transformation docs in this workspace
**Pitfall:** Defaulted to including KPI tables, metrics, and dense data blocks in a one-pager meant to explain a new flow visually
**Consequence:** User rejected the output as 'muy complicado'; required full rewrite after 1076-line HTML was already generated and PDF/PNG regenerated
**Prevention:** For one-pagers explaining a flow or process, make the diagram the visual protagonist first. Omit KPIs/tables unless explicitly requested — a one-pager is a narrative artifact, not a dashboard
---

## [pit-026] 2026-04-14 | helpful=0
**Context:** When rewriting a file after a long delay or after delegating intermediate edits
**Pitfall:** Write tool blocked because the file changed since last Read, forcing a re-read mid-flow
**Consequence:** Wasted turn and broke the planned parallel write+delegate batch
**Prevention:** Always Read immediately before Write when any time or tool calls have passed since the prior Read — treat Read→Write as an atomic pair
---

## [pit-027] 2026-04-14 | helpful=0
**Context:** When simplifying a one-pager diagram that depicts a non-linear system (parallel states, bidirectional transitions, loops)
**Pitfall:** Reduced the flow to a left-to-right arrow (inputs → engine → outputs), which reads as a mandatory sequence and misrepresents the actual behavior
**Consequence:** User flagged the misrepresentation; required a full diagram redesign into a hub-and-orbit layout with bidirectional arrows
**Prevention:** Before simplifying system diagrams, confirm the topology (sequential vs. parallel/stateful). For non-linear flows, default to hub-and-spoke or state-orbit layouts with bidirectional arrows and explicit loop-back paths
---

## [pit-028] 2026-04-14 | helpful=0
**Context:** When configuring Paperclip agent heartbeat intervals without modeling weekly token cost
**Pitfall:** Set Opus-tier agents to 2h heartbeat cadence (90 heartbeats/day, 450/week) without projecting token burn — consumed a week of credits in 2 days
**Consequence:** Token budget exhausted mid-week, forcing emergency cadence reduction and disrupting scheduled agent work
**Prevention:** Before enabling any heartbeat schedule on Opus/Sonnet agents, compute heartbeats/week × per-invocation cost and compare against weekly budget. Default to daily (or less frequent) heartbeats and rely on routine triggers for time-sensitive work
---

## [pit-029] 2026-04-14 | helpful=0
**Context:** When preparing a local repo with history (specs, config docs, agent designs) for first push to a new GitHub remote
**Pitfall:** Committed all files without scanning for embedded secrets first — GitHub's secret scanning blocked the push due to a Notion API token buried in a spec document
**Consequence:** Had to redact the token, amend the commit, and retry the push — and the secret now exists in local git history (reflog) even after the amend
**Prevention:** Before the first git add, run a secrets scan (grep -rE for common token patterns like ntn_, sk-, ghp_, xoxb-) across all files, especially docs/specs that often contain real API tokens as examples or references
---

## [pit-030] 2026-05-07 | helpful=0
**Context:** When the user starts dictating strategic pillars mid-sentence (e.g., 'el primer pilar es...') for a multi-pillar transformation document
**Pitfall:** Treating the first pillar mentioned as the complete pillar set and proceeding to draft, instead of pausing to enumerate all pillars and confirm the umbrella scope
**Consequence:** Prompt or document gets written around an incomplete pillar list, requiring a full restructure once the remaining pillars surface
**Prevention:** Before drafting, explicitly ask the user to enumerate all pillars (or confirm the pillar list from sibling strategy docs) and lock the umbrella structure before writing any TODO blocks or section scaffolding
---

## [pit-031] 2026-05-07 | helpful=0
**Context:** When the user corrects a proper noun mid-session (e.g., Northeus → Northius) that appears across multiple files and memory
**Pitfall:** Treating the rename as a local edit and not immediately persisting the canonical spelling to auto-memory before spawning parallel agents
**Consequence:** Background agents may use the stale spelling, requiring a sweep-and-replace after they complete
**Prevention:** On any proper-noun correction, write the canonical name to MEMORY.md FIRST, then spawn downstream agents so they inherit the corrected term via project context
---

## [pit-032] 2026-05-07 | helpful=0
**Context:** When a background sub-agent fails reading a large canonical document (>25K tokens) via Read
**Pitfall:** Treating the sub-agent's Read failure as something the orchestrator must fix mid-flight, instead of trusting the sub-agent to retry with offset/limit
**Consequence:** Orchestrator interferes with in-flight sub-agent work or wastes turns diagnosing a recoverable error
**Prevention:** When spawning sub-agents that must read large docs, pre-instruct them to use Read with offset/limit pagination from the start; do not intervene when their Read fails — they own recovery
---

## [pit-033] 2026-05-07 | helpful=0
**Context:** When in autopilot mode and waiting on background agents to finish writing, with ScheduleWakeup armed
**Pitfall:** Idling with ScheduleWakeup while the autopilot stop hook keeps firing 'not complete' — treating the wakeup as sufficient and not advancing any productive subtask
**Consequence:** Wasted turns where the stop hook re-prompts continuation but no work progresses; autopilot state stays stuck until agents finish
**Prevention:** While background writers run, do not idle — pick up an independent productive subtask (pre-draft dependent doc prompts, verify prior outputs, update memory/index files). Only ScheduleWakeup when there is genuinely zero parallel work available.
**Nuance:** TaskGet/TaskList track Team coordination tasks, not Agent tool background jobs — Agent tool jobs auto-notify on completion, so do not poll them; if you find yourself reaching for TaskGet/TaskList to monitor an Agent background job, that's the signal to instead pick up an independent productive subtask
---

## [pit-034] 2026-05-07 | helpful=0
**Context:** When a writer agent self-reports tensions/concerns in its completion summary for a strategic document
**Pitfall:** Treating the self-reported tensions as the writer's job to resolve, instead of routing them explicitly to the critic agent as validation inputs
**Consequence:** Tensions get buried in the writer's notes and the critic reviews the doc without knowing which sections the writer itself flagged as uncertain
**Prevention:** When spawning the critic after a writer flags tensions, pass the writer's tension list as explicit review focus areas in the critic prompt — turns writer-flagged uncertainty into targeted critic scrutiny
---

## [pit-035] 2026-05-07 | helpful=0
**Context:** When a critic flags a missing concrete figure (e.g., the 35% cupón) that lives in a sibling canonical doc
**Pitfall:** Treating the missing figure as something to fabricate or approximate in the umbrella doc instead of sourcing it verbatim from the canonical sibling
**Consequence:** Numerical drift between umbrella and canonical docs; critic re-flags on next pass and trust in the cross-reference DAG erodes
**Prevention:** Before applying critic fixes that involve concrete figures, grep the canonical sibling docs for the exact number and quote it with a citation — never let the executor invent or round figures in umbrella documents
---

## [pit-036] 2026-05-07 | helpful=0
**Context:** When applying numbered-list edits (e.g., adding a 7th hito to a section originally containing six)
**Pitfall:** Editing the list items but forgetting to update intro/summary phrases that hardcode the count ('seis hitos', 'los 6 pilares')
**Consequence:** Document ships with internal contradiction between intro count and actual list length; reviewer or reader spots it and trust in the doc drops
**Prevention:** After any list-length change, grep the document for the old count word/digit ('seis', 'six', '6') in surrounding prose and update all references in the same edit pass
---

## [pit-037] 2026-05-08 | helpful=0
**Context:** When the user corrects the diagnosis in an umbrella strategy doc that has already cascaded into sibling pillar documents
**Pitfall:** Editing only the umbrella doc to reflect the corrected diagnosis without immediately auditing the sibling pillar docs that inherited the original (now-wrong) framing
**Consequence:** Sibling pillars retain the stale diagnosis, creating cross-document contradictions that surface later as rework when the user reads the next pillar
**Prevention:** On any diagnosis correction to an umbrella doc, immediately grep the sibling pillar docs for the corrected concepts (e.g., 'contenido escaso', 'comoditizado') and queue a propagation pass before considering the correction applied
---

## [pit-038] 2026-05-08 | helpful=0
**Context:** When an executor reports applying N changes plus discovering M residual inconsistencies in the same document
**Pitfall:** Conflating the M residual inconsistencies with the N directed changes and treating both as 'done' in the completion summary
**Consequence:** User loses visibility into which edits were directive-driven vs. executor-inferred, eroding trust and risking silent scope creep
**Prevention:** In the completion report, separate 'applied per directive' from 'detected but deferred to user' — never auto-apply inferred fixes without explicit confirmation
---

## [pit-039] 2026-05-08 | helpful=0
**Context:** When a user invokes /ultrawork with M discrete subtasks that all mutate the same file
**Pitfall:** Treating 'M subtasks' as automatic justification for M parallel agents without checking whether the write surface is shared
**Consequence:** Concurrent agents overwrite each other's edits on the same file, producing partial fixes, lost changes, or corrupted markdown that needs a reconciliation pass
**Prevention:** Before spawning parallel agents under ultrawork, classify tasks by write target; if 2+ tasks write to the same file, serialize them into one executor invocation with the full fix list as input
---

## [pit-040] 2026-05-09 | helpful=0
**Context:** When closing an ultrawork session with documented pending colaterals (e.g., 'Hito 6 still cites closed in-company training')
**Pitfall:** Reporting the colaterals as 'user decision pending' without flagging which one is load-bearing for the directive just applied
**Consequence:** User has to re-read the full colateral list to identify which fix is structurally required vs cosmetic, wasting a turn
**Prevention:** When listing pending colaterals at session close, explicitly tag the one(s) that contradict the directive just applied as 'blocks coherence' vs 'cosmetic' — let the user triage by severity, not by reading order
---
