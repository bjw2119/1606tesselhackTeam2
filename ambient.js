
var tessel = require('tessel');
var ambientlib = require('../'); // Replace '../' with 'ambient-attx4' in your own code

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {

  // Set a light level trigger
  // The trigger is a float between 0 and 1
  ambient.setLightTrigger(0.5);

  // Set a sound level trigger
  // The trigger is a float between 0 and 1
  ambient.setSoundTrigger(0.1);

  console.log('Waiting for a bright light or a sound...');

  ambient.on('light-trigger', function(data) {
    console.log("Our light trigger was hit:", data);

    // Clear the trigger so it stops firing
    ambient.clearLightTrigger();
    //After 1.5 seconds reset light trigger
    setTimeout(function () {

        ambient.setLightTrigger(0.5);

    },1500);
  });
