// Slider auto-scroll
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.getElementById('slider');
let slideIndex = 0;
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

// Comment section
const form = document.getElementById('comment-form');
const commentsDisplay = document.getElementById('comments-display');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentInput = document.getElementById('comment-input');
  if (commentInput.value.trim() === '') return;
  const comment = document.createElement('p');
  comment.textContent = commentInput.value;
  commentsDisplay.appendChild(comment);
  commentInput.value = '';
});


// Fungsi untuk menampilkan slide berikutnya
function showNextSlide() {
    slideIndex = (slideIndex + 1) % 3; // Total 3 slide
    slider.style.transform = translateX(-${slideIndex * 100}%);
}

// Fungsi untuk menampilkan slide sebelumnya
function showPrevSlide() {
    slideIndex = (slideIndex - 1 + 3) % 3; // Kembali ke slide terakhir jika di awal
    slider.style.transform = translateX(-${slideIndex * 100}%);
}

// Event listener untuk tombol navigasi
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);