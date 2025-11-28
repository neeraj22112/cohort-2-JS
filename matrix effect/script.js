const para = document.querySelector("p");
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&";
const text = para.innerText;

let iteration = 0;

para.addEventListener("mouseenter", () => {
  setInterval(() => {
    const str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return character.split("")[Math.floor(Math.random() * 59)];
      })
      .join("");

    para.innerText = str;

    iteration += 0.25;
  }, 30);
});
