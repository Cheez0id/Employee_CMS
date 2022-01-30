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

const companyTables = ["employees", "roles", "departments"]

//run mysql database query 
// const companyQ = () =>{
//   con_db.query(`SELECT * FROM ${companyTables[0]}, ${companyTables[1]}, ${companyTables[2]}`, function (err, results) {
//   console.table(results);
// });
// }


//for asking the user if they want to continue or quit
ask = ((choice) =>{
  if (choice.continue === "continue"){init()
  }
  else {console.log("use Ctrl+C return to exit!")}
  });


//todo: want to initialize with something like const start = () => {}

//inquirer questions and choices
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

const viewChoice = [
  {
		type: "list",
		name: "view",
		message: "What do you want to view?",
    choices: ["View All Roles", "View All Employees", "View All Departments"],
	}
]

const addChoice = [
  {
		type: "list",
		name: "add",
		message: "What do you want to add?",
    choices: ["Add Role", "Add Employee", "Add Department"],
	}
]

const newEmployee = [
    {
		type: "input",
		name: "firstName",
		message: "First Name?", 
	},
  {
		type: "input",
		name: "lastName",
		message: "Last Name?", 
	},
  {
		type: "list",
		name: "roleId",
		message: "What role?",
    choices: [10, 20, 30, 40],
	},
  {
		type: "list",
		name: "mgr",
		message: "Manager's ID?",
    choices: [52, 98, 27,]
	}
]

const newDept = {
		type: "input",
		name: "deptName",
		message: "What is the new Department?"
}

const newRole = [{
  type: "input",
  name: "title",
  message: "What is the new role?"
},
{
  type: "number",
  name: "salary",
  message: `What is the salary? (enter "11.11")`
},
{
  type: "number",
  name: "department",
  message: `What is the department?`
},
]
//MAIN CODE BELOW
const init = () =>{
  inquirer.prompt(firstChoice).then(
    (choice) =>{
      const company = ["Employees", "Roles", "Departments"]
      //TODO: let the ${} be the = the selection from the user
const employeeQ = () =>{
  con_db.query(`SELECT * FROM ${companyTables[0]}`, function (err, results) {
  console.table(results);
});
};
const roleQ = () =>{
  con_db.query(`SELECT * FROM ${companyTables[1]}`, function (err, results) {
  console.table(results);
});
};
const deptQ = () =>{
  con_db.query(`SELECT * FROM ${companyTables[2]}`, function (err, results) {
  console.table(results);
});
};

const addEmployee = () => {(inquirer.prompt(newEmployee).then(answers =>
    {con_db.query((`INSERT INTO employees ( first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", ${answers.roleId}, ${answers.mgr})`), function (err, results) {
  console.table(results); (inquirer.prompt(continue_app)).then(ask);
  })}
  ))}

  const addDept = () => {(inquirer.prompt(newDept).then(answers =>
    {con_db.query((`INSERT INTO departments (dept_name) VALUES ("${answers.deptName}")`), function (err, results) {
      (inquirer.prompt(continue_app)).then(ask);
  })}
  ))}

  const addRole = () => {(inquirer.prompt(newRole).then(answers =>
    {con_db.query((`INSERT INTO roles (title, salary) VALUES ("${answers.title}", "${answers.department}", "${answers.salary}")`), function (err, results) {
      (inquirer.prompt(continue_app)).then(ask);
  })}
  ))}

    //for Viewing data
      if (choice.first === "View"){
        inquirer.prompt(viewChoice).then((choice) =>{
        if (choice.view === `View All ${company[0]}`){       
            employeeQ();
                  (inquirer.prompt(continue_app)).then(ask)}
        else if (choice.view === `View All ${company[1]}`){       
            roleQ();
                  (inquirer.prompt(continue_app)).then(ask)} 
        else if (choice.view === `View All ${company[2]}`){       
            deptQ();
                  (inquirer.prompt(continue_app)).then(ask)}                   
      })}
  //for Adding data
      else if (choice.first === "Add"){
          inquirer.prompt(addChoice).then((response) =>{
        if (response.add === "Add Employee"){
              addEmployee();
            }
        if (response.add === "Add Department"){
              addDept();
            }
        if (response.add === "Add Role"){
              addRole();
            }    
          }
          )}
})}
    

init();




//----____----IGNORE BELOW----____----

//from the CMS_Employess the mysql route for schema and seeds is source ./db/schema and source  