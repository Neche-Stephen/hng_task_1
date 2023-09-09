const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const currentUTCTime = new Date().getTime();
currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;

let dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDate = new Date();
let dayOfWeek = currentDate.getDay();
let currentDayOfWeek = daysOfWeek[dayOfWeek];
dayOfWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
