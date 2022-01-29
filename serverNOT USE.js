const express = require('express');
const sequelize = require('./config/connection');
const mysql = require('mysql2');





const app = express();
const PORT = process.env.PORT || 3001;

//!!TODO: MARY, READ ME FIRST HONEY! you need to make your mysql queries log in the console silly; then they can work with inquirer. you don't need anything to go to localhost?!?

var con_db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_MARY,
  password: process.env.DB_PW,
  database: process.env.DB_SRC,
});

con_db.connect((err) => {
  if (err){
    throw err;
  }
  console.log('mysql is connected!')
})

con_db.query('SELECT * FROM employees', function (err, results) {
  console.table(results);
});

//the below will allow you to see the employees table over in localhost:3001/api/employees if you want to.  It was not actually necessary for this project.
app.get('/api/employees', (req, res) => {
  const sql = `SELECT * from employees`;
  con_db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }  
    res.json({
      message: 'success',
      data: rows
    });
     console.log(res);
  });
});




//username/passwords hidden via sequelize using .env 
sequelize.sync({force:false}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


