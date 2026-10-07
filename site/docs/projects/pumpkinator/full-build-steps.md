---
sidebar_label: 'Full Build Steps'
sidebar_position: 6
---

# Pumpkinator: Full Build Steps

Step-by-step build order for assembling a Pumpkinator kit from scratch, including every wiring connection. This page is a work in progress and will grow as more steps are added. See [Full Details About The Pumpkinator](./build-your-own) for the parts list and wiring reference, or [Assembly Steps](./assembly-steps) for the condensed version used when starting from an already-prepared kit.

1. **Print the case.** 3D print the case, lid, and battery cradle before starting assembly.
2. **Solder the header pins (if needed).** Arduino Nano and JQ6500 boards sometimes ship with their pin headers unsoldered and loose in the bag rather than attached. If yours came this way, solder the header pins onto both boards so they can plug into the breadboard.
3. **Place the Arduino and JQ6500 on the breadboard.** Position the Arduino Nano and the JQ6500 sound module on the breadboard.
4. **Glue the breadboard to the case.** With the Arduino and JQ6500 in place, glue the breadboard onto the top of the 3D-printed case.
5. **Glue the battery box to the case.** Glue the battery box to the bottom of the case.
6. **Wire the power switch.** Solder the red wire from the battery pack to one tab on the switch, then solder a second 6-inch length of red wire to the other tab on the switch — 6 inches works well for reaching from the switch to the breadboard. Tin the black wire from the battery pack with solder and connect it to GND on the breadboard. Tin the loose end of the red wire coming from the switch with solder and plug it into the breadboard at VIN on the Arduino.

:::tip Using the breadboard's power rails
As more components need 5V and GND, running every single one straight to the Arduino's pins gets crowded fast. In some cases it makes more sense to run one wire from the Arduino's 5V pin and one from a GND pin into the breadboard's side rails (the +/- columns along the edge), then connect each component to the rail instead of back to the Arduino directly. Two things to watch for: the left and right rails usually aren't connected to each other, so you may need a jumper wire bridging them if you need power on both sides; and keep VIN (the raw battery voltage, before the Nano's onboard regulator) on its own direct wire rather than sharing a rail with 5V-only components.
:::

7. **Get the LEDs working.** Cut 2 LEDs from a WS2812B strip. Solder 5-6 inches of wire to each LED: red for 5V, black for GND, and either green or white for the data/signal line (Din). 26-28 AWG wire works well.
8. **Wire the LEDs to the Arduino.** Connect the green wire from the LED to **D6** on the Arduino, the red wire to **5V** on the Arduino, and the GND wire (black or white) to **GND** on the Arduino.
9. **Wire the PIR motion sensor.** Cut 3 strands of 26 AWG wire, about 20 inches each: black for ground, red for power, and a third color (yellow, blue, or green) for signal. It helps to braid the 3 wires together before connecting them, to keep them from tangling. Crimp a connector onto one end of each wire and tin the other end with solder. Plug the crimped ends into the PIR sensor: with the sensor's dome facing up and the pin side facing you pointing down, the left pin is ground, the center pin is signal, and the right pin is power. Connect the tinned ends to the Arduino: power to **5V**, ground to **GND**, and signal to **D5**.
10. **Wire the speaker to the JQ6500.** Cut off the speaker's existing connector. Crimp a Molex male connector onto the black wire and another Molex male connector onto the red wire, then tape the two connectors together so they stay aligned as a pair. Plug them into the JQ6500's speaker pins: red to **pin 1 (SPK+)** and black to **pin 2 (SPK-)**. On the JQ6500-16P, pins are numbered 1-8 along the left side, bottom to top, starting from the Mini USB end. **Never connect SPK+ or SPK- to GND or VCC** — this shorts the amplifier output and can damage the module.
11. **Wire power to the JQ6500.** Cut a 2.5-inch length of red wire (power) and a 2-inch length of black or white wire (ground) — solid core wire works well here since it's a short breadboard-to-breadboard hop. Connect the red wire from Arduino **5V** to **pin 5 (VCC)** on the JQ6500. Connect the black (or white) wire from Arduino **GND** to **pin 6 (GND)** on the JQ6500.
12. **Wire the JQ6500's RX line.** Connect a 1 kΩ resistor from **D3** on the Arduino to the middle of an unused row on the breadboard. Then connect a 2-inch length of solid core wire (use a color other than red, black, or white, such as green or yellow) from that same row to **pin 8 (RX)** on the JQ6500.
13. **Wire the JQ6500's TX line.** Connect a 3-inch length of solid core wire (any color other than red, black, or white) from **D2** on the Arduino to **pin 7 (TX)** on the JQ6500. No resistor is needed on this line.
