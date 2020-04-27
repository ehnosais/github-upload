let btnsBuy = document.querySelectorAll('.buy');
let popupBasket = document.querySelector('.popup-basket');
let btnsClose = document.querySelectorAll('.button-modal-close');
let btnBuyContinue = document.querySelector('.basket-button.contune');
let basket = document.querySelector('.basket');
let basketCount = document.querySelector('.basket-count');
let bookmark = document.querySelector('.bookmark');
let bookmarkCount = document.querySelector('.bookmark-count');
let btnsBookmark = document.querySelectorAll('.bookmark-product');
let counterBasket = 0;
let counterBookmark = 0;
let btnWriteUs = document.querySelector('.button-company-contacts');
let popupWrireUs = document.querySelector('.modal-write-us');
let miniMapClick = document.querySelector('.company-contacts img');
let modalMap = document.querySelector('.modal-map');
let btnsPromoSlider = document.querySelectorAll('.header-slider-button');
let promoSliders = document.querySelectorAll('.header-sliders');
/*
let btnsMainSlider = document.querySelectorAll('.main-slider-item button');
let mainSliders = document.querySelectorAll('.slider-pack-item');

for (let btnMainSlider of btnsMainSlider) {
  btnMainSlider.addEventListener('click', function(evt) {
  evt.preventDefault();
    for (let mainSlider of mainSliders) {
      mainSlider.classList.              
    }  
  });
}
*/
for (let btnPromoSlider of btnsPromoSlider) {
  btnPromoSlider.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (let promoSlider of promoSliders) {
      promoSlider.classList.toggle('active');
    } 
  });
}

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

for (let btnClose of btnsClose) {
  btnClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupBasket.classList.remove('show');
    popupWrireUs.classList.remove('show')
    modalMap.classList.remove('show');
  });
}

btnBuyContinue.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove('show');
});

btnWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupWrireUs.classList.add('show');
});

miniMapClick.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('show');
})

