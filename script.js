/* ================= PARTICLES ================= */
const particles = document.createElement('div');
particles.className = 'particles';
document.body.appendChild(particles);

for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${4 + Math.random() * 6}s`;

  particles.appendChild(particle);
}

const burger = document.getElementById("burger");
const nav = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

/* Закрытие меню при клике */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
// Плавная прокрутка по якорям (jQuery)
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  const target = $(this).attr('href');

  $('html, body').animate(
    {
      scrollTop: $(target).offset().top - 80
    },
    600
  );
});
