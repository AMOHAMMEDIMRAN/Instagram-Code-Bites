const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');
const toggleButton = document.getElementById('toggleFormat');

let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (!is24Hour) {
    ampmElement.style.display = 'inline';
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    ampmElement.textContent = ampm;
  } else {
    ampmElement.style.display = 'none';
  }

  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

function toggleFormat() {
  is24Hour = !is24Hour;
  toggleButton.textContent = is24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
  updateClock();
}

toggleButton.addEventListener('click', toggleFormat);

setInterval(updateClock, 1000);
updateClock();
