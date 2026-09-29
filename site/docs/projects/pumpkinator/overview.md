---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Pumpkinator: Overview

The **Pumpkinator** is a Halloween prop built by Fahrenheit Robotics Team 6882 students. When someone walks past, it triggers spooky sound effects and a colorful RGB light show, all from inside a real pumpkin.

:::tip
Check out the [Pumpkinator landing page](/site/pumpkinator).
:::

- **Something not working right?** → [Troubleshooting Your Kit](./troubleshooting): kits ship fully assembled, but wires can shift in transit. Most fixes take under a minute.
- **Want to source parts and build your own?** → [Full Details About The Pumpkinator](./build-your-own): full parts list, wiring, and assembly instructions.

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1.5rem 0'}}>
  <iframe
    width="560" height="315"
    src="https://www.youtube.com/embed/ddEIHEI_wCI"
    title="Pumpkinator Electronics Overview"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
  <iframe
    width="560" height="315"
    src="https://www.youtube.com/embed/08HcJdJ3jpE"
    title="Pumpkinator Inside a Pumpkin"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>

## What It Does

1. A PIR motion sensor detects someone approaching.
2. The Arduino triggers a pre-loaded Halloween sound effect through a small speaker.
3. WS2812B RGB LEDs flash a light show in sync with the effect.
4. Everything resets and waits for the next visitor.

## Key Components

| Component | Role |
|---|---|
| Arduino Nano | Main controller |
| JQ6500 MP3 module | Plays audio from onboard flash storage |
| PIR motion sensor | Detects movement ~1 ft away |
| WS2812B LEDs (2–3) | RGB light effects inside the pumpkin |
| Small speaker (8Ω) | Sound output |
| 4× AA battery box | ~6V power supply |
| KCD11 rocker switch | On/off switch built into the enclosure |

## 3D Printed Case

All electronics mount inside a **custom 3D-printed enclosure** (roughly 110mm × 70mm × 40mm). The box sits inside the pumpkin with:

- LED strip mounted in a channel on top, shining up through the pumpkin lid
- Speaker fitted into a compartment built specifically to hold it, facing down so sound bounces off the inside of the pumpkin
- Motion sensor on a detachable pigtail wire that pokes out the back

View the design in [Onshape](https://cad.onshape.com/documents/50248517973a6125d7752796/w/cd35b777a41ef71427da35af/e/c062e51bb227c2f4638bb4cc?renderMode=0&uiState=6abc4a38128b139c0eef7836).

## Why This Project

Building the Pumpkinator teaches students real-world skills across multiple disciplines:

- **Electronics:** wiring, power rails, connectors, crimping
- **Programming:** Arduino C++, sensor input, audio/LED libraries
- **CAD:** designing a functional enclosure in Onshape
- **Manufacturing:** 3D printing, assembly-line techniques for batch production

It also gives the team a tangible fundraiser item with a story behind it.

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
