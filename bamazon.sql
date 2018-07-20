-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect animals_db --
USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
  item_id integer auto_increment not null,
  product_name  VARCHAR(40), 
  department_name varchar (40),
  price decimal (8.2),
  stock_quantity integer(5),
  primary key(item_id));

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Apple iPads","Accounting",350.00,12);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Apple MacPro","Accounting",1200.00,8);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Dell Laptop","Legal",800.00,10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("HP Desktop","Legal",500,10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("IBM Laptop","HR",600.00,10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("MS Surface Pro","HR",900.00,8);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Lenovo Laptop","Finance",500.00,8);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Lenovo Desktop","Finance",400.00,10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Lenovo Laptop","Treasury",500.00,8);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Lenovo Desktop","Treasury",400.00,10);

-- Updates the row where the column name is peter --
