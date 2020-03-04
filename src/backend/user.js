const Sequelize = require("sequelize");
const express = require("express");

const app = express();
//const urlencodedParser = bodyParser.urlencoded({extended: false});

const createSqlConnection = () => {
    const sequelize = new Sequelize("usersdb2", "sa", "123456", {
          dialect: "mssql",
          host: "localhost",
          port: "1433"
        });
        return sequelize;
}

createSqlConnection.sync().then(() => {
    app.listen(3000, function() {
        console.log("Server waiting for connect");
    })
}).cath(error => console.log(error))

module.exports = {
    createSqlConnection
}