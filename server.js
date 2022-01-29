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

con.connect((err) => {
  if (err){
    throw err;
  }
  console.log('mysql is connected?')
})


app.get('/api/company', (req, res) => {
  const sql = `SELECT * from employees`;
  
con.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

//username/passwords hidden via sequelize using .env 
sequelize.sync({force:false}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


