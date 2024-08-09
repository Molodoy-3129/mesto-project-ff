 const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];





function deleteCard(card) {
  card.remove();
}

function openPopup(item) {
item.classList.add("popup_is-opened");
}

function closePopup(item) {
  item.classList.remove("popup_is-opened", "popup_is-animated");
}

function cardLike (item) {
  item.classList.toggle("card__like-button_is-active");
}

function createCard(name, link, deleteCard) {
  const template = document.querySelector("#card-template").content;
  const cardElement = template.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const imagePopup = document.querySelector(".popup_type_image");
  const image = imagePopup.querySelector(".popup__image");
  const deletButton = cardElement.querySelector(".card__delete-button");
  const popupCaption = imagePopup.querySelector(".popup__caption");
  const closeButtonPopup = imagePopup.querySelector(".popup__close");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardImage.setAttribute("src", link);
  cardImage.setAttribute("alt", `Картинка места "${name}"`);
  cardElement.querySelector(".card__title").textContent = name;
  cardImage.addEventListener('click', (e) => {
    image.src = link;
    image.alt = name;
    popupCaption.textContent = name;  
    openPopup(imagePopup);
  })
  cardLikeButton.addEventListener('click', () => {
    cardLike(cardLikeButton);
  } )

  deletButton.addEventListener("click",  () => {
      deleteCard(cardElement);
  });

  closeButtonPopup.addEventListener('click', () => {
    closePopup(imagePopup);
  });
  



  return cardElement;
}




export {initialCards, deleteCard, createCard, openPopup, closePopup};
