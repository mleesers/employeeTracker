INSERT INTO departments (department_name)
VALUES ("Accounting"),
       ("Sales"),
       ("Information Technology"),
       ("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Accounting Manager", 130000.00, 1),
        ("Accountant", 97500.00, 1),
        ("Assistant Controller", 73125.80, 1),

        ("Sales Manager", 123398.43, 2),
        ("Sales Specialist ", 92548.82, 2),
        ("Systems Engineering Manager", 131040, 3),
        ("Hardware Technician", 117936.50, 3),
        ("Help Desk Analyst ", 85975.34, 3),
        ("Network Administrator", 117936.50, 3),

        ("Human Resources Managers ", 103170.41, 4),
        ("Human Resources Specialists ", 92853.37, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Miller", 1, null),
       ("Ruben", "Stillwell", 2, 1),
       ("Bobby", "Hernandez", 2, 1),
       ("William", "Jones", 3, 1),

       ("Mary", "Schroeder", 4, null),
       ("Carl", "Booth", 5, 5),
       ("Hillary", "Spillers", 5, 5),

       ("Jesus", "Ellis", 6, null),
       ("Jeff", "Corder", 7, 8),
       ("James", "Bahe", 8, 8),
       ("Carol", "Macdonald", 8, 8),
       ("Harry", "Warren", 9, 8),

       ("Alejandro", "Bryner", 10, null),
       ("Martin", "Tucker", 11, 13),
       ("Francisca", "Updike", 11, 13);