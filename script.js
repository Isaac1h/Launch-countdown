const targetDate = new Date('2026-05-03T23:59:59').getTime();

function updateCountdown() {
  const distance = targetDate - Date.now();
  const time = [
    Math.floor(distance / (1000 * 60 * 60 * 24)),            // jours
    Math.floor((distance / (1000 * 60 * 60)) % 24),          // heures
    Math.floor((distance / (1000 * 60)) % 60),               // minutes
    Math.floor((distance / 1000) % 60)                       // secondes
  ].map(n => String(Math.max(n, 0)).padStart(2, '0'));

  ['days','hours','minutes','seconds'].forEach((id,i) => {
    document.getElementById(id).textContent = time[i];
  });

  if (distance < 0) clearInterval(countdown);
}

updateCountdown();
const countdown = setInterval(updateCountdown, 1000);
