"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const dbpost = require("pg");

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(config.connectionString);
dbpost.connect()

// Carrega os Models
const Produto = require("./models/produto");
const Cliente = require("./models/cliente");
const Ordem = require("./models/ordem");

//carrega as rotas
const indexRoute = require("./routers/index-route");
const produtoRoute = require("./routers/produto-route");
const clienteRoute = require("./routers/cliente-route");
const ordemRoute = require("./routers/ordem-route");

app.use(
  bodyParser.json({
    limit: "5mb"
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-acess-token"
  );
  res.header("Acess-Control.Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/", indexRoute);
app.use("/produtos", produtoRoute);
app.use("/clientes", clienteRoute);
app.use("/ordens", ordemRoute);

module.exports = app;
