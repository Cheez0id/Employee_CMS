const express = require('express');
const sequelize = require('./config/connection');
const mysql = require('mysql2');


const app = express();
const PORT = process.env.PORT || 3001;


var con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_MARY,
  password: process.env.DB_PW,
  database: process.env.DB_SRC,
});



//username/passwords hidden via sequelize using .env 
sequelize.sync({force:false}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


