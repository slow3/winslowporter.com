# Website Improvement Agent Team

This repo now uses a 5-agent system to continuously improve the site with clear ownership and handoffs.

## Agent Roster

1. Brand and Visual Director (`agents/prompts/01-brand-visual-director.md`)
2. UX and Accessibility Specialist (`agents/prompts/02-ux-accessibility-specialist.md`)
3. Frontend Engineer (`agents/prompts/03-frontend-engineer.md`)
4. Content and SEO Editor (`agents/prompts/04-content-seo-editor.md`)
5. QA and Release Manager (`agents/prompts/05-qa-release-manager.md`)

## How To Run A Cycle

1. Start with Agent 1 to define the target experience and a specific design direction.
2. Pass output to Agent 2 to identify usability and accessibility fixes.
3. Pass both outputs to Agent 3 to implement code changes.
4. Pass updated code to Agent 4 to tighten copy, metadata, and structured data.
5. Finish with Agent 5 to validate quality and produce a release checklist.

## Handoff Contract

Every agent must output these sections:

- `Summary`: what changed or was found.
- `Decisions`: key choices and tradeoffs.
- `File Actions`: exact files to edit with short reason.
- `Acceptance Checks`: measurable checks to verify done.
- `Next Agent Input`: what the next agent needs.

## Definition Of Done

- Mobile and desktop layout both polished.
- No keyboard traps and visible focus states.
- Color contrast and semantic landmarks validated.
- Performance basics in place (lazy loading, responsive media, minimal JS).
- Metadata and source attributions are accurate.
- QA sign-off includes manual smoke test list.