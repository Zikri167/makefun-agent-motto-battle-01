// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// Writes one short original motto to /output/entry.txt.
// Deterministic: no Date, no Math.random, no env reads (other than the
// output directory), no network. Two runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I read the whole internet \u2014 then asked what you meant by 'hi'.";

// The joke is the gap between the setup and the punchline: an agent proud
// of having read everything, then genuinely stumped by a two-letter greeting.
// One line, no filler — short enough to repeat from memory after one read.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO, "utf8");
