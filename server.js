const express = require('express');
const sequelize = require('./config/connection');


const app = express();

const PORT = process.env.PORT || 3001;

sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});