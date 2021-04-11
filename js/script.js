//Chatbox
window.$crisp = [];
window.CRISP_WEBSITE_ID = "faef1783-f405-4cbd-bd24-15e660c13b23";
(function () {
  d = document;
  s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();


//Parallax
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

//Contact Form

//Navbar scroll animation
const sections = document.querySelectorAll("section");
const navbar = document.querySelectorAll(".nvbar");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navbar.forEach((nvbar) => {
    nvbar.classList.remove("active");
    if (nvbar.classList.contains(current)) {
      nvbar.classList.add("active");
    }
  });
});
