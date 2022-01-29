INSERT INTO departments (id, dept_name)
VALUES (01, "customer service"),
       (02, "production"),
       (03, "sales"),
       (04, "quality");

INSERT INTO roles (id, title, department, salary)
VALUES (010, "customer rep", 01, 14.00),
       (020, "processor", 02, 08.00),
       (030, "sales rep", 03, 10.00 ),
       (040, "qa engineer", 04, 09.00);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Brad", "Majors", 010, 52),
       (002, "Janet", "Weiss", 010, 52),
       (003, "Frank", "Furter", 030, 98 ),
       (004, "Rocky", "Horror", 040, 27);