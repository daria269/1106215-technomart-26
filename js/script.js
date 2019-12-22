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
let sliderField =document.querySelector('.slider-field');
let leftButton = document.querySelector('.slide-left');
let left = 0;
let right= 0;
let rightButton = document.querySelector('.slide-right');

leftButton.onclick = moveLeft;

function moveLeft() {
  left = left - 620;
  if (left < -620) {
    left = 0;
  }
  sliderField.style.left = left + 'px';
}

// rightButton.onclick = moveRight;
//
// function moveRight() {
//   right = right + 620;
//   if (right > 620) {
//     right = 0;
//   }
//   sliderField.style.right = right + 'px';
// }
