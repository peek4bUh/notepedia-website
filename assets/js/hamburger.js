const hamburger = document.getElementById('hamburger');
const leftSidebar = document.getElementById('left-sidebar');


hamburger.addEventListener('click', () => {
	if (rightSidebar.classList.contains('page-default__sidebar-right--active')) {
		rightSidebar.classList.remove('page-default__sidebar-right--active');
	}

	leftSidebar.classList.toggle('page-default__sidebar-left--active');
});
