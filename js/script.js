// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log("Campus Life Super App JS loaded");

  // Map page placeholder button
  const loadMapBtn = document.getElementById('loadMapBtn');
  const mapContainer = document.getElementById('mapContainer');

  if (loadMapBtn) {
    loadMapBtn.addEventListener('click', () => {
      const mapDetails = [
        "Main Library - 1st Floor",
        "Science Building - Room 203",
        "Student Center - Food Court & Lounges",
        "Athletics Complex - Gym & Pool"
      ];

      mapContainer.innerHTML = '';
      mapDetails.forEach(detail => {
        const p = document.createElement('p');
        p.textContent = detail;
        mapContainer.appendChild(p);
      });
    });
  }

  // Optional: other page-specific JS
});
