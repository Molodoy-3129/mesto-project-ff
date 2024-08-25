import { deleteCard, likeCard, dislikeCard } from "./api";



function createCard(cardData, profileId, onLike, onDelete, onOpenImage) {
  const cardTemplate = document.querySelector("#card-template").content,
    card = cardTemplate.querySelector(".card").cloneNode(true),
    cardImage = card.querySelector(".card__image"),
    cardTitle = card.querySelector(".card__title"),
    cardLikeButton = card.querySelector(".card__like-button"),
    cardLikeCounter = card.querySelector(".card__like-counter"),
    isLiked = cardData.likes.some((likeItem) => likeItem._id === profileId),
    deleteButton = card.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardLikeCounter.textContent = cardData.likes.length;

  if (cardData.owner._id === profileId) deleteButton.style.display = "block";
  else deleteButton.style.display = "none";

  if (isLiked) cardLikeButton.classList.add("card__like-button_is-active");
 

  cardImage.addEventListener("click", () => onOpenImage(card));
  cardLikeButton.addEventListener("click", () => onLike(card, cardData));
  deleteButton.addEventListener("click", () => onDelete(card, cardData));

  return card;
}

function changeLike(card, cardData) {
  const cardLikeButton = card.querySelector(".card__like-button"),
    cardLikeCounter = card.querySelector(".card__like-counter");

    const likeMethod = cardLikeButton.classList.contains("card__like-button_is-active") ? dislikeCard : likeCard;
    likeMethod(cardData._id) 
            .then((data) => {
               cardLikeCounter.textContent = data.likes.length; 
              cardLikeButton.classList.toggle("card__like-button_is-active"); 
            })
    .catch(err => console.error("Ошибка при лайке:", error))};
          
function deleteMyCard(card) {
  card.remove();
}

export { createCard, changeLike, deleteMyCard };