function fetchData() {
    return new Promise(function(resolve, reject){
        fetch('https://api.weather.gov/gridpoints/MLB/25,67/forecast')
            .then(response => response.json())
            .then(data => resolve(data.properties.periods[1].shortForecast))

    })
}

function displayData(weather) {
    console.log(weather)
}

fetchData()
    .then(displayData)