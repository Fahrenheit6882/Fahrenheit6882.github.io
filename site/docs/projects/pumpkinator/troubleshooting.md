---
sidebar_label: 'Troubleshooting Your Kit'
sidebar_position: 2
---

# Troubleshooting Your Pumpkinator Kit

Your Pumpkinator kit was assembled and tested by a Fahrenheit Robotics student before it got to you, but it's built on a breadboard, and breadboard wires **can shift loose during shipping or handling**. The good news: almost every issue is a loose wire, and fixing it takes under a minute and needs no soldering or tools beyond your fingers.

:::danger Before you touch anything
Never let the two speaker wires touch each other, the battery wires, or any ground wire. Speaker wires should only ever touch the speaker's own terminals. Connecting them anywhere else can permanently damage the sound module. If you ever smell something burning or see smoke, unplug the battery immediately.
:::

## Opening The Case

The lid has tabs on each side that you need to press in to remove the lid. Open it carefully: wires run between the top and bottom, connecting the lid to the electronics below, so don't pull the two halves far apart.

## First, the easy stuff

1. **Is the switch on?** The rocker switch is on the outside of the case.
2. **Fresh batteries, right way round?** The kit uses 4× AA batteries (not included). Check the `+`/`−` markings on the battery cradle match how the batteries are inserted, and try a fresh set.
3. **Give the PIR sensor a few seconds.** The motion sensor needs about 10–60 seconds to "warm up" after power-on before it will reliably detect motion.

If that doesn't fix it, open the case and check the wiring below.

## Symptom → likely cause → fix

| Symptom | Likely cause | Fix |
|---|---|---|
| Nothing happens at all (no lights, no sound) | Batteries dead, reversed, or not seated against the spring contacts; switch off | Swap in fresh AAs, check orientation, reseat batteries firmly against the metal springs, confirm switch is on |
| Lights don't turn on, or flicker on and off randomly | LED data wire or power wire popped out of the breadboard | Open the case and gently press every wire straight down into its breadboard hole; don't force at an angle |
| Sound doesn't play, but lights work fine | A wire near the speaker or sound module shook loose | Check the two speaker wires are still pushed firmly into their terminals and aren't touching each other; check the sound module is still fully seated in the breadboard |
| Lights work but motion doesn't trigger anything | Motion sensor pigtail unplugged, or sensor blocked | Check the small 3-pin connector where the sensor's wire plugs into the case wall is fully pushed in; make sure nothing is covering the round sensor lens |
| Everything works, but only if you jiggle or tap the case | A breadboard connection has come loose (the most common shipping issue) | Open the case and press down firmly on **every** wire, one at a time, working around the board |
| Sound is quiet, crackly, or distorted | Loose speaker wire, or speaker recess is dirty/damp | Reseat speaker wires; make sure the speaker is fully seated in its recess and nothing is pressed against the cone |
| Batteries drain within a few hours | Switch was left on, or the batteries were old/mismatched | Always switch off when not in use; use a fresh matched set of alkaline AAs (expect 15–20+ hours of continuous runtime) |

## Still stuck?

For complete details on exactly where each component should connect, read through [Full Details About The Pumpkinator](./build-your-own).

If you've checked all of the above and it's still not working, don't force anything open further or start unplugging things at random. Reach out and we're happy to help, or take a look at it in person:

- 📘 [Facebook](https://www.facebook.com/fahrenheitrobotics)
- 📧 [Email us](mailto:fahrenheitrobotics@gmail.com)
