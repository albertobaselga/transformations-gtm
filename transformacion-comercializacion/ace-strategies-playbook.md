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


## [strat-002] 2026-04-14 | helpful=0
**Context:** when executing many independent document-generation recommendations on a large plan
**Strategy:** dispatch N parallel background Agent tasks (one per anexo) with each agent reading the shared plan for context and writing its own file, while doing in-line edits for cross-cutting changes like taxonomy reconciliation
**Outcome:** 8 anexos produced concurrently without context bloat in the orchestrator, and cross-cutting edit landed immediately without waiting on background work
---

## [strat-003] 2026-04-14 | helpful=0
**Context:** when organizing a mixed bag of docs/html/pdf/img/scripts by theme
**Strategy:** use filename tokens (e.g. 'comercializacion' vs GTM) as the routing signal and keep generator .mjs scripts colocated with their outputs so each folder stays self-regenerable
**Outcome:** clean split into two self-contained folders with no broken regeneration pipelines
---
