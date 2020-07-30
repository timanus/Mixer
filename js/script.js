window.addEventListener('DOMContentLoaded', function() {
	let item = document.querySelectorAll('.wrapper__item'),
			numbers = new Array();
	
	// item[7].style.backgroundImage = 'url("img/1.jpg")';

	for (let i = 0; i < 9; i++) {
		numbers[i] = '';
	}
	item.forEach(function(prop) {
		let i;
		do {
			i = Math.floor(Math.random() * 9 + 1);
		} while (numbers[i-1] === null);
		numbers[i-1] = null;
		console.log(numbers);
		let path = `img/${i}.jpg`;
		prop.style.backgroundImage = `url(${path})`;
	});
});