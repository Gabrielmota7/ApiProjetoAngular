const mongoose = require("mongoose")
require('dotenv').config()

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

var username = encodeURIComponent("payPlanner");
var password = encodeURIComponent("payPlaneer?7");


const connect = () => {
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.tu1eb56.mongodb.net/test`)

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.error("Erro ao conectar com o mongoDB")
    })

    connection.on("open", () => {
        console.log("Conetado ao mongoDB com sucesso!")
    })
}

connect();

module.exports = mongoose;