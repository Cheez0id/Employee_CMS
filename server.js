const express = require('express');
const sequelize = require('./config/connection');

const routes = require('./routes');
const path = require ('path');

const app = express();

const PORT = process.env.PORT || 3001;