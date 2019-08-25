let mysql = require("mysql");
let inquirer = require("inquirer");
let chalk = require("chalk");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "King2012!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    bamProducts()
});

function bamProducts() {

    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;
        console.log(chalk.green("-------------------\n"));
        console.log(chalk.bold.yellow("Welcome To Bamazon!"));
        console.log(chalk.green("\n-------------------\n"));
        for (var i = 0; i < data.length; i++) {
            console.log(chalk.bold.cyan("Item ID: " + data[i].item_id + " | " + "Product Name: " + data[i].product_name + " | " + "Department Name: " + data[i].department_name + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock_quantity));
            console.log(chalk.green("\n-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n"));
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

function totalProduct(id, stock) {
    connection.query("SELECT * FROM products WHERE item_id = " + id, function (err, data) {
        if (err) throw err;

        if (stock <= data[0].stock_quantity) {
            let totals = data[0].price * stock;
            console.log(chalk.cyan("Your total for " + stock + ", " + data[0].product_name + " is " + totals + ". Thank you for shopping with us!"));
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + stock + " WHERE item_id = " + id);

        }
        else {
            console.log(chalk.red("Sorry, but we only have " + stock + " " + data[0].product_name + "'s left in stock."));
        }
        doneOrCont();
    });
};
function doneOrCont() {
    inquirer.prompt(
        {
            name: "done",
            message: "Continue Shopping?",
            type: "confirm"
        }
    ).then(function (response) {
        if (response.continue) {
            console.log("\n");
            bamProducts();
        }

        else connection.end();
    });

};

