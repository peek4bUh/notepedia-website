const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
	const pageNote = document.body;
	const leftSidebar = document.getElementById('left-sidebar');

	pageNote.classList.toggle('page-note--no-scroll');
	leftSidebar.classList.toggle('sidebar--active');
});
