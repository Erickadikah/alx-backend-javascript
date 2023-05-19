function getPaymentTokenFromAPI(success) {
    return new Promise((resolve) => {
        if (success) {
            // const data = 'Successfull response from the API'
            resolve({ data: 'Successful response from the API'});
        }
        });
    };

module.exports = getPaymentTokenFromAPI;