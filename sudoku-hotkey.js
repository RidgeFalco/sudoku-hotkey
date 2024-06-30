document.querySelector("body").addEventListener("keypress", function(e) {
	let boolVal = (e.keyCode >= 97 && e.keyCode <= 122);
	if (boolVal) {
		let cEvent = new CustomEvent('mousedown');
		document.querySelector(".game-controls-pencil").dispatchEvent(cEvent);
	}
});
