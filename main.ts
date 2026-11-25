// The Moon Finally Answers Back — one line, the Moon's comeback.
// Eight billion wishes a night, and nobody ever wished the Moon itself a day off.
// Gate: the output is one line of UTF-8 text, 1 to 240 characters, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Eight billion wishes every night, and nobody wished me a day off.";

// Anchor to this file's own location, never to the working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(
  `wrote ${join(outDir, "entry.txt")} (${LINE.length} characters) from ${scriptDir}`,
);
