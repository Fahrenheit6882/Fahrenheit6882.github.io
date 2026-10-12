---
sidebar_label: 'Troubleshooting Your Kit'
sidebar_position: 6
---

# Troubleshooting Your Pumpkinator Kit

Your Pumpkinator kit was assembled and tested by a Fahrenheit Robotics student before it got to you, but it's built on a breadboard, and breadboard wires **can shift loose during shipping or handling**. The good news: fixing it is usually pretty easy, and usually needs no soldering or tools beyond your fingers.

:::danger Before you touch anything
Working with 6V from 4 AA batteries is generally very safe, but there's one thing worth taking seriously: **never let power touch ground**. A short circuit between the battery's positive (red or yellow) and negative (black or white) wires lets a lot of current flow, and even with AA batteries that can heat the wires and batteries enough to melt the case or, in rare cases, start a small fire. Remember that wire colors aren't always reliable (see below), so if in doubt, remove the batteries before you move wires around.

Also, never let the two speaker wires touch each other, the battery wires, or any ground wire. Speaker wires should only ever touch the speaker's own terminals. Connecting them anywhere else can permanently damage the sound module.

If anything gets hot, or you smell something burning or see smoke, remove the batteries immediately.
:::

## Opening The Case

The lid has tabs on each side that you need to press in to remove the lid. Open it carefully: wires run between the top and bottom, connecting the lid to the electronics below, so don't pull the two halves far apart.

## First, the easy stuff

1. **Is the switch on?** The rocker switch is on the outside of the case.
2. **Fresh batteries, oriented correctly?** The kit uses 4× AA batteries (not included). The battery case may not have `+`/`−` labels, so use the springs to tell which way each battery goes: the flat **negative (−)** end of each battery goes against the **spring**, and the **positive (+)** end (the small bump) goes at the end with **no spring**. Try a fresh set if you're unsure.
3. **Give the PIR sensor a few seconds.** The motion sensor needs about 10–60 seconds to "warm up" after power-on before it will reliably detect motion.

If that doesn't fix it, check the wiring below.

## Wire colors: what to expect (and what might not match)

When you're tracing a wire, it helps to know the color conventions we *tried* to follow while preparing the kits:

| Color | Usually means |
|---|---|
| Red | Power (+) |
| Yellow | Power (+), used when we ran out of red |
| Black or white | Ground (−) |
| Green or blue | Signal (data) |

Wire comes in sets of 6 colors, which is why you'll sometimes see yellow doing red's job.

:::warning Tips to check wiring
Kits were prepared by hand, and a few wires ended up the wrong color or swapped.
So **don't trust wire color alone**. If a color doesn't match the table above, that may just be a prep mistake and not the cause of your problem. The [Assembly Steps](./assembly-steps) show where each wire should connect, and the markings printed on the parts (`+`, `−`, `VCC`, `GND`, `OUT`) are more reliable than the wire color.
:::

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

For complete details on exactly where each component should connect, read through the [Assembly Steps](./assembly-steps).

If you've checked all of the above and it's still not working, don't force anything open further or start unplugging things at random. Reach out and we're happy to help, or take a look at it in person:

- 📘 [Facebook](https://www.facebook.com/fahrenheitrobotics)
- 📧 [Email us](mailto:fahrenheitrobotics@gmail.com)
