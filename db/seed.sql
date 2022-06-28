use employeesDB;

INSERT INTO department (name)
VALUES ('Sales'),('Engineering'),('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Lead', 100000, 1),
('Lead Engineer', 150000, 2),
('Salesperson', 80000, 1),  
('Software Engineer', 120000, 2), 
('Account Manager', 160000, 3),   
('Accountant', 125000, 3),  
('Legal Team Lead', 250000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Hutsul', 1, NULL),
('Mike', 'Anderko', 2, 1),
('Bob',  'Lorap', 3, NULL),
('Kevin', 'Turek', 4, 3),
('Sam', 'Rotberg', 5, NULL),
('Peter', 'Begen', 6, 5),
('Sarah', 'Pauliner', 7, NULL),
('Tom', 'Roberts', 8, 7);

-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;