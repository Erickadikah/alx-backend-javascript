function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {

            resolve('Rainy')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'sunny':
                    resolve('☀️')
                    break
                case 'Cloudy':
                    resolve('☁️')
                    break
                case 'Rainy':
                    resolve('☔️')
                    break
                default:
                    reject('No weather icon found')
            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`sucess ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

function onfinally() {
    console.log('Finnaly done !')
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    .catch(onError)
    .finally(onfinally)