(function () {
	let isDark = localStorage.getItem('theme') === 'dark';

	function applyTheme() {
		const btn = document.getElementById('theme-toggle');
		if (isDark) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
		if (btn) {
			const lightIcon = btn.querySelector('.light-icon');
			const darkIcon = btn.querySelector('.dark-icon');
			if (lightIcon && darkIcon) {
				lightIcon.style.display = isDark ? 'none' : 'inline';
				darkIcon.style.display = isDark ? 'inline' : 'none';
			}
		}
	}

	window.toggleTheme = function () {
		isDark = !isDark;
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		applyTheme();
	};

	// apply immediately in case DOMContentLoaded already fired
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyTheme);
	} else {
		applyTheme();
	}
})();
