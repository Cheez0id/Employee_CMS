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

const company = ["employees", "roles", "departments"]

//run mysql database query 
const companyQ = () =>{
  con_db.query(`SELECT * FROM ${company[0]}, ${company[1]}, ${company[2]}`, function (err, results) {
  console.table(results);
});
}
const erdQ = () =>{
  con_db.query(`SELECT * FROM ${company[1]}`, function (err, results) {
  console.table(results);
});
}

ask = ((choice) =>{
  if (choice.continue === "continue"){init()
  }
  else {console.log("use Ctrl+C return to exit!")}
  });

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

const continue_app = [
  {
		type: "list",
		name: "continue",
		message: "continue or exit?",
    choices: ["continue", "exit"],
	}
]
//todo: thinking about adding a hook to make everything lowercase, so the person can enter in 
const viewChoice = [
  {
		type: "list",
		name: "view",
		message: "What do you want to view?",
    choices: ["View All", "View All Roles", "View All Employees", "View all Departments"],
	}
]

const init = () =>{
  inquirer.prompt(firstChoice).then(
    (choice) =>{
      const company = ["Employees", "Roles", "Departments"]
      if (choice.first === "View" || "Add" || "Update"){
        inquirer.prompt(viewChoice).then((choice) =>{
          if (choice.view === "View All"){
                  companyQ();
                  (inquirer.prompt(continue_app)).then(ask)}
        else if (choice.view === `View All ${company[1]}`){       
            erdQ();
//user restarts app or is prompted to exit
                  (inquirer.prompt(continue_app)).then(ask)}
})}})}
    

//       else if (choice.first === "Add"){
//         console.log("lol, add is not written yet!")
//       }
//       else if (choice.first === "Update"){
//         console.log("lol, update is not written yet!")
//       }
//   }))
// }

init();


//----____----IGNORE BELOW----____----

//from the CMS_Employess the mysql route for schema and seeds is source ./db/schema and source  