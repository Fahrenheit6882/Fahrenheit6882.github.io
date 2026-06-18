---
sidebar_label: 'Overview'
sidebar_position: 1
---

# Pumpkinator — Overview

The **Pumpkinator** is a Halloween prop built by Fahrenheit Robotics Team 6882 students. When someone walks past, it triggers spooky sound effects and a colorful RGB light show — all from inside a real pumpkin.

The goal is to build **dozens of units** to give away as fundraiser prizes. Every unit is self-contained, battery-powered, and weatherized enough to sit outside on Halloween night.

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

## Enclosure

All electronics mount inside a **custom 3D-printed enclosure** (roughly 110mm × 70mm × 40mm). The box sits inside the pumpkin with:

- LED strip mounted in a channel on top, shining up through the pumpkin lid
- Speaker facing down, bouncing sound off the inside of the pumpkin
- USB ports accessible through the front wall for programming and audio uploads
- Motion sensor on a detachable pigtail wire that pokes out the back

The enclosure is printed in **PETG** for outdoor durability.

## Why This Project

Building the Pumpkinator teaches students real-world skills across multiple disciplines:

- **Electronics** — wiring, power rails, connectors, crimping
- **Programming** — Arduino C++, sensor input, audio/LED libraries
- **CAD** — designing a functional enclosure in Onshape
- **Manufacturing** — 3D printing, assembly-line techniques for batch production

It also gives the team a tangible fundraiser item with a story behind it.

## Battery Life

Running on 4× AA alkaline batteries (~2500 mAh), a unit draws roughly 100–160 mA when active. Expect **15–20+ hours** of runtime — more than enough for a full Halloween night.
