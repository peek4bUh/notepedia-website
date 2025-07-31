document.getElementById('hamburger').addEventListener('click', function() {
	const leftSidebar = document.getElementById('left-sidebar');
	const pageNote = document.getElementById('page-note');
	const hamburger = this;

	leftSidebar.classList.toggle('navigation--active');
	pageNote.classList.toggle('page-note--no-scroll');
	hamburger.classList.toggle('active');
});
