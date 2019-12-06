/* var buypopup = document.querySelector('.modal-cart');
var close =document.querySelector('.close-button');

buy.addEventListener('click', function (evt) {
  evt.preventDefault();
  buypopup.classList.add('modal-cart-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  buypopup.classList.remove('modal-cart-show');
})
*/
let divMap = document.querySelector('.divMap');
let mapMini = document.querySelector('.map-mini');
divMap.onclick = function () {
  mapMini.style.overflow ='visible' ;
};
 let closeMap = document.querySelector('.close-map'); /*  не работает кнопка закрыть */
 closeMap.onclick = function () {
   mapMini.style.overflow ='hidden' ;
   divMap.style.overflow = 'hidden' ;
   console.log('нажата');
 };

let modal = document.querySelector('.modal');
let writeBtn  = document.querySelector('.long-button');
writeBtn.onclick = function () {
  modal.style.display = 'block';

}
