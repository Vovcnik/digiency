// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


"use strict"





window.addEventListener("load", windowLoad);

function windowLoad() {
	// HTML
	const htmlBlock = document.documentElement;

	// We get a saved topic
	const saveUserTheme = localStorage.getItem('user-theme');

	// Working with system settings
	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});

	// Changing the topic by click
	const themeButton = document.querySelector('.page__theme');
	const resetButton = document.querySelector('.page__reset');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			resetButton.classList.add('active');
			changeTheme(true);
		});
	}
	if (resetButton) {
		resetButton.addEventListener("click", function (e) {
			resetButton.classList.remove('active');
			localStorage.setItem('user-theme', '');
		});
	}

	// The topic class add
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
			resetButton.classList.add('active');
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}
	// Add the topic class
	setThemeClass();

	// The subject change function
	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}


}

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const currentCategory = button.dataset.filter
		// Здесь сработает функция
		filter(currentCategory, cards)
	});
});

function filter(category, items) {
	items.forEach((item) => {
		// проверка на соответствие категории
		const isItemFiltered = !item.classList.contains(category)
		// Заведем переменную для показа всех карточек в категории All
		const isShowAll = category.toLowerCase() === 'all'
		// Если карточка не содержит данную категорию
		if (isItemFiltered && !isShowAll) {
			// Добавлять класс hide
			item.classList.add('hide')
			// В противном случае, удалять класс hide
		} else {
			item.classList.remove('hide')
		}
	})
}

