//import inquirer and mysql
const connection = require('./config/connection');
const inquirer = require("inquirer");
const mysql = require('mysql2');

//login data hidden via .env
var con_db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_MARY,
  password: process.env.DB_PW,
  database: process.env.DB_SRC,
});

//connecting to mysql
con_db.connect((err) => {
  if (err){
    throw err;
  }
  console.log('mysql is connected!')
})

//run mysql database query 
const employeeQ = () =>{
  con_db.query('SELECT * FROM employees', function (err, results) {
  console.table(results);
});
}

//for debugging
const hello = () => {console.log("work in progress!")}


//todo: want to initialize with something like const start = () => {}


const firstChoice = [
  {
		type: "list",
		name: "first",
		message: "Hello, what would you like to do?",
    choices: ["View", "Add", "Update"],
	}
]
//todo: thinking about adding a hook to make everything lowercase, so the person can enter in 
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
      else if (choice.first === "View" || "Add" || "Update"){
        inquirer.prompt(viewChoice).then (employeeQ        
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

init();


//----____----IGNORE BELOW----____----

//from the CMS_Employess the mysql route for schema and seeds is source ./db/schema and source  