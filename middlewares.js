const express = require('express')();

const bodyParser = require('body-parser');
const CORS = require('cors');

express.use(CORS());
express.use(bodyParser.json({ limit: '50mb' }));
express.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
