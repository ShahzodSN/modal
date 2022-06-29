const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModal.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// function keydown(evt) {
//   if (!evt) evt = event;

//   if (evt.ctrlKey && evt.altKey && evt.keyCode === 115) {
//     alert('CTRL+ALT+F4');
//   } else if (evt.shiftKey && evt.keyCode === 9) {
//     alert('Shift+TAB');
//   }
// }

// console.log(keydown);

document.addEventListener('keydown', function (evt) {
  if (evt.metaKey && evt.keyCode === 67) {
    closeModal();
  }

  console.log(evt);
});
