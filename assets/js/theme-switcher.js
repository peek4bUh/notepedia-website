const setDarkMode = (active = false) => {
	const root = document.querySelector(":root");

	if (active) {
		root.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		root.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
	}
};

const toggleDarkMode = () => {
	const root = document.querySelector(":root");
	const theme = root.getAttribute("data-theme");
	const newTheme = theme === "light" ? "dark" : "light";
	setDarkMode(newTheme === "dark");
};

const initDarkMode = () => {
	const query = window.matchMedia("(prefers-color-scheme: dark)");
	const themePreference = localStorage.getItem("theme");
	const toggleText = document.getElementById("test");

	let active = query.matches;
	if (themePreference === "dark") {
		active = true;
		toggleText.textContent="Dark";
	}
	if (themePreference === "light") {
		active = false;
		toggleText.textContent="Light";
	}

	setDarkMode(active);

	query.addListener(e => setDarkMode(e.matches));

	const themeBtn = document.getElementById("themeBtn");
	themeBtn.addEventListener("click", toggleDarkMode);
};


