---
sidebar_label: 'Full Details'
sidebar_position: 3
---

# Full Details About The Pumpkinator

This is the page to come to if you want to fully understand how the Pumpkinator works, if you want to source your own parts and build one from scratch, or if you want to customize an existing kit to play your own sounds and light shows. It covers the full bill of materials, wiring, assembly steps, and enclosure details our students used to build ours. See the [Overview](./overview) for a quick summary of the finished project, or [Troubleshooting Your Kit](./troubleshooting) if you already have an assembled one and something isn't working.

:::danger Safety first
- The **soldering iron is the biggest injury risk** here, not the 6V battery pack. Work in a ventilated area, keep the iron in its stand when not in use, and wash your hands after handling solder.
- **Connect the battery last:** after all wiring and soldering is done.
- **Never connect the speaker's two wires to power or ground**, only to the speaker's own terminals. Doing so can permanently damage the sound module's amplifier.
:::

## Bill of materials

| Part | Notes |
|---|---|
| Arduino Nano (or clone) | CH340 USB chip, ATmega328P |
| JQ6500-16P MP3 module | DIP16 package, 2 MB onboard flash, Mini USB for loading audio |
| HC-SR501 PIR motion sensor | Has two onboard potentiometers for sensitivity and delay |
| Breadboard | 830-point (or 400-point), adhesive-backed so it sticks directly into the case |
| Speaker | 3 W, 8 Ω, roughly 1.5" × 1" × 0.5", friction-fit into a recess in the case |
| KCD11 mini rocker switch | 2-pin SPST is all you need (if you buy a 3-pin version, only COM and NO are used) |
| WS2812B RGB LEDs | 2–3 LEDs cut from a strip |
| 4× AA battery holder | We use a 3D-printed cradle with metal spring contacts; an off-the-shelf 4×AA holder works fine too |
| Resistor | 1 kΩ, for the sound module's RX line |
| JST-PH 3-pin connector (pair) | Makes the motion sensor's wire detachable |
| Dupont pins + housings | For breadboard-facing wire ends |
| Wire | 26 AWG stranded (28 AWG is too delicate for reliable crimps) |
| Heat shrink tubing | For splices and solder joints |

Our fundraiser kits are given out for a **suggested $45 donation**, a reasonable target if you're pricing your own batch, though your actual parts cost will depend on where and how many you buy.

## Tools

- Soldering iron (we run ours around 340°C / 320–350°C) and 63/37 rosin-core solder
- Wire crimper for Dupont pins (we use an iCrimp IWS-3220M)
- Wire strippers, hot glue gun
- 3D printer (or a print service) for the enclosure, plus calipers to check fit

## Pin map

| Function | Connection |
|---|---|
| PIR sensor | Signal → **D5**, plus 5V and GND |
| Sound module TX (pin 7) | → **D2** (no resistor needed) |
| Sound module RX (pin 8) | → **D3**, through a **1 kΩ resistor** |
| WS2812B data | → **D6** |
| Battery (+) | → switch → Nano **VIN** (use VIN, not the 5V pin: the Nano's onboard regulator steps the 6V pack down to 5V) |
| Battery (−) | → Nano **GND** directly (the switch only interrupts the positive lead) |

Estimated current draw is ~100–160 mA when active (Nano ~20 mA, sound module 50–80 mA while playing, PIR ~1 mA, 2–3 WS2812B LEDs 30–60 mA). Expect **15–20+ hours** on a fresh set of alkaline AAs.

## JQ6500 sound module pinout

Left side, pins 1–8, numbered bottom-to-top starting from the Mini USB end:

`1 SPK+ · 2 SPK− · 3 ADC_L · 4 ADC_R · 5 VCC · 6 GND · 7 TX · 8 RX`

The right side (pins 9–16: K1–K5, SGND, ADKEY, BUSY) matches the standard published pinout for this module and isn't used in this build.

- **SPK+ (pin 1) → red wire → speaker +**
- **SPK− (pin 2) → black wire → speaker −**
- Never connect SPK+ or SPK− to GND or VCC. This shorts the amplifier output and can damage the module.

## Wiring & crimping

- Use 26 AWG stranded wire. Where a wire needs both a solid-core breadboard end and a soldered end, splice solid to stranded with a Western Union splice and heat shrink.
- Color-code by function to avoid mix-ups: red = power, black = ground, yellow/white/blue/green = signal.
- Crimping Dupont pins: crimp the conductor tines first, then the insulation tines, and **tug-test every crimp** before seating it in a housing.
- The motion sensor gets a detachable 3-wire pigtail (VCC, GND, Signal) ending in a JST-PH 3-pin connector at the case wall, so the sensor (mounted ~1 ft away) can be disconnected for transport.
- Soldering the switch's lugs: tin the lug, strip ~5 mm of wire, twist and tin it, then touch the tinned wire to the tinned lug for 1–2 seconds. Slide heat shrink onto the wire *before* soldering.

## Assembly, in phases

Building in phases makes it easy to test each subsystem before moving on, and lets you build several units assembly-line style.

### Phase 1: Nano + LED strip
Wire the WS2812B data line to D6, power and ground to 5V/GND. **Test:** power it on. The LEDs should light up (running a basic candle-flicker or color-chase sketch).

### Phase 2: PIR motion sensor
Wire signal to D5, plus 5V and GND. The two onboard potentiometers tune sensitivity and how long the output stays high. **Test:** wave a hand in front of the sensor and confirm the LEDs react.

### Phase 3: Speaker + sound module
Wire TX (pin 7) to D2, RX (pin 8) to D3 through the 1 kΩ resistor, VCC/GND to power, and SPK+/SPK− to the speaker (red to +, black to −). **Test:** trigger playback over serial and confirm clean audio.

### Phase 4: Power + switch
Battery (+) → switch → Nano VIN. Battery (−) → Nano GND directly. **Test:** flip the switch and confirm the whole thing runs on battery power.

## Loading the audio

- Source sound effect clips from [freesound.org](https://freesound.org).
- Convert to MP3 (64–128 kbps, 22,050 Hz, mono) with `ffmpeg` (WAV also works).
- The JQ6500 shows up as a virtual CD-ROM over its Mini USB port. Drag files on using the vendor's Windows upload tool, or use the open-source [kasbert/JQ6500-tool](https://github.com/kasbert/JQ6500-tool) (Python) if you're loading many modules at once.
- To control playback from your sketch, the [sleemanj/JQ6500_Serial](https://github.com/sleemanj/JQ6500_Serial) Arduino library handles the serial protocol for you.

## Enclosure

Our case is a custom 3D-printed design, roughly **110 × 70 × 40 mm**, printed in **PETG** for outdoor durability. It includes:

- An LED channel along the top, so light shines up through the pumpkin's lid
- A friction-fit recess sized for the ~1.5" × 1" × 0.5" speaker, facing down so sound bounces around inside the pumpkin
- Cutouts in the front wall for the Nano's and sound module's USB ports, for programming and loading audio without opening the case
- A small strain-relief exit hole in the back for the motion sensor's detachable pigtail
- A snap-fit lid, no screws or magnets

Useful references if you're modeling your own enclosure: a [1:1 JQ6500 model on Thingiverse](https://www.thingiverse.com/thing:4615333) and various [Arduino Nano case examples](https://www.thingiverse.com/tag:arduino_nano).

## Questions, or want our design files?

We're happy to share more detail or answer build questions:

- 📘 [Facebook](https://www.facebook.com/fahrenheitrobotics)
- 📧 [Email us](mailto:fahrenheitrobotics@gmail.com)
