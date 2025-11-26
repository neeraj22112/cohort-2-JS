const reelsdata = [
  {
    username: "travel_with_arya",
    likeCount: 12400,
    isLiked: false,
    commentCount: 340,
    caption: "Exploring the mountains 🏔️✨",
    video: "video1.mp4",
    userprofile:
      "https://i.pinimg.com/736x/7a/e5/4c/7ae54cd93f3909858f19595247e5b1ce.jpg",
    shareCount: 120,
    isFollowed: true,
  },
  {
    username: "foodie_mania",
    likeCount: 8600,
    isLiked: true,
    commentCount: 190,
    caption: "Crispy momos + spicy chutney 🔥",
    video: "video2.mp4",
    userprofile:
      "https://i.pinimg.com/1200x/d8/c7/02/d8c7024e2f707514a6b6e0eefb02898b.jpg",
    shareCount: 90,
    isFollowed: false,
  },
  {
    username: "dance_with_riya",
    likeCount: 9800,
    isLiked: true,
    commentCount: 260,
    caption: "Weekend vibe dance 💃✨",
    video: "video3.mp4",
    userprofile:
      "https://i.pinimg.com/1200x/c6/75/7d/c6757dc9a2fdb30bc1351464c955e686.jpg",
    shareCount: 150,
    isFollowed: false,
  },
  {
    username: "nature_snap",
    likeCount: 17900,
    isLiked: true,
    commentCount: 510,
    caption: "Sunset hits different 🌅✨",
    video: "video4.mp4",
    userprofile:
      "https://i.pinimg.com/736x/c8/31/7d/c8317d8209197fa9a7ac9cf9f38b0ea6.jpg",
    shareCount: 300,
    isFollowed: true,
  },
  {
    username: "car_world",
    likeCount: 19800,
    isLiked: false,
    commentCount: 490,
    caption: "This engine sound 😍🔥",
    video: "video5.mp4",
    userprofile:
      "https://i.pinimg.com/736x/b5/42/ce/b542cec322ada1fc1717e8675cdbc6bb.jpg",
    shareCount: 350,
    isFollowed: false,
  },
  {
    username: "fitness_with_kabir",
    likeCount: 15200,
    isLiked: false,
    commentCount: 410,
    caption: "Morning workout grind 💪🔥",
    video: "video6.mp4",
    userprofile:
      "https://i.pinimg.com/736x/92/e6/25/92e62501bd4a6db3cf3c7aaf04025b36.jpg",
    shareCount: 180,
    isFollowed: true,
  },
  {
    username: "creative_sana",
    likeCount: 8200,
    isLiked: false,
    commentCount: 260,
    caption: "New sketch coming to life ✏️✨",
    video: "video7.mp4",
    userprofile:
      "https://i.pinimg.com/1200x/6c/6a/d1/6c6ad155d045ef4ee5902b7706df43aa.jpg",
    shareCount: 120,
    isFollowed: true,
  },
  {
    username: "tech_guru_rk",
    likeCount: 13400,
    isLiked: false,
    commentCount: 370,
    caption: "This gadget is insane! 🤯⚡",
    video: "video8.mp4",
    userprofile:
      "https://i.pinimg.com/736x/94/90/36/949036fbcc21cc4e75dd745e6f19d411.jpg",
    shareCount: 210,
    isFollowed: false,
  },
  {
    username: "petlover_amy",
    likeCount: 11200,
    isLiked: true,
    commentCount: 280,
    caption: "Cutest doggo ever 🐶❤️",
    video: "video9.mp4",
    userprofile:
      "https://i.pinimg.com/736x/91/ef/f4/91eff467b7d5bbf0680576e5b469bdf7.jpg",
    shareCount: 140,
    isFollowed: true,
  },
  {
    username: "fashion_by_meera",
    likeCount: 16500,
    isLiked: false,
    commentCount: 450,
    caption: "Outfit of the day ✨👗",
    video: "video10.mp4",
    userprofile:
      "https://i.pinimg.com/1200x/c2/31/9c/c2319c925555c8b07468cc1357e9c20a.jpg",
    shareCount: 260,
    isFollowed: false,
  },
];

var sum = "";
reelsdata.forEach(function (elem) {
  sum =
    sum +
    `<div class="reels">
            <video autoplay loop muted src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userprofile}"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>

            <div class="right">
              <div class="like">
                <h4 class="like-icon icon">${
                  elem.isLiked
                    ? '<i class=" love ri-heart-3-fill"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div> `;
});

var allreels = document.querySelector(".allreels");

allreels.innerHTML = sum;
