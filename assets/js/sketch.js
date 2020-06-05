var div, start_button, mic, micEnabled

function setup() {
  noCanvas();
  div = document.getElementById('arttext');
    
    mic = new p5.AudioIn();
}

function toggleMic() {
    mic.start();
    micEnabled = true;
}


function draw() {
  micLevel = mic.getLevel();
  // weightControl = sin(frameCount/1.0)*100;
  div.style['font-variation-settings'] = `"wght" ${micLevel * 4000}, "wdth" ${micLevel * 5000}`;
  console.log(micLevel);
}
