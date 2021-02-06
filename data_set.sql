USE employees_db;

INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Jane','Doe', 2424, 14);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Hans', 'Tarzan', 1155, 22);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Jane', 'Sweet', 1212, 14);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Suzy', 'Sweat', 2424, 14);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Franz', 'Stinkt', 2021, 22);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Stubli', 'Klein', 1175, 12);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Monica', 'Stun', 2021, 22);
INSERT INTO employee (first, last, role_id, manager_id) VALUES ('Jeff', 'Wise', 2424, 12);

INSERT INTO roles (id, title, salary, department_id) VALUES (1155, 'Singer', 20000, 302);
INSERT INTO roles (id, title, salary, department_id) VALUES (2424, 'Designer', 30000, 202);
INSERT INTO roles (id, title, salary, department_id) VALUES (1212, 'Musician', 40000, 302);
INSERT INTO roles (id, title, salary, department_id) VALUES (2021, 'Cleaner', 20000, 402);
INSERT INTO roles (id, title, salary, department_id) VALUES (1212, 'Manager', 20000, 602);

INSERT INTO department (id, dept) VALUES (302, 'Preformers');
INSERT INTO department (id, dept) VALUES (202, 'Planning');
INSERT INTO department (id, dept) VALUES (402, 'Maintenance');
INSERT INTO department (id, dept) VALUES (602, 'Management');