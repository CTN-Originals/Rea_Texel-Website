
let lastKnownScrollPosition = 0;
let ticking = false;
document.addEventListener('scroll', function(e) {
	lastKnownScrollPosition = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function() {
			onPageScroll(lastKnownScrollPosition);
			ticking = false;
		});

		ticking = true;
	}
});

window.addEventListener('resize', function(event) {
	updateScales();
	updateElementPositions();
	if (this.screen.size <= 850) {
		baseElements.scrollbarWidth = 0;
	}
	else {
		baseElements.scrollbarWidth = baseElements.originalScrollbarWidth;
	}
	this.document.documentElement.style.setProperty('--scrollbarWidth', baseElements.scrollbarWidth)
}, true);


function onPageScroll(scrollPos) {
    //do something when user scrolls the page
    updateElementPositions(scrollPos);
}

// dispatchEvent('scroll');
	