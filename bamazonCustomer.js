let mysql = require("mysql");
let inquirer = require("inquirer");
let colors = require("colors");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    password: "King2012",
    database: "bamazon"
});


function bamProducts() {

    connection.connect(function (error) {
        if (error) throw error;

        console.log(colors.green("---------------\n"));
        console.log(colors.bold.yellow("Welcome To Bamazon!"));
        console.log(colors.green("\n---------------\n"));
        for (var i = 0; i < data.length; i++) {
            console.log(colors.bold.bgCyan("Item ID: " + data[i].item_id + " | " + "Product Name: " + data[i].product_name + " | " + "Department Name: " + data[i].department_name + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock_quantity));
            console.log(colors.green("\n--------------------------"));
        }
        buyProducts();
    });
};

function buyProducts() {
    inquirer.prompt([{
        type: "number",
        name: "id",
        message: "Please enter the product ID you are interested in:"
    },
    {
        type: "number",
        name: "qty",
        message: "How many would you like?"

    }]).then(function (answer) {
        let productId = answer.id;
        let quantity = answer.qty;
        totalProduct(productId, quantity)
    });
};
