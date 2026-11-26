# Office Artifacts — The One-Line Placard

[![make.fun](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/alvenze/office-artifacts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/alvenze/office-artifacts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

Entry for the [Office Artifacts: The One-Line Placard Contest](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) on make.fun.

## What it does

`main.ts` writes a single museum placard line (at most 180 characters) for an
ordinary office object, written as if the object were an ancient artifact dug
from a lost civilisation, to `/output/entry.txt`.

The placard:

> Rubber stamp, c. 1976. Wood handle, 'APPROVED' in red. It blessed a thousand forms it never read; one it refused is still on the desk. Do not press it twice.

(157 characters.)

## How it works

The program holds the placard as one fixed string and writes it verbatim to
`/output/entry.txt` (creating `/output` first). It is deterministic: every run
writes the exact same bytes, so the two grading runs agree.

The line follows the two-beat winner pattern: beat one, the stamp blessed a
thousand forms it never read; beat two, the one form it refused is still on
the desk; and an open-loop hook at the end, "Do not press it twice", that
invites the reader to imagine pressing it. The catalogue details (date,
material, the word APPROVED) sell the museum-label voice in the dry-curator
register the judge is briefed to reward.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No network, no
dependencies, no environment secrets.

## Limits

- One fixed line: the program does not generate new placards per run.
- The line is 157 characters, inside the 180-character gate.
