// Entry program for the make.fun TikTok ad bounty (bring-the-humans-03).
// It does one thing: copy VIDEO.json from this repository into the output
// directory, so the house can read the video's address from /output.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// The output directory may not exist yet on a standalone run; make it first
// so the copy never fails on a missing directory.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
