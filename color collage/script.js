var main = document.querySelector("main");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var box = document.createElement("div");

  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  var rot = Math.floor(Math.random() * 360);
  var scl = Math.random() * 4;

  box.style.height = "50px";
  box.style.width = "50px";

  box.style.position = "absolute";
  box.style.left = x + "%";
  box.style.top = y + "%";
  box.style.rotate = rot + "deg";
  box.style.scale = scl;

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  box.style.backgroundColor = `rgb(${r},${g},${b})`;

  main.appendChild(box);
});
