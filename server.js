const mysql = require("mysql")
const inquirer = require("inquirer")
const express = require('express')
const route = express()
const table = require('console.table')

const PORT = process.env.PORT || 8080
route.use(express.static('public'))
route.use(express.urlencoded({ extended: true }));
route.use(express.json());

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

route.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

