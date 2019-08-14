const cue = require('cue-sdk'),
  robot = require("robotjs"),
  hexRgb = require('hex-rgb');

  //-------------------------------------//
  //    CONFIG - YOU CAN CHANGE THESE    //
  //-------------------------------------//
  var pubghealthx = 1456;
  var pubghealthy = 1383;
  //var mouse = robot.getMousePos();
  //console.log(mouse);
  
  //-------------------------------------//
  //  DONT CHANGE ANYTHING UNDER HERE!   //
  // unless you know what you are doing! //
  //-------------------------------------//
  
// initialize sdk
cue.CorsairPerformProtocolHandshake();

const ledsMap = {};

const deviceCount = cue.CorsairGetDeviceCount();
for (let di = 0; di < deviceCount; di++) {
  const { type } = cue.CorsairGetDeviceInfo(di);
  if (type == cue.CorsairDeviceType.CDT_Mouse || type == cue.CorsairDeviceType.CDT_Keyboard || type == cue.CorsairDeviceType.CDT_Headset) {
    const deviceLeds = cue.CorsairGetLedPositionsByDeviceIndex(di);
    ledsMap[di] = deviceLeds.map(dl => ({ ledId: dl.ledId, r: 0, g: 0, b: 0 }));
  }
}

setInterval(() => {
  // Get pixel color in hex format.
  const hex = robot.getPixelColor(pubghealthx, pubghealthy);
  const color = hexRgb(hex);

  if (color.red < 240) { color.red += 14; }
  if (color.green < 240) { color.green += 14; }
  if (color.blue < 240) { color.blue += 14; }

  //console.log(`Current Colour: ${color.red}, ${color.green}, ${color.blue} (#${hex})`);

  // update colors for all devices
  Object.values(ledsMap).forEach(leds => leds.forEach(led => {
    led.r = color.red;
    led.g = color.green;
    led.b = color.blue;
  }));

  // prepare colors frame
  Object.entries(ledsMap).forEach(([index, leds]) => cue.CorsairSetLedsColorsBufferByDeviceIndex(+index, leds));
  // apply color
  cue.CorsairSetLedsColorsFlushBuffer();
}, 250);

console.log("Active!");