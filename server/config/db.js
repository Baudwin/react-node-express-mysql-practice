const express = require("express")
const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()

const db = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    database: "books",
    user: "root",
    password: process.env.password

}).promise()



module.exports = db