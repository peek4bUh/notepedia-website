const toc = document.getElementById('toc');
const rightPane = document.getElementById('right-pane');


toc.addEventListener('click', () => {
	rightPane.classList.toggle('right-pane--active');
});


rightPane.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		rightPane.classList.toggle('right-pane--active');
	})
})


document.addEventListener('DOMContentLoaded', () => {
	const toc = document.querySelector('.right-pane .toc');
	if (!toc) return;

	// 1) Grab all TOC links and their target elements
	const tocLinks = Array.from(toc.querySelectorAll('a[href^="#"]'));
	const sections = tocLinks
	.map(link => document.getElementById(link.getAttribute('href').slice(1)))
	.filter(el => el !== null);

	if (sections.length === 0) return;

	// 3) On scroll, find the section closest to the top
	function onScroll() {
		const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
		let currentId = sections[0].id;

		for (let i = 0; i < sections.length; i++) {
			const sectionTop = sections[i].offsetTop;
			// Trigger a bit earlier: 50px above the section
			if (scrollPos >= sectionTop - 50) {
				currentId = sections[i].id;
			}
		}

		// 4) Apply the active class
		tocLinks.forEach(link => {
			if (link.getAttribute('href') === `#${currentId}`) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		});
	}

	// 5) Listen for scrolls (and run once to initialize)
	window.addEventListener('scroll', onScroll);
	onScroll();
});

