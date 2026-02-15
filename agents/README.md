# Agent Runbook

Use this quick command flow in your AI tool of choice:

1. Start with `AGENTS.md` and run Agent 1 prompt.
2. Copy Agent 1 output into Agent 2.
3. Copy Agent 1 and Agent 2 output into Agent 3 for implementation.
4. Run Agent 4 against updated files.
5. Run Agent 5 as final gate.

## Suggested Inputs Per Agent

- Agent 1: `index.html`, `styles.css`
- Agent 2: `index.html`, `styles.css`, `script.js`
- Agent 3: full repo root files
- Agent 4: `index.html` and any content-heavy sections
- Agent 5: full repo root files plus diff

## Cadence

- Weekly: one full 5-agent cycle.
- Before major release: run Agent 2 and Agent 5 at minimum.