const API_KEY = '2b113a2d612cd967e14d1f2a5a1331e0';

const getWeatherData = (location) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${location}&appid=${API_KEY}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data))
    
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    // contidion.innerText = data.weather[0].main;

    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById =(id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}


document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const location = searchField.value;
    // set city in display
    document.getElementById('city').innerText = location;
    getWeatherData(location);
})

getWeatherData('Dhaka')