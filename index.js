document.addEventListener("DOMContentLoaded", (e) => {
	let buttons = document.querySelectorAll("span");
	let output = document.getElementById("output");
	let capsLock = document.getElementById("caps-lock");
	let enter = document.getElementById("enter");
	let backspace = document.getElementById("backspace");
	let letters = document.querySelectorAll(".letters_child");
	let caps = true;

	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			output.innerText += e.target.innerText;
		});
	});

	capsLock.addEventListener("click", (e) => {
		caps = !caps;
		letters.forEach((letter) => {
			if (caps) {
				letter.innerText = letter.innerText.toLowerCase();
			} else {
				letter.innerText = letter.innerText.toUpperCase();
			}
		});
	});

	enter.addEventListener("click", (e) => {
		output.innerText += "\n";
	});

	backspace.addEventListener("click", (e) => {
		output.innerText = output.innerText.slice(
			0,
			output.innerText.length - 1
		);
	});
});
