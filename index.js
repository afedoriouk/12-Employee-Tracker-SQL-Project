const express = require("express");
const router = express.Router();

// const apiRoutes = require('./api');
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
const db = require("./db");
const { query } = require("./db/connection");

// init();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "alexander123",
  database: "employeesDB",
});

//connect to mysql

connection.connect(function (err) {
  if (err) return err;
  //establish connection
  console.log("Running");

  firstPrompt();
});
// function prompts the user for action

function firstPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
          "View Employees",
          "View Employee By Department",
          "Add Employee",
          "Add Role",
          "Remove Role",
          "View All Departments",
        ],
      },
    ])
    .then(function ({ task }) {
      switch (task) {
        case "View Employees":
          viewEmployee();
          break;
        case "View Employee By Department":
          viewEmployeeByDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addNewRole();
          break;
        case "Remove Role":
          removeRole();
          break;
        case "View All Departments":viewAllDepartments();
          break;
        default:
          quit();
      }
    });
}

// View all employees /Read all / Select * From
function viewEmployee() {
  console.log("Viewing Employees\n");

  const query = 
"SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;";
  connection.query(query, function (err, res) {
    if (err) return err;

    console.table(res);
    console.log("Employees viewed\n");

    firstPrompt();
  });
  //View Employees by department
  //Make Department Array

  //user choose department list
}
function viewEmployeeByDepartment() {
  console.log("Viewing employees by department\n");
  const query = "SELECT id, first_name, last_name FROM employee WHERE id != ?";
  // "SELECT d.id, d.name, r.salary AS budget FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON d.id = r.department_id GROUP BY d.id, d.name";

  connection.query(query, function (err, res) {
    if (err) return err;

    promptDepartment(departmentChoices);
    const departmentChoices = res.map((data) => ({
      value: data.id,
      name: data.name,
    }));

    console.table(res);
    console.log("Department view\n");
   
  });
}
function promptDepartment(departmentChoices) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "departmentId",
        message: "Which department would you like to choose?",
        choices: departmentChoices
      },
    ])
    .then(function (answer) {
      console.log("answers", answer.departmentId);

      const query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
FROM employee e
JOIN role r
ON e.role_id = r.id
JOIN department d
ON d.id = r.department_id
WHERE d.id = ?`;
      connection.query(query, answer.departmentId, function (err, res) {
        if (err) return err;

        console.table("response", res);
        console.log((res.affectedRows = "Employees are viewed\n"));

        firstPrompt();
      });
    });
}
function viewAllDepartments() {
  const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;";

  connection.query(query, function (err, res) {
    if (err) return err;
    console.table(res);
    console.log((res.affectedRows = "View All Departments"));

    firstPrompt();
  });
}
//Add employee and Make employee Array
function addEmployee() {
  console.log("Adding Empoyee");
  const query = `SELECT r.id, r.title, r.salary FROM role r`;
  connection.query(query, function (err, res) {
    if (err) return err;
    const roleChoices = res.map(({ id, title, salary }) => ({
      value: id,
      title: `${title}`,
      salary: `${salary}`,
    }));
    console.table(res);
    console.log("RoleToAdd");
    promptInsert(roleChoices);
  });
}
function addNewRole() {
  const query = `SELECT d.id, d.name, r.salary AS budget
FROM employee e
JOIN role r
ON e. role_id = r.r.id
JOIN department d
ON d.id = r.department_id
GROUP BY d.id, d.name`;

  connection.query(query, function (err, res) {
    if (err) return err;

    //call back function
    const departmentChoices = res.map(({ id, name }) => ({
      value: id,
      name: `${id} ${name} `,
    }));
    console.table(res);
    console.log("Dapartment Array");
    promptAddRole(departmentChoices);
  });
}
function promptInsert(roleChoices) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Provide First Name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Provide Last Name",
      },
      {
        type: "list",
        name: "roleId",
        message: "Employees Role",
        choices: roleChoices,
      },
    ])
    .then(function (answer) {
      console.log(answer);
      var query = "INSERT INTO employee SET ?", employee
      //populate data into DB with new Employee role

      connection.query(
        query,
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        function (err, res) {
          // console.log(res.insertedRows + "Inserted Successfuly\n");
          firstPrompt();
        }
      );
    });
}
function promptEmployeeRole(employeeChoices, roleChoices) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which Employee to Assign the Role? ",
        choices: employeeChoices,
      },
      {
        type: "list",
        name: "roleId",
        message: "Which Role to Update? ",
        choices: roleChoices,
      },
    ])
    .then(function (answer) {
      var query = `UPDATE employee INFO role_id=? WHERE id =?`;
      //after prompt updte employee info
      connection.query(
        query,
        [answer.roleId, answer.employeeId],

        function (err, res) {
          if (err) return err;
          console.table(res);
          console.log((res.affectedRows = "Updated Successfully"));

          firstPrompt();
        }
      );
    });
}
function updateEmployeeRole() {
  employeeArray();
}
function employeeArray() {
  console.log("Updating Employee");
  const query = `SELECT e.id, 
  e.first_name, 
  e.last_name, r.title, d.name AS department, r.salary, 
  CONTACT(m.firt_name, '', m.last_name)AS manager FROM employee e
  JOIN role r ON e.role_id = r.id
  JOIN department d ON d.id = r.department_id
  JOIN employee m ON m.id = e.manaher_id`;
  connection.query(query, function (err, res) {
    if (err) return err;
    const employeeChoices = res.map(({ id, first_name, last_name }) => ({
      value: id,
      name: `${first_name} ${last_name}`,
    }));
    console.table(res);
    console.log("Update employeeArray");
    {
      console.log("Updating role");
      const query = `SELECT r.id, r.title, r.salary FROM role r`;
      let roleChoices;

      connection.query(query, function (err, res) {
        if (err) return err;
        roleChoices = res.map(({ id, title, salary }) => ({
          value: id,
          title: `${title}`,
          salary: `${salary}`,
        }));
        console.table(res);
        console.log("Update roleArray\n");
        promptEmployeeRole(employeeChoices.roleChoices);
      });
    }
   
    //Add Role Create Insert INTO


  });
}
function promptAddRole(departmentChoices) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "Role Title",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Role Salary",
      },

      {
        type: "list",
        name: "departmentId",
        message: "Department?",
        choices: departmentChoices,
      },
    ])
    .then(function (answer) {
      const query = `INSERT INTO ROLE (title, salary, department_id) VALUE (?)`;
      connection.query(
        query,
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.departmentId,
        },
        function (err, res) {
          if (err) return err;
          console.table(res);
          console.log("Role Updated");
          firstPrompt();
        }
      );
    });
}
// console.log("Test Index File");
function promptDelete(deleteEmployeeChoices) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee would you like to remove?",
        choices: deleteEmployeeChoices,
      },
    ])
    .then(function (answer) {
      var query = `DELETE from employee WHERE ?`;
      //after prompt remove employee info
      connection.query(
        query,
        { id: answer.employeeId },
        function (err, res) {
          if (err) return err;
          console.table(res);
          console.log((res.affectedRows = "Deleted\n"));
          firstPrompt();
        }
      );
      //console.log(query.sql);
    });
}
//Remove Employees / Delete, Delete From
//Create an array to remove
function removeEmployees() {
  console.log("Delete an employee");
  const query = `SELECT e.id, e.first_name, e. last_name
  FROM employee e`;
  connection.query(query, function (err, res) {
    if (err) return err;
    const deleteEmployeeChoices = res.map(({ id, first_name, last_name }) => ({
      value: id,
      name: `${id} ${first_name} ${last_name}`,
    }));
    console.table(res);
    console.log("ArrayToDelete\n");

    

    //Update Employee role/ UPDATE

    

    

    // Exit the application
    function quit() {
      console.log("Bye!");
      process.exit();
    }
  }
  
)};
