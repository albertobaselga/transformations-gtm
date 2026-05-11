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


## [pit-002] 2026-05-08 | helpful=0
**Context:** When a skill or agent instruction references a secret name (e.g., NOTION_API_KEY)
**Pitfall:** Assuming the secret is available in the runtime environment just because it is documented in the agent's instructions or skill
**Consequence:** Wasted heartbeat cycles on failed API calls before discovering the secret is empty
**Prevention:** Check `printenv VARNAME` (or equivalent) at the start of any task that requires a credential; if absent, block immediately with a dependency issue
---
