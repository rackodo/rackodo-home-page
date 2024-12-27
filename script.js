const trailer = document.getElementById("trailer");
const hero = document.getElementById("hero");

// Move the trailer element based on mouse movement
window.onmousemove = e => {
	const x = e.clientX - trailer.offsetWidth / 2;
	const y = e.clientY - trailer.offsetHeight / 2;

	trailer.animate({
		top: `${y}px`,
		left: `${x}px`
	}, {
		duration: 1000,
		fill: "forwards"
	});
};

// Function to add hover effect to elements
const addHoverEffect = (element) => {
	element.addEventListener('mouseover', () => trailer.classList.add('hovered'));
	element.addEventListener('mouseout', () => trailer.classList.remove('hovered'));
};

// Add hover effect to all 'a' and 'button' elements
document.querySelectorAll('a, button').forEach(addHoverEffect);

const readMore = document.getElementById("readMore");
const statsSection = document.getElementById("statsSection");

// Show or hide the "Read More" button based on scroll position
window.addEventListener("scroll", () => {
	readMore.style.display = window.scrollY > 100 ? "none" : "block";
});

// Smooth scroll to the stats section when "Read More" button is clicked
readMore.addEventListener("click", () => {
	statsSection.scrollIntoView({ behavior: "smooth" });
});