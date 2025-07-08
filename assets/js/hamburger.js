const hamburger = document.getElementById('hamburger');
const leftPane = document.getElementById('left-pane');


hamburger.addEventListener('click', () => {
	leftPane.classList.toggle('left-pane--active');
	toc.classList.toggle('toc-btn--hidden');
});
