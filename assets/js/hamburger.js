const hamburger = document.getElementById('hamburger');
const leftSidebar = document.getElementById('left-sidebar');


hamburger.addEventListener('click', () => {
	leftSidebar.classList.toggle('sidebar--active');
});
