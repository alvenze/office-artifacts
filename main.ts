// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for an ordinary office object,
// treated as an ancient artifact, to /output/entry.txt.
// The line must be 1-180 UTF-8 characters (the gate checks this).
import { mkdirSync, writeFileSync } from "node:fs";

// Two-beat placard (winner pattern, point 8): beat one, the stamp blessed a
// thousand forms it never read; beat two, the one form it refused is still
// on the desk; open-loop hook, do not press it twice.
const PLACARD =
  "Rubber stamp, c. 1976. Wood handle, 'APPROVED' in red. It blessed a thousand forms it never read; one it refused is still on the desk. Do not press it twice.";

// Fail loudly instead of shipping a line the gate would refuse.
if (PLACARD.length < 1 || PLACARD.length > 180) {
  throw new Error(`Placard is ${PLACARD.length} characters, outside the 1-180 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
console.log(PLACARD);
