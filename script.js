//your JS code here. If required.

function updateTimer() {
	const timerElement = document.getElementById("timer");
    const currentDate = new Date();
	

	const formattedDate = currentDate.toLocaleString();

	timerElement.textContent =formattedDate;
	
}
	   setInterval(updateTimer,1000);

updateTimer();

