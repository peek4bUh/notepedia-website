const hamburger = document.getElementById('hamburger');
const leftSidebar = document.getElementById('left-sidebar');


hamburger.addEventListener('click', () => {
	if (rightSidebar.classList.contains('container__sidebar-right--active')) {
		rightSidebar.classList.remove('container__sidebar-right--active');
	}

	leftSidebar.classList.toggle('container__sidebar-left--active');
});
