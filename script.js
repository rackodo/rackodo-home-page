const trailer = document.getElementById("trailer");
const doubleHero = document.querySelector(".doubleHero");

function updateTrailerPosition(e) {
	const x = e.clientX - trailer.offsetWidth / 2,
		y = e.clientY - trailer.offsetHeight / 2;

	const keyframes = {
		top: `${y}px`,
		left: `${x}px`
	}

	trailer.animate(keyframes, {
		duration: 1000,
		fill: "forwards"
	});
}


window.onmousemove = e => updateTrailerPosition(e);

// Add event listeners to all 'a' elements in the document
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        // Apply styles or add a class to #trailer
        trailer.classList.add('hovered');
        doubleHero.classList.add('hovered');
    });
    anchor.addEventListener('mouseout', () => {
        // Remove styles or class from #trailer
        trailer.classList.remove('hovered');
        doubleHero.classList.remove('hovered');
    });
});