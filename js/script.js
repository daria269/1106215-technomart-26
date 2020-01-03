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
let mapMini = document.querySelector('.map-mini');
let mapOpen = document.querySelector('.map-open');

mapOpen.onclick = function() {
  mapMini.style.overflow = 'visible';
};
let closeMap = document.querySelector('.close-map');
closeMap.onclick = function() {
  mapMini.style.overflow = 'hidden';
  console.log('нажата');
};

let modal = document.querySelector('.modal');
let writeBtn = document.querySelector('.long-button');
writeBtn.onclick = function() {
  modal.style.display = 'block';
};

let closeModal = document.querySelector('.close-button');
closeModal.onclick = function() {
  modal.style.display = 'none';
};

/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display ='none';
  };
}
не работает */

let sliderField = document.querySelector('.slider-field');
let leftButton = document.querySelector('.slide-left');
let rightButton = document.querySelector('.slide-right');
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');

let left = 0;
let frame = 620;

leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;

 function moveRight (){
	let element = document.querySelector(".slider-field>div:first-child");
  sliderField.appendChild(element);
}
function moveLeft (){
	let element = document.querySelector(".slider-field>div:last-child"),
  	firstElement = document.querySelector(".slider-field>div:first-child");
	sliderField.insertBefore(element, firstElement);
  element.style.transition = 'all ease 1s';
}
sliderField.style.transition = 'left 0.6s ease';


//
// function moveLeft() {
//   left = left - frame;
//   if (left < -frame) {
//     // left = 0;
//   }
//   sliderField.style.left = left + 'px';
// }
//
// function moveRight() {
//   left = left + frame;
//   if (left > 0) {
//     left = -frame;
//   }
//   sliderField.style.left = left + 'px';
// }
