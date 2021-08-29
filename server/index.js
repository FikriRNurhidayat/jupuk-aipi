const express = require('express');
const { configure } = require('./config/server');
const app = express();

module.exports = configure(app);