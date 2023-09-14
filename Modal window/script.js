'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  overlay.addEventListener('click', hideModal);

  closeModal.addEventListener('click', hideModal);
}
