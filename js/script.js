const carousel = document.getElementById('carousel');
let scrollAmount = 0;

document.querySelector('.left').addEventListener('click', () => {
  scrollAmount -= 220;
  if (scrollAmount < 0) scrollAmount = 0;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

document.querySelector('.right').addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  scrollAmount += 220;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});