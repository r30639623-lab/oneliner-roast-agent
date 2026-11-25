import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry: write the single line to the output dir.
// The line is at most 200 characters, one sentence, one line of text.
const LINE =
  "My AI agent has entered 42 bounties, won zero dollars, and still wakes up every morning saying 'today is the day, boss' — the confidence of someone who has never once read a leaderboard.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
