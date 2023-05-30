document.addEventListener("DOMContentLoaded", function() {
	const bird = document.querySelector(".bird");
	const container = document.querySelector("#container");
	const sections = document.querySelectorAll(".section");
	const storyEnd = document.querySelector(".story-end");

	function animateBird() {
		const containerHeight = container.offsetHeight;
		const containerTop = container.getBoundingClientRect().top;

		const scrollProgress = window.pageYOffset / (containerHeight - window.innerHeight);
		const xPos = scrollProgress * (window.innerWidth - bird.width);

		bird.style.transform = `translateX(${xPos}px)`;

		if (xPos >= window.innerWidth - bird.width) {
			storyEnd.style.opacity = 1;
			bird.style.transform = `translateX(0)`;
		} else {
			storyEnd.style.opacity = 0;
		}
	}

	animateBird();

	window.addEventListener("scroll", function() {
		animateBird();
	});

	window.addEventListener("resize", function() {
		animateBird();
	});
});
