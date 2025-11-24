var body = document.querySelector("body");

body.addEventListener("keydown", function (det) {
  let audio = new Audio();

  if (det.code == "KeyA") audio.src = "./28.mp3";
  else if (det.code == "KeyB") audio.src = "./29.mp3";
  else if (det.code == "KeyC") audio.src = "./30.mp3";
  else if (det.code == "KeyD") audio.src = "./31.mp3";
  else if (det.code == "KeyE") audio.src = "./32.mp3";
  else if (det.code == "KeyF") audio.src = "./33.mp3";
  else if (det.code == "KeyG") audio.src = "./34.mp3";
  else if (det.code == "KeyH") audio.src = "./35.mp3";
  else if (det.code == "KeyI") audio.src = "./36.mp3";
  else if (det.code == "KeyJ") audio.src = "./37.mp3";
  else if (det.code == "KeyK") audio.src = "./38.mp3";
  else if (det.code == "KeyL") audio.src = "./39.mp3";
  else if (det.code == "KeyM") audio.src = "./40.mp3";
  else if (det.code == "KeyN") audio.src = "./41.mp3";
  else if (det.code == "KeyO") audio.src = "./42.mp3";
  else if (det.code == "KeyP") audio.src = "./43.mp3";
  else if (det.code == "KeyQ") audio.src = "./44.mp3";
  else if (det.code == "KeyR") audio.src = "./45.mp3";
  else if (det.code == "KeyS") audio.src = "./46.mp3";
  else if (det.code == "KeyT") audio.src = "./47.mp3";
  else if (det.code == "KeyU") audio.src = "./48.mp3";
  else if (det.code == "KeyV") audio.src = "./49.mp3";
  else if (det.code == "KeyW") audio.src = "./50.mp3";
  else if (det.code == "KeyX") audio.src = "./51.mp3";
  else if (det.code == "KeyY") audio.src = "./52.mp3";
  else if (det.code == "KeyZ") audio.src = "./53.mp3";
  else return;

  audio.currentTime = 0;
  audio.play();
});
