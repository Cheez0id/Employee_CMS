const inquirer = require("inquirer");
const fs = require("fs");
const console_t = require("console.table");

//from the CMS_Employess the mysql route for schema and seeds is source ./db/schema and source  

const firstChoice = [
  {
		type: "list",
		name: "view",
		message: "Hello, what would you like to do?",
    choices: ["View All Roles", "View All Employees", "View all Departments"],
	}
]
const init = () =>{
  inquirer.prompt(firstChoice).then((choice) =>{
      if(choice.view === undefined){
      console.log("lol, it's undefined!")
    }
      else if (choice.view === "View All Roles"){
        console.log("lol, that is not written yet!")
      }
  })
}

init();
