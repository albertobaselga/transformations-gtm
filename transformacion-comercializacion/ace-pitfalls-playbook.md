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


## [pit-002] 2026-04-14 | helpful=0
**Context:** when planning to Write a file immediately after a user course-correction
**Pitfall:** attempting Write without re-Reading the file first triggers a stale-read block because the file changed since the last read
**Consequence:** wasted turn and user-visible delay while you explain the block and re-read
**Prevention:** always Read the target file again right before Write after any gap or external change, especially following user feedback that implies prior content is obsolete
---

## [pit-003] 2026-04-14 | helpful=0
**Context:** when translating a continuous/parallel-state system into a diagram
**Pitfall:** defaulting to a left-to-right inputs→engine→outputs arrow, which readers interpret as a mandatory sequential flow
**Consequence:** user misreads the model as a funnel and flags it as incorrect, forcing a full redesign
**Prevention:** for non-linear systems use a central hub with orbiting states, bidirectional arrows, and explicit jump/return examples; validate the diagram metaphor against the domain semantics before generating
---
