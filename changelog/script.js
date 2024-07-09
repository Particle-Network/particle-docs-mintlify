// script.js
console.log("Script loaded");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded and parsed");
  loadMonth(currentYear, currentMonth);
});

function loadMonth(year, month) {
  console.log(`Loading month: ${monthNames[month]} ${year}`);

  const monthName = monthNames[month];
  document.getElementById('month-year').textContent = `${monthName} ${year}`;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let calendarDays = '';
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = (year === today.getFullYear() && month === today.getMonth() && day === today.getDate());
    calendarDays += `<div class="calendar-day ${isToday ? 'current-day' : ''}">${day}</div>`;
  }

  document.querySelector('.calendar-grid').innerHTML = calendarDays;
  console.log("Calendar rendered");

  document.querySelector('.prev-month').addEventListener('click', (event) => {
    event.preventDefault();
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    loadMonth(currentYear, currentMonth);
  });

  document.querySelector('.next-month').addEventListener('click', (event) => {
    event.preventDefault();
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    loadMonth(currentYear, currentMonth);
  });
}
