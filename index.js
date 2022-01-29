const inquirer = require("inquirer");
const mysql = require('mysql2');
const sequelize = require('./config/connection');

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

//________________________
//from the CMS_Employess the mysql route for schema and seeds is source ./db/schema and source  
const hello = () => {console.log("work in progress!")}



//todo: wanted to initialize with const start = () => {}


const firstChoice = [
  {
		type: "list",
		name: "first",
		message: "Hello, what would you like to do?",
    choices: ["View", "Add", "Update"],
	}
]
const viewChoice = [
  {
		type: "list",
		name: "view",
		message: "What do you want to view?",
    choices: ["View All Roles", "View All Employees", "View all Departments"],
	}
]
const init = () =>{
  inquirer.prompt(firstChoice).then((choice) =>{
      if(choice.first === undefined){
      console.log("lol, it's undefined!")
    }
      else if (choice.first === "View"){
        inquirer.prompt(viewChoice).then (hello        
  )
      }
      else if (choice.first === "Add"){
        console.log("lol, add is not written yet!")
      }
      else if (choice.first === "Update"){
        console.log("lol, update is not written yet!")
      }
  })
}

// init();
