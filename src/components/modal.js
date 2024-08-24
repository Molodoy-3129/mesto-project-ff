
const openPopup = (element) => {
  element.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeEscape);
};

const closePopup = (element) => {
  document.removeEventListener('keydown', closeEscape);
  element.classList.remove('popup_is-opened');
};



const closeOverlay = (event) => {
  if (event.target.classList.contains('popup_is-opened')) {
    return closePopup(event.target);
  }

  if (event.target.closest('.popup__close')) {
    return closePopup(event.target.closest('.popup'));
  }
};


const closeEscape = (event) => {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_is-opened'));
  }
};


export { openPopup, closePopup, closeOverlay };


