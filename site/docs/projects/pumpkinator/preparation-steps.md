---
sidebar_label: 'Preparation Steps'
sidebar_position: 4
---

# Pumpkinator: Preparation Steps

These are the soldering and crimping tasks that are faster to do yourself, in batches across many kits at once, before handing the rest of the build off to students. Each item below produces a finished sub-harness or part that gets plugged in later during [Assembly Steps](./assembly-steps).

1. **Solder header pins onto the Arduino and JQ6500 (if needed).** Arduino Nano and JQ6500 boards sometimes ship with their pin headers unsoldered and loose in the bag rather than attached. If yours came this way, solder the header pins onto both boards so they can plug into a breadboard.
2. **Prep the power switch harness.** Solder the red wire from the battery pack to one tab on the switch, then solder a second 6-inch length of red wire to the other tab on the switch — 6 inches works well for reaching from the switch to the breadboard. Tin the loose end of that second red wire with solder, and tin the end of the battery pack's black wire with solder. The result is a battery pack + switch unit with two tinned leads ready to plug into a breadboard.
3. **Prep the LED wire harnesses.** Cut 2 LEDs from a WS2812B strip. Solder 5-6 inches of wire to each LED: red for 5V, black for GND, and either green or white for the data/signal line (Din). 26-28 AWG wire works well.
4. **Prep the PIR sensor harness.** Cut 3 strands of 26 AWG wire, about 20 inches each: black for ground, red for power, and a third color (yellow, blue, or green) for signal. Braid the 3 wires together to keep them from tangling. Crimp a connector onto one end of each wire and tin the other end with solder. Plug the crimped ends into the PIR sensor: with the sensor's dome facing up and the pin side facing you pointing down, the left pin is ground, the center pin is signal, and the right pin is power.
5. **Prep the speaker harness.** Cut off the speaker's existing connector. Crimp a Molex male connector onto the black wire and another Molex male connector onto the red wire, then tape the two connectors together so they stay aligned as a pair.

Once a batch of these is ready, hand them off along with the printed cases, breadboards, and remaining loose parts so students can complete the rest of the build in [Assembly Steps](./assembly-steps).
