const mysql = require("mysql")
const inquirer = require("inquirer")
const express = require('express')
const route = express()
const table = require('console.table')

// const PORT = process.env.PORT || 8080
// route.use(express.static('public'))
// route.use(express.urlencoded({ extended: true }));
// route.use(express.json());

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(employees_db)
});

// route.listen(PORT, () =>
///   console.log(`Server listening on: http://localhost:${PORT}`)
// );

const questArray = [
        "Add an employee?",
        "Add a Department?",
        "Add a Role?",
        "Look up an Employee Record?",
        "Look up a Department?",
        "Look up an Role?",
        "Update Employee Role?",
        "Quit?"
      ]

async function cliPrompt() {

        let buttocks = await inquirer.prompt([ 
      {
          type:"list",
          name: "answer",
          message: "Choose Your Action",
          choices: questArray
       }
      ])
    return buttocks
}


function action(out){
    
      switch (out.answer) {
      case "Add an employee?":
        addEmployee();
        break;

      case "Add a Department?":
        addDepartment();
        break;

      case "Add a Role?":
        addRole();
        break;

      case "Look up an Employee Record?":
        lookEmployee();
        break;

      case "Look up a Department?":
        lookDepartment();
        break;
        
      case "Look up an Role?":
        lookRole();
        break;

      case "Update Employee Role?":
        empRole();
        break;  

      case "Quit?":
        endCLI();
        break;  
      }
    }



function addEmployee(){
console.log("adding employee")
}

function addDepartment(){
console.log("adding department")
}

function addRole(){
console.log("adding role")
} 
  
function lookEmployee(){
console.log("adding employee")
}
    
function lookDepartment(){
console.log("adding department")
}
    
function lookRole(){
console.log("adding role")
}   

function empRole(){
console.log("Upate Employee Role")
}

function endCLI(){
console.log("Program Ended")
}

const init = async () => {
try{
   const out =  await cliPrompt()
   action(out)

  }catch(error) {
    console.log(error)
  }
}

init()