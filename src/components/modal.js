

const handleDocumentKeydown = (event) => {
    if (event.key === 'Escape') {
      closePopup(document.querySelector('.popup_is-opened'));
    }
  };
  
  
  const handleModalClick = (event) => {
    if (event.target.classList.contains('popup_is-opened')) {
      return closePopup(event.target);
    }
  
    if (event.target.closest('.popup__close')) {
      return closePopup(event.target.closest('.popup'));
    }
  };
  
  const openPopup = (element) => {
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleDocumentKeydown);
  };
  
  const closePopup = (element) => {
    document.removeEventListener('keydown', handleDocumentKeydown);
    element.classList.remove('popup_is-opened');
  };

  export {openPopup, closePopup, handleModalClick, handleDocumentKeydown};
  

