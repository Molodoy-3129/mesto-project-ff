
import {openPopup, closePopup} from './modal';

const imagePopup = document.querySelector(".popup_type_image");
const image = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

function deleteCard(card) {
  card.remove();
}


function cardLike (item) {
  item.classList.toggle("card__like-button_is-active");
}

function openImagePopup ({link, name}) {
  image.src = link;
  image.alt = name;
  popupCaption.textContent = name;  
  openPopup(imagePopup);
}


function createCard(name, link) {
  const template = document.querySelector("#card-template").content;
  const cardElement = template.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deletButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardImage.setAttribute("src", link);
  cardImage.setAttribute("alt", `Картинка места "${name}"`);
  cardElement.querySelector(".card__title").textContent = name;

  cardImage.addEventListener('click', () => {
    openImagePopup({link, name})
  })
   
  
  cardLikeButton.addEventListener('click', () => {
    cardLike(cardLikeButton);
  } )

  deletButton.addEventListener("click",  () => {
      deleteCard(cardElement);
  });

 
  
  return cardElement;
}




export {deleteCard, createCard};
