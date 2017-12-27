var CueSDK = require('cue-sdk-node'),
	robot = require("robotjs"),
	hexRgb = require('hex-rgb');

var cue = new CueSDK.CueSDK(false, true);


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

console.log("Active!");

setInterval(() => {
	// Get pixel color in hex format.
	var Rgb = hexRgb(robot.getPixelColor(pubghealthx, pubghealthy));
	var RgbSplit = Rgb.toString().split(',');
	
	if(RgbSplit[0] < 240){ var RgbSplit0 = (parseInt(RgbSplit[0], 10) + 14); }
	if(RgbSplit[1] < 240){ var RgbSplit1 = (parseInt(RgbSplit[1], 10) + 14); }
	if(RgbSplit[2] < 240){ var RgbSplit2 = (parseInt(RgbSplit[2], 10) + 14); }
	
	//console.log(parseInt(RgbSplit[1], 10) + 1);
	
	//console.log("Current Colour:" + RgbSplit[0] + ", " + RgbSplit[1] + ", " + RgbSplit[2] + " (#" + robot.getPixelColor(pubghealthx, pubghealthy) + ")");
	for (i = 1; i < 155; i++) {
		if (i !== 7) { //F6 Key - Makes the script beep for some reason, so its manually declaired below.
			//console.log("Trying: " + i + " (" + String.fromCharCode(i) + ")")
			cue.set(i, RgbSplit0, RgbSplit1, RgbSplit2, function() { /*console.log("Success: " + i)*/ }, true);
		}
	}
	cue.set("CLK_F6", RgbSplit0, RgbSplit1, RgbSplit2, function() { /* console.log("Success: " + i) */ }, false);
	cue.set("CLI_Invalid", 255, 0, 255, function() { /* console.log("Success: " + i) */ }, false);
	//cue.set("CLK_G1", 255, 0, 255, function() { /* console.log("Success: " + i) */ }, false);

}, 250)