// catalog
let btnsBuy = document.querySelectorAll('.buy');
let popupBasket = document.querySelector('.popup-basket');
let btnClose = document.querySelector('.button-modal-close');
let btnBuyContinue = document.querySelector('.basket-button.contune');
let basket = document.querySelector('.basket');
let basketCount = document.querySelector('.basket-count');
let bookmark = document.querySelector('.bookmark');
let bookmarkCount = document.querySelector('.bookmark-count');
let btnsBookmark = document.querySelectorAll('.bookmark-product');
let counterBasket = 0;
let counterBookmark = 0;

for (let btnBuy of btnsBuy) {
  btnBuy.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupBasket.classList.add('show');
    basket.classList.add('background-basket');
    counterBasket++;
    basketCount.textContent = counterBasket;
  });
}

for (let btnBookmark of btnsBookmark) {
  btnBookmark.addEventListener('click', function(evt) {
    evt.preventDefault();
    counterBookmark++;
    bookmarkCount.textContent = counterBookmark;
    bookmark.classList.add('background-bookmark');
  });
}

btnClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove('show');
});

btnBuyContinue.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove('show');
});








