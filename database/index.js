require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
var cors = require('cors');


const Academia = require('./controller/Academia');
const Aluno = require("./controller/Aluno")
const Login = require("./controller/LoginAluno")

//MID
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());



// ROTAS
app.use("/", Academia);
app.use("/", Aluno);
app.use("/", Login)

// CONEXÃO COM O MYSQL
connection.authenticate().then(
    () => {
        console.log('conectado ao mysql');
    }
)

// CONEXÃO COM O BACKEND
app.listen('8080', () => {
    console.log('banco de dados online');
})
