var inc = document.querySelector(".inc");
var dec = document.querySelector(".dec");
var h1 = document.querySelector(".count");

var a = 0;

inc.addEventListener("click", function () {
  a++;
  h1.innerHTML = a;
});

dec.addEventListener("click", function () {
  a--;
  h1.innerHTML = a;
});
