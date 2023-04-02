function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(46)
        }, 1)
            
    })
}

const result = await getData()//await is only valid in async functions and the top level bodies of modules
console.log(result)