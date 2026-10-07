---
sidebar_label: 'Assembly Steps'
sidebar_position: 5
---

# Pumpkinator: Assembly Steps

Steps for assembling a kit that's already been through [Preparation Steps](./preparation-steps) — the harnesses (power switch, LEDs, PIR sensor, speaker) are already soldered and crimped, so this is the student-facing process for putting everything together. This page is a work in progress and will grow as steps are added. See [Full Build Steps](./full-build-steps) for the complete process starting from raw parts.

1. **Load the code onto the Arduino.** Connect the Arduino to a laptop running the Arduino IDE using a micro USB cable. Clone the code from [github.com/Fahrenheit6882/pumpkin](https://github.com/Fahrenheit6882/pumpkin), then open and upload `pumpkin/pumpkin.ino` onto the Arduino.
2. **Load the sounds onto the JQ6500.** Connect a micro USB cable from the JQ6500 sound card to a Windows laptop. A new drive should appear in Windows (shows up as `USB Drive (D:)`, though the letter may vary by computer). From a PowerShell prompt, inside the `pumpkin` directory, run:

   ```powershell
   .\scripts\copy-sounds-in-order.ps1 -Destination D:
   ```

   This copies the 12 MP3s onto the sound card in order.
3. **Wire and test the LEDs.** Connect the red wire from the LED to the **5V** pin on the Arduino. Connect the ground wire (black or white) to the **GND** pin on the Arduino. Connect the signal wire to **D6** on the Arduino. To test: unplug the USB cable from the Arduino, close the Arduino IDE if it's open, then plug the USB cable back into the Arduino. Wait a few seconds — the LEDs should blink like a candle inside a pumpkin.
4. **Wire and test the PIR sensor.** Unplug the USB cable from the Arduino before wiring. It's best to braid the PIR sensor's wires together so they tangle less. After braiding, connect the GND wire (black or white) to **GND** on the Arduino. Connect the red power wire to **5V** on the Arduino. Connect the signal wire to **D5** on the Arduino. To test: plug the USB cable back in and wait a few seconds for the LEDs to flicker like a candle. Wave your hand near the PIR sensor — it should detect the motion and change the LEDs to a disco light show. After the LEDs return to candle mode, wave your hand again and the lights should blink bright white. If you see that, it works!
5. **Wire and test the sound card.** Disconnect the USB cable first. Connect a short red jumper wire from Arduino **5V** to **pin 5** on the sound card. Connect a short white jumper wire from Arduino **GND** to **pin 6** on the sound card. Connect a long green wire from **D2** on the Arduino to **pin 7** on the sound card. Connect a 1 kΩ resistor from **D3** on the Arduino to an empty row on the breadboard, then connect a short green wire from that same row to **pin 8** on the sound card. To test: plug the USB cable back into the Arduino, wait for the candle flicker, then wave your hand by the PIR sensor to change the light show. When the LEDs change, you should see a red light on the sound board. If you do, that means the Arduino is sending the signal to the sound board to play a sound, and the power is connected correctly.
6. **Connect and test the speaker.** Unplug the USB cable first. Plug the speaker into **pin 1 (SPK+)** and **pin 2 (SPK-)** on the sound card. **Never let the speaker wires touch GND or VCC** — this shorts the amplifier output and can damage the module. To test: plug the USB cable back in and repeat the same test as the previous step. This time you should hear the sound!
7. **Connect the battery and power on.** Connect the red wire from the case to the **VIN** pin on the Arduino. Connect the black wire from the case to the Arduino **GND** pin. Put in 4 AA batteries, then turn on the switch.
