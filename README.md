# Employee_CMS

A homework assignment to create a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Link To Video
[![Watch the video](https://avatars.githubusercontent.com/u/93955021?v=4)](https://drive.google.com/file/d/1aYx0xSfzkZUuU-5ad1DndoOaOqhTFsEU/view?usp=sharing)



## TODO:
need to create the inquirer prompts
connect the database to the server.js?

## DONE:
database is created, as well as some seeds

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Pseudocode from Jung
```
1) Start the Github repository
2) Make sure you have a .gitignore set to Node when you create the Github Repository
3) Let's start by creating a package.json and downloading all the libraries you need = (Mysql2, Inquirer, console.table) [If you WANT to add express, go for it];
4) Why not make a db folder and follow the instructions on the readme for the table columns?
    4a) Following the table diagram (database schema), make sure you set up the foreign key and REFERENCES during the table setup. 
    4b) For example, the department ID should connect to the role table's department_id column. 
    4c) MUST SET THIS UP IN THE BEGINNING OR ELSE YOU WILL HAVE TO DROP YOUR TABLE AND REDO IT
5) Let's make a seeds.sql file and make some test data/dummy data. => INSERT INTO
6) query.sql files (that will hold all of your queries) => Use it as a practice ground to write your SQL syntax and then paste it to mysql so you know it works. 
7) We create our server.js file and link all of the parts needed. 
8) When we use the inquirer.prompt(), we could also use the .then() to access the answers from the users. 
    8a) HOW CAN WE grab that answer and put it INTO the database? 
    8b) HINT: It's in the mysql2 documentation. 
    8c) just getting the data, posting the data, updating or deleting the data, they must all first ACCESS the database right? How can we do that? What is the METHOD called?
9) IN THE VIDEO, you'll notice that the choices are selectable, use the CHOICES method with inquirer for that. 
```
## Images from Assignment
Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)
