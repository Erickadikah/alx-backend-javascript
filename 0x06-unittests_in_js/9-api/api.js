const express = require('express');
const app = express();
const port = 7865;
const hostname = 'localhost'
//route for getting the root of the API
app.get('/', function (req, res) {
    res.send('Welcome to the payment system');
});

//route for getting the cart of the API
app.get('/cart/:id(\\d+)', function (req, res) {
    const id = req.params.id;
    res.send(`Payment methods for cart ${req.params.id}`);
    //validation if :id is a number
    if (!/^\d+$/.test(req.params.id)) {
        res.status(404).end();
    }
});

//Error handling
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Internal Server Error');
});

app.listen(port, hostname, () => {
  console.log(`API available on ${hostname} ${port}`);
});

module.exports = app;