// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line (<= 180 characters) to /output/entry.txt.
// The placard recasts an ordinary office stapler as an excavated ritual
// binding device, in a deadpan curator's voice.
import { mkdirSync, writeFileSync } from "node:fs";

const placard =
  "Stapler, c. 1987. Painted steel. Bound the covenants of a department " +
  "that no longer exists. Found in the bottom drawer, still loaded. " +
  "Gift of Accounts Payable.";

// The placard must be one line of 1-180 characters (competition limit).
if (placard.length === 0 || placard.length > 180) {
  throw new Error(
    `Placard must be 1-180 characters, got ${placard.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", placard, "utf8");
