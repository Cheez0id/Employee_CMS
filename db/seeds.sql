INSERT INTO departments (id, dept_name)
VALUES (1, "customer service"),
       (2, "production"),
       (3, "sales"),
       (4, "quality");

INSERT INTO roles (id, title, department, salary)
VALUES (10, "customer rep", 01, 14.00),
       (20, "processor", 02, 08.00),
       (30, "sales rep", 03, 10.00 ),
       (40, "qa engineer", 04, 09.00);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Brad", "Majors", 010, 52),
       (2, "Janet", "Weiss", 010, 52),
       (3, "Frank", "Furter", 030, 98 ),
       (4, "Rocky", "Horror", 040, 27);