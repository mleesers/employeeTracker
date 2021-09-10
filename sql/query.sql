USE company_db;


INSERT INTO departments (department_name) VALUES ("Wiggles");

INSERT INTO roles (title, salary, department_id)
VALUES ('Senior Engineer', 1800, 1);
SELECT employees.id WHERE employee.id = manager_id
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Smith', 5, null);
SELECT * FROM company_db.departments;

SELECT roles.id, roles.title, roles.salary, departments.department_name
FROM roles
INNER JOIN departments ON roles.department_id = departments.id;


SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
FROM roles
INNER JOIN employees ON roles.id = employees.role_id
LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees managers ON employees.manager_id = managers.id;