function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('404')
        }, 100)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('200')
        }, 100)
    })
}

function onfinally() {
    console.log('Finnaly done !')
}

function onSuccess(data) {
    console.log(`sucess ${data}`)
}

function onError(error) {
    console.log(`ERROR: ${error}`)
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)
    .finally(onfinally)