  DROP DATABASE IF EXISTS company_db;
  CREATE DATABASE company_db;

  USE company_db;

CREATE TABLE departments (
    id INT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    department INT,
    salary DECIMAL(4,2),
    FOREIGN KEY (department)
    REFERENCES departments(id),
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles (id),
    PRIMARY KEY (id)
);
