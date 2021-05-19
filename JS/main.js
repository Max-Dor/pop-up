$(document).ready(function() {
const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  //Управление кнопками//
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const responseSlider = new Swiper('.responses-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.responses-slider__button--next',
    prevEl: '.responses-slider__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  //Управление кнопками//
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

var cottageLink = $('[data-toggle=cottage]');
var closeCottageLink = $(".cottage__close");
cottageLink.on('click', openCottage);
closeCottageLink.on('click', closeCottage);

function openCottage() {
var cottegeOverlay = $(".cottage__overlay");
var cottageMain = $(".cottage__main");
cottegeOverlay.addClass("cottage__overlay--visible");
cottageMain.addClass("cottage__main--visible");
}

function closeCottage(event) {
  event.preventDefault();
  var cottageOverlay = $(".cottage__overlay");
  var cottageMain = $(".modal__main");
  cottageOverlay.removeClass("cottage__overlay--visible");
  cottageMain.removeClass("cottage__main--visible");
}

var saunaLink = $('[data-toggle=sauna]');
var closeSaunaLink = $(".sauna__close");
saunaLink.on('click', openSauna);
closeSaunaLink.on('click', closeSauna);

function openSauna() {
var saunaOverlay = $(".sauna__overlay");
var saunaMain = $(".sauna__main");
saunaOverlay.addClass("sauna__overlay--visible");
saunaMain.addClass("sauna__main--visible");
}

function closeSauna(event) {
  event.preventDefault();
  var saunaOverlay = $(".sauna__overlay");
  var saunaMain = $(".sauna__main");
  saunaOverlay.removeClass("sauna__overlay--visible");
  saunaMain.removeClass("sauna__main--visible");
}

var campLink = $('[data-toggle=camp]');
var closeCampLink = $(".camp__close");
campLink.on('click', openCamp);
closeCampLink.on('click', closeCamp);

function openCamp() {
var campOverlay = $(".camp__overlay");
var campMain = $(".camp__main");
campOverlay.addClass("camp__overlay--visible");
campMain.addClass("camp__main--visible");
}

function closeCamp(event) {
  event.preventDefault();
  var campOverlay = $(".camp__overlay");
  var campMain = $(".camp__main");
  campOverlay.removeClass("camp__overlay--visible");
  campMain.removeClass("camp__main--visible");
}

});