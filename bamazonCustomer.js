var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
   showAllProducts();
  //  bidAuction();  
});


// select item_id, product_name, department_name,price,stock_quantity from products

 function queryAllProducts() {
        connection.query("SELECT item_id,product_name, department_name, price, stock_quantity from products", function(err, res) {
            if (err) throw err;
            console.log(res);
            connection.end();
          console.log("-----------------------------------");
        });
      }
function showAllProducts() {
  var query = "SELECT item_id,product_name, department_name, price, stock_quantity from products";
      connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          // for (var i = 0; i < 8; i++) {
          console.log("item_id " + res[i].item_id + " || Product Name " + res[i].product_name + " || Department " + res[i].department_name);
        }
        bidAuction();
      });
      console.log("All items are listed");
      }

function bidAuction() {
  // query the database for all items in products
  connection.query("SELECT * FROM products", function(err, results) {
    console.log("Pick an item number")
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_id);
              
            }
            console.log(choiceArray);
            return choiceArray;
            
          },
          message: "What item would you like to buy ?"
        },
        {
          name: "bid",
          type: "input",
          message: "How many you like to buy ?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if there is enough quantity
        if (chosenItem.stock_quantity > parseInt(answer.bid)) {
          // if there is enough quantity then purchase.
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: stock_quantity - answer.bid
              },
              {
                item_id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Item successfully purchased");
              // start();
            }
          );
        }
        else {
          // not enough quantity is left
          console.log("There is insufficient quantity....");
          // start();
        }
      });
  });
}

