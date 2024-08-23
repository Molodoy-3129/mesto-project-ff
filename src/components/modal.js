


function openPopup(popup) {
  popup.classList.add("popup_is-opened");

  document.addEventListener("keydown", closeEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", closeEscape);
}

function closeEscape(evt) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (evt.key === "Escape") closePopup(openedPopup);
}

function closeOverlay(evt) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (evt.target.matches(".popup_is-opened, .popup__close"))
    closePopup(openedPopup);
}

export { openPopup, closePopup, closeOverlay };
