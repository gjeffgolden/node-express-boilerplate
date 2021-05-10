//imports
const express = require('express');
const cors = require('cors');
const { response } = require('express');

//config
const app = express();
const PORT = 8080;
app.use(cors());

//renders on CLI
app.listen(PORT, function() {
    console.log(`The server is running on PORT ${PORT}.`)
})

//renders on localhost
app.get('/', (request, response) => {
    response.send('Connected.')
})