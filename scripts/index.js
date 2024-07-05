// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу




const cardList = document.querySelector('.places__list');
const template = document.querySelector('#card-template').content;

function deleteCard(card) {
     card.remove();
}





function createCard(name, link, deleteCard) {
     const cardElement = template.querySelector('.card').cloneNode(true);
     const cardImage = cardElement.querySelector('.card__image');
     cardImage.setAttribute('src', link);
     cardImage.setAttribute('alt', `Картинка места "${name}"`);
     cardElement.querySelector('.card__title').textContent = name;

     const deletButton = cardElement.querySelector('.card__delete-button');
     deletButton.addEventListener('click', function() {
          deleteCard(cardElement);
     })
  
    
     return cardElement;

}

initialCards.forEach((item) => {

     const newCard = createCard(item.name, item.link, deleteCard);
     cardList.append(newCard);
})
