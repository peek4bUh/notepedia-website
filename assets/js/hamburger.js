const hamburger = document.getElementById('hamburger');
const leftPane = document.getElementById('left-pane');


hamburger.addEventListener('click', () => {
	if (rightPane.classList.contains('right-pane--active')) {
		rightPane.classList.remove('right-pane--active');
	}

	leftPane.classList.toggle('left-pane--active');
});
