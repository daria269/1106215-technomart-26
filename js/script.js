var buy = document.querySelector('.buy');
var buypopup = document.querySelector('.modal-cart');
var close =document.querySelector('.close-button');

buy.addEventListener('click', function (evt) {
  evt.preventDefault();
  buypopup.classList.add('modal-cart-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  buypopup.classList.remove('modal-cart-show');
})
