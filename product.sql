DROP DATABASE bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,  
    product_name VARCHAR
    (100) NOT NULL,  
    department_name VARCHAR
    (100) NOT NULL,  
    price DECIMAL
    (10,2) NOT NULL,  
    stock_quantity INT,  
    PRIMARY KEY
    (item_id)  
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("T-Shirt", "Apparel", 12.99, 54),
        ("Jeans", "Apparel", 36.75, 40),
        ("2% Milk", "Grocery", 3.89, 22),
        ("Wheat Bread", "Grocery", 2.99, 18),
        ("Unstable Unicorns", "Games", 19.95, 27),
        ("Dice Of Crowns", "Games", 14.99, 31),
        ("Betrayal At House On The Hill", "Games", 29.49, 19),
        ("U-Turn Turntable", "Home Entertainment", 289, 11),
        ("Klipsch R-41M", "Home Entertainment", 149, 14),
        ("Pro-Ject Phono Box", "Home Entertainment", 100, 9)
    