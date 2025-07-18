const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-down").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-left").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-right").forEach((el) => {
  observer.observe(el);
});

const selengkapnya = document.getElementById("selengkapnya");

const description = document.querySelector(".description");

const hero = document.querySelector(".hero")

selengkapnya.addEventListener("click", () => {

  description.classList.toggle("expanded")

  if(description.classList.contains("expanded")){
    selengkapnya.textContent = "Sembunyikan"
    hero.style.minHeight = "200vh"
  } else {
    hero.style.minHeight = "100vh"
    selengkapnya.textContent = "Baca Selengkapnya"
  }
  
});
