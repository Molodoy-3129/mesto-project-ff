

import { initialCards, deleteCard, createCard, openPopup, closePopup} from './cards';

const container = document.querySelector(".places__list");



const editPopup = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = editPopup.querySelector(".popup__close");
const editForm = document.querySelector('form[name="edit-profile"]');
const formElement = document.querySelector('.popup__form')
const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editSaveButton = editPopup.querySelector(".popup__button");




initialCards.forEach((item) => {
    const newCard = createCard(item.name, item.link, deleteCard);
    container.append(newCard);
});

profileEditButton.addEventListener('click', function() {
  openPopup(editPopup);
})  

closeEditButton.addEventListener('click', () => {
  closePopup(editPopup);
 
})





function handlerFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
   
 
    
}

formElement.addEventListener('submit', handlerFormSubmit);


const addCardForm = document.querySelector('.popup__form[name="new-place"]');
const popupAddCard = document.querySelector('.popup_type_new-card');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');
const profileAddButton = document.querySelector('.profile__add-button');
const closeAddButton = popupAddCard.querySelector('.popup__close')

profileAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
})
closeAddButton.addEventListener('click', () => {
  closePopup(popupAddCard);
})


function addCardSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  const newCard = createCard(name, link, deleteCard);
  addCard(newCard);
  addCardForm.reset();
  closePopup(popupAddCard);
}


function addCard(card) {
  container.prepend(card);
}

addCardForm.addEventListener('submit', addCardSubmit);