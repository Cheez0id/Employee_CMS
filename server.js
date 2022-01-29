const express = require('express');
const sequelize = require('./config/connection');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

//username/passwords hidden via sequelize using .env 
sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


//from the CMS_EMployess the mysql route for schema and seeds is source ./db/schema and source  /