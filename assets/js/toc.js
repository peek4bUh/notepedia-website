const toc = document.getElementById('toc');
const tocBtn = document.getElementById('toc-btn');
const tocBtnCross = document.getElementById('toc-btn-cross');
const rightSidebar = document.getElementById('right-sidebar');


tocBtn.addEventListener('click', () => {
	tocBtn.classList.add('toc-btn--hide');
	rightSidebar.classList.add('sidebar--active');
});

tocBtnCross.addEventListener('click', () => {
	tocBtn.classList.remove('toc-btn--hide');
	rightSidebar.classList.remove('sidebar--active');
});

rightSidebar.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		rightSidebar.classList.toggle('sidebar--active');
		tocBtn.classList.remove('toc-btn--hide');
	})
})

document.addEventListener('DOMContentLoaded', () => {
	if (!toc) return;

	const tocLinks = Array.from(toc.querySelectorAll('a[href^="#"]'));
	const sections = tocLinks
	.map(link => document.getElementById(link.getAttribute('href').slice(1)))
	.filter(el => el !== null);

	if (sections.length === 0) return;

	function onScroll() {
		const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
		let currentId = sections[0].id;

		for (let i = 0; i < sections.length; i++) {
			const sectionTop = sections[i].offsetTop;

			if (scrollPos >= sectionTop - 50) {
				currentId = sections[i].id;
			}
		}

		tocLinks.forEach(link => {
			if (link.getAttribute('href') === `#${currentId}`) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		});
	}

	window.addEventListener('scroll', onScroll);
	onScroll();
});

