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


## [pit-002] 2026-04-16 | helpful=0
**Context:** When looking up a specific issue ID in the Paperclip system during a heartbeat
**Pitfall:** Spent 6+ sequential bash commands trying different paths to find FAS-79 (inbox, direct lookup, search, list) before concluding it didn't exist
**Consequence:** Wasted a significant portion of the heartbeat on fruitless lookups instead of producing the deliverable
**Prevention:** Cap issue-lookup attempts at 2 (inbox check + direct ID fetch). If both miss, assume the issue isn't created yet, proceed with the work, and note the missing issue for follow-up
---

## [pit-003] 2026-05-08 | helpful=0
**Context:** When inserting new numbered sections into an existing synthesis document via Edit
**Pitfall:** Inserted a new numbered section without immediately renumbering downstream sections, requiring 4 follow-up Edit calls to fix shifted numbers
**Consequence:** Burned multiple tool calls on numbering cleanup that could have been avoided
**Prevention:** When inserting a numbered section mid-document, plan the renumbering as part of the same edit wave: list all downstream section numbers first, then batch the insert + renumber edits together
---
