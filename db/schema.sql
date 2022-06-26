DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL (10.3) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
  
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT ,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  INDEX role_ind (role_id),
  
  manager_id INT NULL,
  PRIMARY KEY (id)

);
