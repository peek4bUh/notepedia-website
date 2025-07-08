const toc = document.getElementById('toc');
const rightPane = document.getElementById('right-pane');


toc.addEventListener('click', () => {

	if (leftPane.classList.contains('left-pane--active')) {
		leftPane.classList.remove('left-pane--active');
	}

	rightPane.classList.toggle('right-pane--active');
});
