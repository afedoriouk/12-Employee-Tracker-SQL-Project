# 12 Employee Tracker SQL Project

This Employee Tracker SQL project has many practical implementations in the workplace. Companies frequently have to create and update interfaces that allow managers and employees to easily view and interact with information stored in databases. **CMS Content Management Systems (CMS)**. This application is controlled from the command-line. Users can manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

```md
Our company is looking to build a database of emoployees that includes their contact information.
I would like to manage the information related to the departments, roles, and employees.

```

## NPM RUN

```md
Command-line application that accepts user input:
Start the application
Options: 
view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
View all departments
View all roles
View all employees
Add a role
Add an employee
```

## Demonstration

The following video shows an example of the application being used from the command line:
https://user-images.githubusercontent.com/98120553/176236105-0122dc82-2429-44c5-b3ec-54862b1fb421.mp4


## Installation

In order to run this application in the back end user will need to install few packages.
[MySQL2 package]
[Inquirer package]
[console.table package]

To install MySql2 using command in the terminal:
`npm install --save mysql2`
`mysql -u root -p` enter password for the DB

Source seeds and schema data type command in the terminal:
`source db/schema.sql`
`source db/seed.sql`

`npm run seed`
`npm start`



## Packages

[MySQL2 package](https://www.npmjs.com/package/mysql2)
[Inquirer package](https://www.npmjs.com/package/inquirer) 
[console.table package](https://www.npmjs.com/package/console.table) 
[npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”]

Schema Tables:

* `department`
  * `id`: `INT PRIMARY KEY`
  * `name`: `VARCHAR(30)` to hold department name
* `role`
  * `id`: `INT PRIMARY KEY`
  * `title`: `VARCHAR(30)` to hold role title
  * `salary`: `DECIMAL` to hold role salary
  * `department_id`: `INT` to hold reference to department role belongs to
* `employee`
  * `id`: `INT PRIMARY KEY`
  * `first_name`: `VARCHAR(30)` to hold employee first name
  * `last_name`: `VARCHAR(30)` to hold employee last name
  * `role_id`: `INT` to hold reference to employee role
  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)


## Source
Google Search</br>
Screencastify

