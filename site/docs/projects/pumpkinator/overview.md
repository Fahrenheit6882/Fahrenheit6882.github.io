---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Pumpkinator: Overview

The **Pumpkinator** is a Halloween prop built by Fahrenheit Robotics Team 6882 students. When someone walks past, it triggers spooky sound effects and a colorful RGB light show, all from inside a real pumpkin.

:::tip
Check out the [Pumpkinator landing page](/site/pumpkinator).
:::

<div style={{maxWidth: '640px', margin: '1.5rem 0'}}>

![Cartoon of a kid walking up to a glowing pumpkin that flashes colorful lights and plays music, with a peek inside at the electronics](img/pumpkinator-animation.svg)

</div>

## What It Does

1. While it waits, the LEDs flicker like a candle burning inside the pumpkin.
2. A PIR motion sensor detects someone approaching.
3. The Arduino triggers a pre-loaded Halloween sound effect through a small speaker.
4. WS2812B RGB LEDs flash a light show in sync with the effect.
5. Everything resets to the candle flicker and waits for the next visitor.

## Why This Project

Building the Pumpkinator teaches students real-world skills across multiple disciplines:

- **Electronics:** wiring, power rails, connectors, crimping
- **Programming:** Arduino C++, sensor input, audio/LED libraries
- **CAD:** designing a functional enclosure in Onshape
- **Manufacturing:** 3D printing, assembly-line techniques for batch production

It also gives the team a tangible fundraiser item with a story behind it.

## Components

### Arduino Nano

The main controller. It reads the motion sensor, plays sounds through the JQ6500, and drives the LEDs.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', margin: '1rem 0'}}>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/arduino-nano.jpg').default}
      alt="Arduino Nano on a breadboard"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Arduino Nano on a breadboard</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '360px'}}>
    <img
      src={require('./img/arduino-nano-pinout.jpg').default}
      alt="Arduino Nano pinout diagram"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Pinout (from Components101)</figcaption>
  </figure>
</div>

More details: [Arduino Nano on Components101](https://components101.com/microcontrollers/arduino-nano). The official [Arduino Nano pinout PDF](https://docs.arduino.cc/resources/pinouts/A000005-full-pinout.pdf) is also available.

### JQ6500 MP3 module

Plays audio from onboard flash storage.

The board shown here is actually marked **HW-896V2.0.2**, a clone of the JQ6500 module. It works the same way and is sold under both names.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', margin: '1rem 0'}}>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/jq6500-hw-896.jpg').default}
      alt="HW-896V2.0.2 JQ6500 clone MP3 module"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>HW-896V2.0.2 (JQ6500 clone)</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '360px'}}>
    <img
      src={require('./img/jq6500-pinout.jpg').default}
      alt="JQ6500 pinout diagram"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Pinout (from Components101)</figcaption>
  </figure>
</div>

More details: [JQ6500 on Components101](https://components101.com/modules/jq6500-mp3-player-module-pinout-features-datasheet-working-application-alternative).

### PIR motion sensor

Detects movement about 1 ft away. This is an HC-SR501, which has two onboard dials for sensitivity and how long the output stays on.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0'}}>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/pir-sensor-03.jpg').default}
      alt="HC-SR501 PIR sensor, lens side"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Lens side</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/pir-sensor-02.jpg').default}
      alt="HC-SR501 PIR sensor, side view showing the two adjustment dials"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Side view with the two dials</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/pir-sensor-01.jpg').default}
      alt="HC-SR501 PIR sensor, back side showing the 3 pins"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Back side with the 3 pins</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '360px'}}>
    <img
      src={require('./img/pir-sensor-pinout.png').default}
      alt="HC-SR501 PIR sensor pinout diagram"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Pinout (from Components101)</figcaption>
  </figure>
</div>

More details: [HC-SR501 on Components101](https://components101.com/sensors/hc-sr501-pir-sensor).

### WS2812B LEDs (2 to 3)

RGB light effects inside the pumpkin.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', margin: '1rem 0'}}>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/leds-02.jpg').default}
      alt="Reel of WS2812B LED strip with a length unrolled"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>The LED strip comes on a reel</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/leds-01.jpg').default}
      alt="Close-up of the WS2812B LED strip showing the +5V, Din, GND and DO pads"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Close-up of the pads between LEDs</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/leds-03.jpg').default}
      alt="Cutting the LED strip between two LEDs with a pair of cutters"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Cut the strip at the pads between LEDs</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
    <img
      src={require('./img/leds-04.jpg').default}
      alt="A two-LED piece of strip with wires soldered on"
      style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
    />
    <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>A cut piece with wires soldered on</figcaption>
  </figure>
</div>

More details: [WS2812B on Components101](https://components101.com/displays/ws2812b-addressable-rgb-led).

### Small speaker (8Ω)

Sound output.

<figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '240px'}}>
  <img
    src={require('./img/speaker-01.jpg').default}
    alt="The speaker with its red and black wires, plus the short wires and resistor that connect the sound card to the Arduino"
    style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
  />
  <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>The speaker, along with the wires needed to connect the sound card to the Arduino</figcaption>
</figure>

### 4× AA battery box

About 6V of power.

<figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '240px'}}>
  <img
    src={require('./img/battery-box-01.jpg').default}
    alt="4 AA battery box with red and black wires"
    style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
  />
  <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>4× AA battery box</figcaption>
</figure>

### KCD11 rocker switch

On/off switch built into the enclosure. It's a simple two-terminal on/off (SPST) rocker, so the generic SPST rocker pinout applies.

<figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '360px'}}>
  <img
    src={require('./img/rocker-switch-pinout.png').default}
    alt="SPST rocker switch pinout diagram"
    style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
  />
  <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>SPST rocker pinout (from Components101)</figcaption>
</figure>

More details: [SPST rocker switch on Components101](https://components101.com/switches/spst-rocker-switch-non-illuminated).

## 3D Printed Case

All electronics mount inside a **custom 3D-printed enclosure** (roughly 110mm × 70mm × 40mm). The box sits inside the pumpkin with:

- LED strip mounted in a channel on top, shining up through the pumpkin lid
- Speaker fitted into a compartment built specifically to hold it, facing down so sound bounces off the inside of the pumpkin
- Motion sensor on a detachable pigtail wire that pokes out the back

<figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '240px'}}>
  <img
    src={require('./img/case-01.jpg').default}
    alt="The 3D-printed case in two pieces, the lid and the base"
    style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
  />
  <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>The 3D-printed case, lid and base</figcaption>
</figure>

View the design in [Onshape](https://cad.onshape.com/documents/50248517973a6125d7752796/w/cd35b777a41ef71427da35af/e/c062e51bb227c2f4638bb4cc?renderMode=0&uiState=6abc4a38128b139c0eef7836).

## Battery Life

Running on 4× AA alkaline batteries (~2500 mAh), a unit draws roughly 100–160 mA when active. Expect **15–20+ hours** of runtime, more than enough for a full Halloween night.

## About Fahrenheit Robotics Team 6882

We're **FIRST Robotics Team 6882**, formed in 2017. We welcome public, private, and homeschool high school students (and ambitious 8th graders) from Fredericksburg and the surrounding area. We meet throughout the school year, learning not just how to build a competition robot, but how to manage and run a successful team, then compete against other high school teams at regional events.

The Pumpkinator is one of our student-led fundraiser projects. Every kit given out (in exchange for a donation, or just for fun) helps fund our team's travel, parts, and competition fees.

**Live near Fredericksburg and in 8th–12th grade? Love STEAM?** We'd love to have you:

- 💬 [Discord](https://discord.com/channels/505146464037634050)
- 📘 [Facebook](https://www.facebook.com/fahrenheitrobotics)
- 🌐 [Team website & contact info](https://fahrenheitrobotics.org#contact)
- 🏆 [FIRST Team 6882 profile](https://frc-events.firstinspires.org/team/6882)
