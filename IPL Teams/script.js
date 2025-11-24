let teams = [
  {
    team: "CSK",
    color: "#FFD504",
    texClr: "#03529F",
    trophies: 5,
    captain: "MSD",
    fullname: "Chennai Super Kings",
    logo: "./CSK LOGO.jpg",
  },
  {
    team: "MI",
    color: "#01156E",
    texClr: "#F9FFFF",
    trophies: 5,
    captain: "Hardik Pandya",
    fullname: "Mumbai Indians",
    logo: "./MI LOGO.jpg",
  },
  {
    team: "DC",
    color: "#36317F",
    texClr: "#FFFFFF",
    trophies: 0,
    captain: "Axar Patel",
    fullname: "Delhi Capitals",
    logo: "./DC LOGO.jpg",
  },
  {
    team: "RR",
    color: "#EB83B5",
    texClr: "#36448D",
    trophies: 1,
    captain: "Sanju Samson",
    fullname: "Rajasthan Royals",
    logo: "./RR LOGO.jpg",
  },
  {
    team: "KKR",
    color: "#3A225C",
    texClr: "#F7CE57",
    trophies: 3,
    captain: "Ajinkya Rahane",
    fullname: "Kolkata Knight Riders",
    logo: "./KKR LOGO.jpg",
  },
  {
    team: "RCB",
    color: "#74021B",
    texClr: "#F1D15A",
    trophies: 1,
    captain: "Rajat Patidar",
    fullname: "Royal Challengers Bengaluru",
    logo: "./RCB LOGO.jpg",
  },
  {
    team: "GT",
    color: "#0C1E34",
    texClr: "#C3AD55",
    trophies: 1,
    captain: "Shubman Gill",
    fullname: "Gujarat Titans",
    logo: "./GT LOGO.jpg",
  },
  {
    team: "LSG",
    color: "#0156E1",
    texClr: "#FF8288",
    trophies: 0,
    captain: "Rishabh Pant",
    fullname: "Lucknow Super Giants",
    logo: "./LSG LOGO.jpg",
  },
  {
    team: "PBKS",
    color: "#FE0024",
    texClr: "#E8CAA8",
    trophies: 0,
    captain: "Shreyas Iyer",
    fullname: "Punjab Kings",
    logo: "./PBKS LOGO.jpg",
  },
  {
    team: "SRH",
    color: "#E3471E",
    texClr: "#3E4152",
    trophies: 1,
    captain: "Pat Cummins",
    fullname: "Sunrisers Hyderabad",
    logo: "./SRH LOGO.jpg",
  },
];

let box = document.querySelector(".box");
let img = document.querySelector("img");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let rndm = teams[Math.floor(Math.random() * teams.length)];

  box.style.backgroundColor = rndm.color;
  img.setAttribute("src", rndm.logo);
  h1.innerHTML = rndm.team;
  h2.innerHTML = rndm.captain;
  h3.innerHTML = rndm.fullname;
  h4.innerHTML = rndm.trophies + ` Trophies`;

  h1.style.color = rndm.texClr;
  h2.style.color = rndm.texClr;
  h3.style.color = rndm.texClr;
  h4.style.color = rndm.texClr;
});
