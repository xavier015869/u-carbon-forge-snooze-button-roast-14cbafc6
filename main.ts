import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Snooze Button Roast — one line roasting an alarm clock that rings at
// 6 AM on a Saturday. The roast treats the clock as a freeloading tenant:
// it acts like it owns the place, pays nothing, and takes the one thing
// that matters on a Saturday morning.
const ENTRY =
  "At 6 AM on a Saturday my alarm clock rang like it owned the place — it doesn't even pay rent, it just collects my sleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Fail loudly here
// instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a non-blank single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
