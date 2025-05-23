const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');
const bookWidth = 220;
let scrollAmount = 0;
let autoScrollInterval;
let currentIndex = 0;

// Calcular o total de "páginas"
const booksPerView = Math.floor(carousel.offsetWidth / bookWidth);
const totalBooks = carousel.children.length;
const totalPages = Math.ceil(totalBooks / booksPerView);

// Criar indicadores
for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => goToPage(i));
  indicatorsContainer.appendChild(dot);
}
updateIndicators();

function goToPage(index) {
  currentIndex = index;
  scrollAmount = bookWidth * booksPerView * index;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
  updateIndicators();
}

function updateIndicators() {
  document.querySelectorAll('.indicators span').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Botões manuais
document.querySelector('.left').addEventListener('click', () => {
  if (currentIndex > 0) goToPage(currentIndex - 1);
});

document.querySelector('.right').addEventListener('click', () => {
  if (currentIndex < totalPages - 1) goToPage(currentIndex + 1);
});

// Auto deslizamento
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalPages;
    goToPage(currentIndex);
  }, 4000); // 4 segundos
}
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

startAutoScroll();

// Parar animação ao passar mouse
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);