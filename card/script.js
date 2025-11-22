const people = [
  {
    fullName: "John Doe",
    image:
      "https://i.pinimg.com/736x/3f/e3/94/3fe394b95cc3758bc9bd42d8144f8e5b.jpg",
    profession: "Web Developer",
    description:
      "Passionate about building modern web applications using JavaScript and latest frameworks.",
    tags: ["JavaScript", "React", "Frontend", "UI/UX"],
  },
  {
    fullName: "Sophia Smith",
    image:
      "https://i.pinimg.com/736x/36/9e/f7/369ef7baddf65cca30df17247ac8d462.jpg",
    profession: "Graphic Designer",
    description:
      "Creative designer specializing in branding, digital art, and visual storytelling.",
    tags: ["Photoshop", "Illustrator", "Branding", "Creativity"],
  },
  {
    fullName: "Michael Lee",
    image:
      "https://i.pinimg.com/1200x/bc/4d/ee/bc4dee8ea993613c84bbaa893b02003c.jpg",
    profession: "Data Analyst",
    description:
      "Expert in analyzing business data to uncover insights and optimize performance.",
    tags: ["Data Analysis", "Python", "Excel", "Machine Learning"],
  },
  {
    fullName: "Emma Johnson",
    image:
      "https://i.pinimg.com/736x/29/28/1f/29281f8267e33d248d0f97786f650629.jpg",
    profession: "App Developer",
    description:
      "Creates seamless mobile experiences for Android and iOS platforms.",
    tags: ["Flutter", "Firebase", "Mobile Apps", "UI Development"],
  },
  {
    fullName: "David Roy",
    image:
      "https://i.pinimg.com/736x/36/b2/7c/36b27c2ebf59557181cb6b8398ae0521.jpg",
    profession: "Digital Marketer",
    description:
      "Helps businesses grow using SEO, social media strategies, and paid campaigns.",
    tags: ["SEO", "Google Ads", "Marketing", "Brand Growth"],
  },
];

var sum = "";

people.forEach(function (elem) {
  sum =
    sum +
    `<div class="card">
      <img src="${elem.image}" alt="">
      <h3>${elem.fullName}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`;
});

var main = document.querySelector("main");

main.innerHTML = sum;
