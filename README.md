# 12 Employee Tracker SQL Project

This Employee Tracker SQL project has many practical implementations in the workplace. Companies frequently have to create and update interfaces that allow managers and employees to easily view and interact with the information stored in the databases. **CMS Content Management Systems**. This application is controlled from the command-line. Users can manage company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

<img width="1682" alt="12 Employee Tracker Screenshot-1" src="https://user-images.githubusercontent.com/98120553/176238993-418f6c51-2e57-41b7-8497-967d22df3cc0.png">


```md
Our company is looking to build a database of emoployees that includes their contact information.</br>
I would like to manage the information related to the departments, roles, and employees.

```
<img width="847" alt="12-Employee-Tracker-Screenshot-5" src="https://user-images.githubusercontent.com/98120553/176239129-b5031638-eac6-4e08-8eea-f9df20214701.png">
<img width="878" alt="12-Employee-Tracker-Screenshot-4" src="https://user-images.githubusercontent.com/98120553/176239095-fb18fb6d-882f-478a-a3e4-8f2fe7d1a275.png">

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

The following video shows an example of the application being used from the command line:</br>
https://user-images.githubusercontent.com/98120553/176236105-0122dc82-2429-44c5-b3ec-54862b1fb421.mp4


## Installation

In order to run this application in the back end user will need to install few packages.</br>
[MySQL2 package]</br>
[Inquirer package]</br>
[console.table package]</br>
</br>
To install MySql2 using command in the terminal:
`npm install --save mysql2`</br>
`mysql -u root -p` enter password for the DB</br>

Source seeds and schema data type command in the terminal:</br>
`source db/schema.sql`</br>
`source db/seed.sql`</br>

`npm run seed`</br>
`npm start`</br>



## Packages

[MySQL2 package](https://www.npmjs.com/package/mysql2)</br>
[Inquirer package](https://www.npmjs.com/package/inquirer) </br>
[console.table package](https://www.npmjs.com/package/console.table) </br>
[npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).</br>

Design the database schema as shown in the following image:</br>

Database schema includes tables labeled “employee,” role,” and “department."</br>


Schema Tables:</br>


<img width="1254" alt="12 Employee Tracker Screenshot-2" src="https://user-images.githubusercontent.com/98120553/176239055-599cda42-6ff0-4bc8-a6b2-55a10f72b92a.png">

`department`,`id`,`name`,`role`,`id`,`title`,`salary`,`department_id`,`employee`,`id`,`first_name`,`last_name`,`role_id`,`manager_id`</br>

## Source
Google Search</br>
Screencastify

