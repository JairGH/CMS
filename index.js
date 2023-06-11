const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "12345",
    database: "tracker_db",
  },
  console.log("Your are connected!")
);
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "firstQ",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
        ],
      },
    ])
    .then((data) => {
      console.log(data.firstQ);
      if (data.firstQ === "View All Employees") {
        viewEmployees();
      }
      if (data.firstQ === "View All Roles") {
        viewRoles();
      }
      if (data.firstQ === "View All Departments") {
        viewDepartments();
      }
      if (data.firstQ === "Add Employee") {
        // show a new prompt
        inquirer.prompt([
          {
            type: "input",
            name: "firstName",
            message: "Enter new employees first name:",
          },
          {
            type: "input",
            name: "lastName",
            message: "Enter new employees last name:",
          },
          {
            type: "list",
            name: "role",
            message: "Enter new employees role:",
            choices: ["Sales", "Engineering", "Finance", "Legal"],
          },
          {
            type: "input",
            name: "manager",
            message: "Enter new employees manager:",
          },
        ])
        .then((data) => {
          console.log(data)
        })
        // questions first_name, last_name, role and manager
        // grab new data
        // insert the new DATA into the TABLE
      }
      if (data.firstQ === "Update Employee Role") {

      }
      if (data.firstQ === "Add Role") {
      
      }
      if (data.firstQ === "Add Department") {
      
      }
    });
}
function viewEmployees() {
  db.query("Select * FROM employee", (err, results) => {
    console.table(results);
    init();
  });
}
function viewRoles() {
  db.query("Select * FROM role", (err, results) => {
    console.table(results);
    init();
  });
}
function viewDepartments() {
  db.query("Select * FROM department", (err, results) => {
    console.table(results);
    init();
  });
}

function addEmployee() {
  inquirer;
}

init();
