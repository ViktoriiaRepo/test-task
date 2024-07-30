const track = document.querySelector('.carousel__track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel__arrow--right');
const prevButton = document.querySelector('.carousel__arrow--left');
const indicators = Array.from(
  document.querySelectorAll('.carousel__indicator')
);

const itemWidth = items[0].getBoundingClientRect().width; // Ширина одного слайда
const gap = parseInt(getComputedStyle(track).gap); // Відстань між слайдами

let currentIndex = 0;

const updateIndicators = () => {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
};

const moveToSlide = (currentIndex) => {
  const amountToMove = -currentIndex * (itemWidth + gap);
  track.style.transform = `translateX(${amountToMove}px)`;
  updateIndicators();
};

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    moveToSlide(currentIndex);
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(currentIndex);
  }
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    moveToSlide(currentIndex);
  });
});

updateIndicators();
