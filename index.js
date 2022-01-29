const inquirer = require("inquirer");
const fs = require("fs");
const console_t = require("console.table");
const sequelize = require("sequelize");
const { Server } = require("http");

//from the CMS_Employess the mysql route for schema and seeds is source ./db/schema and source  
const hello = () => {console.log("Mary is amazing!")};

console.table(["roles", "employees", "departments"]);

const start = () => {}


// const firstChoice = [
//   {
// 		type: "list",
// 		name: "first",
// 		message: "Hello, what would you like to do?",
//     choices: ["View", "Add", "Update"],
// 	}
// ]
// const viewChoice = [
//   {
// 		type: "list",
// 		name: "view",
// 		message: "What do you want to view?",
//     choices: ["View All Roles", "View All Employees", "View all Departments"],
// 	}
// ]
// const init = () =>{
//   inquirer.prompt(firstChoice).then((choice) =>{
//       if(choice.first === undefined){
//       console.log("lol, it's undefined!")
//     }
//       else if (choice.first === "View"){
//         inquirer.prompt(viewChoice).then (hello        
//   )
//       }
//       else if (choice.first === "Add"){
//         console.log("lol, add is not written yet!")
//       }
//       else if (choice.first === "Update"){
//         console.log("lol, update is not written yet!")
//       }
//   })
// }

// init();
