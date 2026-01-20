const mobileMenu = () => {
	const menuOpener = document.querySelector("#mobile-menu-opener");
	const menuCloser = document.querySelector("#mobile-menu-closer");
	const mainNav = document.querySelector("#main-nav");

	// Gerekli elemanlar sayfada bulunamazsa fonksiyonu sonlandır.
	if (!menuOpener || !menuCloser || !mainNav) {
		console.warn("Mobile menu elements not found. Menu script will not run.");
		return;
	}

	const openMenu = () => {
		mainNav.classList.remove("hidden");

		requestAnimationFrame(() => {
			mainNav.classList.remove("opacity-0", "translate-x-5");
		});

		document.body.style.overflow = "hidden";
	};

	const closeMenu = () => {
		mainNav.classList.add("opacity-0", "translate-x-5");

		setTimeout(() => {
			mainNav.classList.add("hidden");
		}, 300);

		document.body.style.overflow = "";
	};

	menuOpener.addEventListener("click", openMenu);
	menuCloser.addEventListener("click", closeMenu);
};

export { mobileMenu }; // export default mobileMenu; olarak da kullanabilirsiniz.
