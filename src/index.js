import "./pages/index.css";
import { initialCards } from "./components/cards";
import { createCard } from "./components/card";
import { openPopup, closePopup, handleModalClick } from "./components/modal";

const container = document.querySelector(".places__list");
const popup = document.querySelector(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = editPopup.querySelector(".popup__close");
const editForm = document.querySelector('form[name="edit-profile"]');
const formElement = document.querySelector(".popup__form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupCard = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const closeButtonPopup = imagePopup.querySelector(".popup__close");
const image = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

editPopup.addEventListener("click", handleModalClick);
imagePopup.addEventListener("click", handleModalClick);
popupCard.addEventListener("click", handleModalClick);

initialCards.forEach((item) => {
    const newCard = createCard(item.name, item.link, openImagePopup);
    container.append(newCard);
});

profileEditButton.addEventListener("click", function () {
    openPopup(editPopup);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
});

closeEditButton.addEventListener("click", () => {
    closePopup(editPopup);
});

closeButtonPopup.addEventListener("click", () => {
    closePopup(imagePopup);
});

function handlerFormSubmit(evt) {
    evt.preventDefault();
    nameInput.textArea;
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popup);
}

formElement.addEventListener("submit", handlerFormSubmit);

const addCardForm = document.querySelector('.popup__form[name="new-place"]');
const popupAddCard = document.querySelector(".popup_type_new-card");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");
const profileAddButton = document.querySelector(".profile__add-button");
const closeAddButton = popupAddCard.querySelector(".popup__close");

profileAddButton.addEventListener("click", () => {
    openPopup(popupAddCard);
});
closeAddButton.addEventListener("click", () => {
    closePopup(popupAddCard);
});

function openImagePopup(name, link) {
    openPopup(imagePopup);
    image.src = link;
    image.alt = name;
    popupCaption.textContent = name;
}

function addCardSubmit(evt) {
    evt.preventDefault();
    const name = cardNameInput.value;
    const link = cardLinkInput.value;
    const newCard = createCard(name, link);
    addCard(newCard);
    addCardForm.reset();
    closePopup(popupAddCard);
}

function addCard(card) {
    container.prepend(card);
}

addCardForm.addEventListener("submit", addCardSubmit);
