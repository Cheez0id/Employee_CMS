  DROP DATABASE IF EXISTS company_db;
  CREATE DATABASE company_db;

  USE company_db;

CREATE TABLE departments (
    dept_id INT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (dept_id)
);


CREATE TABLE roles (
    role_id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    department INT,
    salary INT NOT NULL,
    FOREIGN KEY (department)
    REFERENCES departments(dept_id),
    PRIMARY KEY (role_id)
);

CREATE TABLE employees (
    emp_id INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles (role_id),
    PRIMARY KEY (emp_id)
);
