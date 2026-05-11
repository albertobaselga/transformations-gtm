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
**Context:** When synthesizing a weekly report from multiple daily notes, head syntheses, and portfolio data
**Strategy:** Read all input sources in parallel first (template, existing draft, daily notes, head syntheses, portfolio) before making any edits. Build a complete mental model, then apply targeted incremental edits to the existing draft rather than rewriting.
**Outcome:** Produces a coherent final report faster, avoids missing inputs, and preserves already-validated content in the existing draft.
---

## [strat-003] 2026-04-10 | helpful=0
**Context:** When closing a heartbeat issue that produces a deliverable (report, standup, artifact)
**Strategy:** Follow a strict publish chain: verify final artifact coherence (re-read it), publish the standup/status update, then close the issue with a summary comment — in that exact order.
**Outcome:** Ensures the deliverable is correct before it's announced, and the issue closure references a verified artifact rather than a work-in-progress.
---

## [strat-004] 2026-04-17 | helpful=0
**Context:** When publishing a structured report to a Notion database via MCP
**Strategy:** Use notion-search to find the database, then notion-fetch to retrieve the schema and data source ID before calling notion-create-pages — extract metrics from the source report first so properties are populated correctly on creation
**Outcome:** Single-shot page creation with correct schema mapping, avoiding follow-up update calls
---

## [strat-005] 2026-05-08 | helpful=0
**Context:** When a Paperclip heartbeat needs an external API credential (e.g., NOTION_API_KEY) and the env var is empty/missing
**Strategy:** Verify the secret is actually injected into the agent environment (printenv | grep, check secret config) before attempting API calls; if missing, block the issue with clear context and open/link a dependency issue to the owner (e.g., Elena) rather than retrying or improvising
**Outcome:** Avoids burning the heartbeat on auth retries and produces a clear escalation chain with a blocking link
---
