---
sidebar_label: 'Preparation Steps'
sidebar_position: 3
---

# Pumpkinator: Preparation Steps

These are the steps needed to prepare a kit before it's assembled. Preparation involves soldering and crimping, so it works best when done in batches across many kits at once. Each item below produces a finished part or sub-harness that gets plugged in later during [Assembly Steps](./assembly-steps), which needs very few tools, if any.

1. **Print the cases.** 3D print the case, lid, and battery cradle for each kit. Printing takes the longest, so start here. The design is in [Onshape](https://cad.onshape.com/documents/50248517973a6125d7752796/w/cd35b777a41ef71427da35af/e/c062e51bb227c2f4638bb4cc?renderMode=0&uiState=6abc4a38128b139c0eef7836).

   <figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '360px'}}>
     <img
       src={require('./img/case-01.jpg').default}
       alt="Two orange 3D printed case pieces sitting on a wooden table"
       style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
     />
     <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>A printed case</figcaption>
   </figure>
2. **Solder header pins onto the Arduino and JQ6500 (if needed).** Arduino Nano and JQ6500 boards sometimes ship with their pin headers unsoldered and loose in the bag rather than attached. If yours came this way, solder the header pins onto both boards so they can plug into a breadboard.

   <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', margin: '1rem 0'}}>
     <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
       <img
         src={require('./img/arduino-nano-03.jpg').default}
         alt="Loose header pin strips lying on a table"
         style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
       />
       <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Loose header pins, as they come in the bag</figcaption>
     </figure>
     <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
       <img
         src={require('./img/arduino-nano-05.jpg').default}
         alt="Two strips of header pins pushed into a breadboard"
         style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
       />
       <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Header pins pushed into the breadboard</figcaption>
     </figure>
     <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
       <img
         src={require('./img/arduino-nano-04.jpg').default}
         alt="The Arduino Nano sitting on the breadboard"
         style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
       />
       <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>The Arduino Nano seated on the pins</figcaption>
     </figure>
     <figure style={{margin: 0, textAlign: 'center', maxWidth: '240px'}}>
       <img
         src={require('./img/arduino-nano-06.jpg').default}
         alt="Close-up of the Arduino Nano with its header pins soldered"
         style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
       />
       <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>Close-up of the soldered pins</figcaption>
     </figure>
   </div>
3. **Prep the power switch harness.** Solder the red wire from the battery pack to one tab on the switch, then solder a second 6-inch length of red wire to the other tab on the switch — 6 inches works well for reaching from the switch to the breadboard. Tin the loose end of that second red wire with solder, and tin the end of the battery pack's black wire with solder. The result is a battery pack + switch unit with two tinned leads ready to plug into a breadboard.

   <figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '360px'}}>
     <img
       src={require('./img/battery-box-02.jpg').default}
       alt="The 4 AA battery box with its red and black wires, and the power switch wired up, sitting in the case"
       style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
     />
     <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>The battery pack and switch harness, sitting in the case</figcaption>
   </figure>
4. **Prep the LED wire harnesses.** Cut 2 LEDs from a WS2812B strip. Solder 5-6 inches of wire to each LED: red for 5V, black for GND, and either green or white for the data/signal line (Din). 26-28 AWG wire works well.

   <figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '240px'}}>
     <img
       src={require('./img/leds-04.jpg').default}
       alt="A two-LED piece of strip with red, black and white wires soldered on and taped"
       style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
     />
     <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>A finished LED harness: two LEDs with wires soldered on</figcaption>
   </figure>
5. **Prep the PIR sensor harness.** Cut 3 strands of 26 AWG wire, about 20 inches each: black for ground, red for power, and a third color (yellow, blue, or green) for signal. Braid the 3 wires together to keep them from tangling. Crimp a connector onto one end of each wire and tin the other end with solder. Plug the crimped ends into the PIR sensor: with the sensor's dome facing up and the pin side facing you pointing down, the left pin is ground, the center pin is signal, and the right pin is power.

   <figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '240px'}}>
     <img
       src={require('./img/pir-sensor-04.jpg').default}
       alt="A PIR sensor with long black, green and red wires attached, lying on a wooden table"
       style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
     />
     <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>A finished PIR sensor harness</figcaption>
   </figure>
6. **Prep the speaker harness.** Cut off the speaker's existing connector. Crimp a Molex male connector onto the black wire and another Molex male connector onto the red wire, then tape the two connectors together so they stay aligned as a pair.
7. **Cut the sound card jumper wires.** These connect the Arduino to the JQ6500 sound card. Solid core wire works well here since each one is a short breadboard-to-breadboard hop. Cut and strip four wires per kit:
   - **Power:** a 2.5-inch red wire (Arduino 5V to the sound card).
   - **Ground:** a 2-inch black or white wire (Arduino GND to the sound card).
   - **TX line:** a 3-inch wire in any color other than red, black, or white (Arduino D2 to the sound card).
   - **RX line:** a 2-inch wire in any color other than red, black, or white (from the resistor row to the sound card). Include a 1 kΩ resistor with each kit, since this line needs one.

   <figure style={{margin: '1rem 0', textAlign: 'center', maxWidth: '240px'}}>
     <img
       src={require('./img/speaker-01.jpg').default}
       alt="The speaker with its red and black wires, plus the short wires and resistor that connect the sound card to the Arduino"
       style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.25)'}}
     />
     <figcaption style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '0.5rem'}}>The speaker, along with the wires needed to connect the sound card to the Arduino</figcaption>
   </figure>

Once a batch of these is ready, hand them off along with the printed cases, breadboards, and remaining loose parts so students can complete the rest of the build in [Assembly Steps](./assembly-steps).
