import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const initMagazineSlider = () => {
	const MAGAZINEOPTIONS = {
		modules: [Navigation],
		slidesPerView: 1,
		navigation: {
			nextEl: '.magazine-slide-next',
			prevEl: '.magazine-slide-prev',
		},	
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	};
	const swiper = new Swiper("#magazine-slider", MAGAZINEOPTIONS);
};
