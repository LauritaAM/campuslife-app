const apiKey = "demo"; 
const city = "The city";  

async function loadWeather() {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=42.049&longitude=-92.908&current_weather=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;

        document.getElementById("weather-container").innerHTML = `
            <h3>Today's Weather</h3>
            <p><strong>Temperature:</strong> ${temp}°F</p>
            <p><strong>Wind Speed:</strong> ${wind} mph</p>
        `;
    } catch (error) {
        document.getElementById("weather-container").innerHTML =
            "<p>Weather information unavailable.</p>";
    }
}

loadWeather();


const todaysActivities = [
    "Gym: Open 6am–10pm",
    "Library Study Night: 7pm–10pm",
    "Free Pizza in Student Union at 6pm",
    "Art Club Meeting at 5pm",
    "Intramural Basketball at 8pm"
];

function loadActivities() {
    const container = document.getElementById("activities-container");

    let html = "<h3>Today's Activities</h3><ul>";

    todaysActivities.forEach(item => {
        html += `<li>${item}</li>`;
    });

    html += "</ul>";

    container.innerHTML = html;
}

loadActivities();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
