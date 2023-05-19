function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            // const data = 'Successfull response from the API'
            resolve({ data: 'Successfull response from the API'});
        // do nothing for the reject
        //     reject(Error('Cannot process payment'));
        }
        });
    };

module.exports = getPaymentTokenFromAPI;