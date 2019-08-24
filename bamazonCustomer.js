let mysql = require("mysql");
let inquirer = require("inquirer");
let colors = require("colors");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    password: "King2012",
    database: "bamazon"
});

