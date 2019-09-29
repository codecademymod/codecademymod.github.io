const clocks = document.getElementsByClassName("clock");

function updateClocks() {
    for (let clock of clocks) {
        let timezone = clock.dataset.timezone;
        let time = new Date().toLocaleTimeString("en-GB", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: timezone
        });
        clock.textContent = time;
    }
}

setInterval(updateClocks, 1000);
updateClocks();
