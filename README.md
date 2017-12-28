# Node JS - PUBG Corsair Health Bar
This script will fully colour your keyboard, mice and headset with the same colour as your PUBG health bar using Node JS.

# Install
* Install the dependencies: cue-sdk-node, robotjs, hex-rgb
* Change the config variables in index.js (read below for more info)

# Config Variables
The two variables used are to find the health bar on the screen.
You *will* need to change these variables as my current screen resolution is 3440x1440 (so the health bar will be in a slightly different place)
* To Change:
Uncomment the `var mouse` and `console.log` from lines 13 - 14
Open Node JS & PUBG, navigate to the script (but don't run it yet)
Start a game of PUBG and during the lobby time, put your mouse as far to the left of the health bar as you can then tab out to Node JS and run the script.
Stop the script after you see `{ x: .., y: .. }` and copy the co-ords accordingly to the variables in the script.

# Things to try if things go wrong
* Dependency Errors: 
If its an issue with dependencies, I most likely cannot help you as I did not code them.
* Keyboard Lagging: 
This shouldn't be an issue, but you can try messing on with the timer settings right at the bottom of the script (milliseconds)
* Headset Flickering: 
Try changing the second argument to `false` on `var cue = ..` (line 5)

# Known Issues
* FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
* `ST100 RGB Premium Headset Stand` does not light up (the SDK currently doesn't support it)

# Need any help?
Join my `empty` Discord ;) https://discord.gg/wkdmu4g
