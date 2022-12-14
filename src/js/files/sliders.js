/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-people', "swiper-great", "swiper-blog")) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-people', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,


			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,

			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
					centeredSlides: true,
				},
				450: {
					slidesPerView: 1.5,
					spaceBetween: 20,
					autoHeight: true,

				},
				600: {
					slidesPerView: 2.2,
					spaceBetween: 20,

				},
				750: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				992: {
					slidesPerView: 3.2,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
		new Swiper('.swiper-great', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,


			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},


			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				type: "progressbar",
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-next',
				nextEl: '.swiper-button-prev',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 0,
					autoHeight: true,
					centeredSlides: true,
				},
				450: {
					slidesPerView: 1.5,
					spaceBetween: 20,
					autoHeight: true

				},


				1268: {
					slidesPerView: 2,
					spaceBetween: 150,
					autoHeight: true

				},
			},

			// События
			on: {

			}
		});
		new Swiper('.swiper-blog', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,


			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},


			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				type: "progressbar",
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-next',
				nextEl: '.swiper-button-prev',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 10,
					autoHeight: true,
					centeredSlides: true,
				},
				500: {
					slidesPerView: 1.5,
					spaceBetween: 20,

				},
				1268: {
					slidesPerView: 2,
					spaceBetween: 30,
					autoHeight: true,
				},
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});