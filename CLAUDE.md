# Surge Docs — Claude Code Instructions

## Writing Style

- Write like a human, not AI. No buzzwords ("leveraging", "seamless", "robust", "enables", "facilitates", "paradigm", "showcases", "extraordinary", "cutting-edge"). If it sounds like ChatGPT/Claude/Claude Code/Gemini/Cursor/etc. wrote it, rewrite it.
- Keep it concise. Say the thing directly. "Surge gets the same engine" > "Surge achieves extraordinary throughput capabilities that scale far beyond traditional execution environments."
- Use contractions naturally ("it's", "don't", "they're").
- Avoid filler sentences that sound impressive but say nothing ("pushes the boundaries of what rollups can achieve").
- Don't over-explain. Trust the reader to be technical.

## Quality Checks

- Before committing, always run `npm run build` and confirm it succeeds with zero broken link errors (`onBrokenLinks: 'throw'` is set in `docusaurus.config.ts`).
- After making doc changes, spin up the dev server (`npm run start -- --host 0.0.0.0`) and verify pages render correctly in a browser. If connected via SSH, use port forwarding (Cursor auto-forwards, or manually forward port 3000).
- Check that sidebar navigation, internal links, and images all work.

## Technical Accuracy

- Surge is a **ZK rollup with real-time proving** and **permissionless proposing** (`RealTimeInbox.propose()`). Don't describe it as having a centralized sequencer.
- **Real-time proving** = ZK proofs generated in ~10-17s, atomic propose+prove in one L1 tx. No proving windows, no bonds.
- The old Pacaya model (two-phase propose-then-prove, bonds, multi-prover, proving windows) is deprecated. Don't reference it as current.
- When comparing old vs new, use comparison tables rather than prose.

## Docs Structure

- Concept pages go in `docs/about/`
- Practical guides go in `docs/guides/`
- The sidebar is auto-generated from filesystem structure (`sidebars.ts`)
- Use `sidebar_position` in frontmatter to control ordering
- Prefer `.md` for simple pages, `.mdx` when you need React components (Tabs, etc.)
