'use strict';

const { resolve } = require('path');
const express = require('express');
const app = express();

app.use(express.static(resolve(__dirname, 'fixture')));
app.listen(8080, () => console.log('http://localhost:8080/'));
