INSERT INTO department (name)
VALUES
    ('Customer Service'),
    ('Human Resources'),
    ('Information Technology'),
    ('Security'),
    ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES
    ('IT-Systems-Architect', 75000.00, '3'),
    ('Receptionist', 46000.00, '1'),
    ('Security-Guard', 55000.00, '4'),
    ('Accountant', 64000.00, '5'),
    ('HR-Associate', 46000.00, '2'),
    ('IT-Manager', 80000.00, '3'),
    ('Head-Receptionist', 51000.00, '1'),
    ('Head-Of-Security', 59000.00, '4'),
    ('Lead-Accountant', 68000.00, '5'),
    ('HR-Manager', 54000.00, '2');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jim', 'Evans', '7', NULL),
    ('Alexia', 'Turner', '8', NULL),
    ('Mark', 'Lamb', '9', NULL),
    ('Zak', 'Alexander', '4', '3'),
    ('Sally', 'Gates', '2', NULL),
    ('Penelope', 'Smith', '5', NULL),
    ('Mike', 'Burns', '3', '2'),    
    ('Demi', 'Ford', '2', '1'),
    ('Claudia', 'Wang', '3', '2'),
    ('Brendan', 'Peters', '1', NULL);
    