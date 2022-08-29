const hamburger =document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-links');

const revealLeft = document.querySelectorAll('.reveal-left');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(e => e.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);



const form = document.getElementById("subscribedb-form");



  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(document.getElementById("subscribedb-form")),
    })
      .then((response) => response.json())
      .then((html) => {
        // you can put any JS code here
        alert("Thank you for Signing up! We are looking forward to keep you updated with our latest post and articles");
      });
    form.reset();
  });
const contactForm = document.getElementById("contactdb-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(contactForm.action, {
      method: "POST",
      body: new FormData(document.getElementById("contactdb-form")),
    })
      .then((response) => response.json())
      .then((html) => {
        // you can put any JS code here
        alert("Thank you for Contacting us");
      });
     contactForm.reset();
  });