const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let confetti = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createConfetti(x, y) {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: x,
      y: y,
      size: Math.random() * 8 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speedX: (Math.random() - 0.5) * 10,
      speedY: (Math.random() - 1.5) * 10,
      gravity: 0.3,
      alpha: 1,
    });
  }
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = confetti.length - 1; i >= 0; i--) {
    const c = confetti[i];
    c.x += c.speedX;
    c.y += c.speedY;
    c.speedY += c.gravity;
    c.alpha -= 0.01;
    if (c.alpha <= 0) {
      confetti.splice(i, 1);
      continue;
    }
    ctx.globalAlpha = c.alpha;
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(updateConfetti);
}
updateConfetti();

// Tambahan logika: hanya buat confetti jika klik/tap di luar <main>
const mainElement = document.querySelector(".main");

function isClickOutsideMain(x, y) {
  const rect = mainElement.getBoundingClientRect();
  return x < rect.left || x > rect.right || y < rect.top || y > rect.bottom;
}

document.addEventListener("click", (e) => {
  if (isClickOutsideMain(e.clientX, e.clientY)) {
    createConfetti(e.clientX, e.clientY);
  }
});

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  if (isClickOutsideMain(touch.clientX, touch.clientY)) {
    createConfetti(touch.clientX, touch.clientY);
  }
});

const dialogues = [
  {
    name: "Bayu",
    img: "stiker/senang.png",
    text: "Haiii Bismii Selamat tahun baruuuu!",
    buttons: ["Hahaha", "Haii"],
  },
  {
    name: "Bayu",
    img: "stiker/ketawa.png",
    text: "Gak kerasa yaa, tau-tau udah ganti angka lagii",
    buttons: ["Iyaa", "Cepat banget"],
  },
  {
    name: "Bayu",
    img: "stiker/senyum.png",
    text: "Tahun lalu pasti banyak hal yang capek, banyak juga yang bikin belajar",
    buttons: ["...", "..."],
  },
  {
    name: "Bayu",
    img: "stiker/gaktau.png",
    text: "Semoga di tahun baru ini, hari-hari Bismii lebih banyak senyumnya daripada capeknya 😄",
    buttons: ["Aamiin", "Hehehe"],
  },
  {
    name: "Bayu",
    img: "stiker/ngambek.png",
    text: "Kalau nanti capek, ingat yaa, istirahaatt!!",
    buttons: ["Siap", "..."],
  },
  {
    name: "Bayu",
    img: "stiker/senyum.png",
    text: "Semoga semua hal baik pelan-pelan datang ke Bismii",
    buttons: ["...", "Aamiin"],
  },
];

let currentIndex = 0;
let typingIndex = 0;
let isTyping = false;

const speechElement = document.getElementById("speech");
const nameElement = document.getElementById("name");
const imgElement = document.querySelector(".img");
const buttons = document.querySelectorAll(".action");

function typeWriter(text, callback) {
  isTyping = true;
  speechElement.textContent = "";
  typingIndex = 0;

  const typing = setInterval(() => {
    speechElement.textContent += text[typingIndex];
    typingIndex++;
    if (typingIndex >= text.length) {
      clearInterval(typing);
      isTyping = false;
      if (callback) callback();
    }
  }, 40);
}

function loadDialogue(index) {
  if (index >= dialogues.length) {
    speechElement.textContent = "Dialog selesai. Terima kasih! 🎉";
    buttons.forEach((btn) => (btn.style.display = "none"));
    return;
  }

  const dialog = dialogues[index];
  nameElement.textContent = dialog.name;
  buttons[0].textContent = dialog.buttons[0];
  buttons[1].textContent = dialog.buttons[1];
  imgElement.src = dialog.img;

  if (index === 0) {
    speechElement.textContent = "";
    setTimeout(() => {
      typeWriter(dialog.text);
    }, 1500);
  } else {
    typeWriter(dialog.text);
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (isTyping) return;
    currentIndex++;
    loadDialogue(currentIndex);
  });
});

loadDialogue(currentIndex);
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-FYGT8Q1ZQM");
