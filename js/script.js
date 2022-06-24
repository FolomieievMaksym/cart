"use strict";
// const burger = document.querySelector('.burger');
// burger.addEventListener('click', () => {
// 	burger.classList.toggle('active')
// })
const burger = document.querySelectorAll('.burger');

burger.forEach(el => {
	el.addEventListener('click', () => {
		el.classList.toggle('active')
	})
})


const swiper = new Swiper('.swiper', {
	loop: true,
	initialSlide: 1,
	centeredSlides: true,
	slideToClickedSlide: true,
	slidesPerView: 1,
	breakpoints: {
		992: {
			slidesPerView: 3,
			spaceBetween: 150,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 180,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 220,
		},
		1770: {
			slidesPerView: 3,
			spaceBetween: 250,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnIteraction: false,
	}
})
