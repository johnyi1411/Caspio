const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 80;

app.use(morgan('tiny'));
app.use(express.static('public'));

app.listen(port, () => console.log('listening to port', port));
