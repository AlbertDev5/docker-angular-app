const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hu there');
});

app.listen(8282, () => {
    console.log('listening on port 8282');
})