
let now = new Date();
let day = now.toLocaleString('en-US', { weekday: 'short' });
let month = now.toLocaleString('en-US', { month: 'short' });
let date = now.getDate();
let time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

const curDate = document.getElementById('date');
curDate.innerHTML = day + " | " + month + " " + date + " | " + time;

// api = http://api.openweathermap.org/data/2.5/weather?q=meerut&units=metric&appid=bc7fee6f03cb4ca53abfb383fa32ca02
const api = 'bc7fee6f03cb4ca53abfb383fa32ca02';
let place = "meerut";
let url = 'https:api.openweathermap.org/data/2.5/weather?q=' + place + '&units=metric&appid=' + api;

function start() {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let ApiData = data;
            getWeather(ApiData);
        })
        .catch(function (error) {
            console.log(error);
        });

}


const weatherIcon = document.getElementById('weatherIcon');
let location_ = document.querySelector('.location');
let temp_ = document.querySelector('.temp');
let tempMinMax_ = document.querySelector('.tempMinMax');

function getWeather(ApiData) {
    let data = ApiData;
    let weather = data.weather[0].description;
    let city = data.name;
    let country = data.sys.country;
    let temp = parseInt(data.main.temp);
    let tempMin = parseInt(data.main.temp_min);
    let tempMax = parseInt(data.main.temp_max);

    location_.innerHTML = "<i class='fas fa-street-view'></i>" + city + ", " + country;
    temp_.innerHTML = temp + "°C";
    tempMinMax_.innerHTML = tempMin + "°C" + " | " + tempMax + "°C";

    // if( weather=='moderate rain')
    //     weatherIcon.setAttribute('src','icons/moderate.png');
    //     else if(weather=='haze')
    //     weatherIcon.setAttribute('src','icons/haze.png');
    //     else if(weather=='scattered clouds')
    //     weatherIcon.setAttribute('src','icons/scattered.png');
    //     else if(weather=='light rain')
    //     weatherIcon.setAttribute('src','icons/light.png');
    //     else if(weather=='overcast clouds')
    //     weatherIcon.setAttribute('src','icons/overcast.png');
}

window.onload = start();



// ---------------------------------------------------------------------------------------------------------