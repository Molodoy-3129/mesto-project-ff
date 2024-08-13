
  



function createCard(name, link, openImagePopup) {
  const template = document.querySelector("#card-template").content;
  const cardElement = template.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deletButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardImage.setAttribute("src", link);
  cardImage.setAttribute("alt", `Картинка места "${name}"`);
  cardElement.querySelector(".card__title").textContent = name;
 
  cardImage.addEventListener('click', () => openImagePopup(name, link));
  cardLikeButton.addEventListener('click', likeCard)
  deletButton.addEventListener("click", deleteCard);

  return cardElement;
}

 function deleteCard(evt) {
  evt.target.closest('.card').remove()
}

 function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active')
}

export {createCard};
