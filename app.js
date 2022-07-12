const express = require("express");
const Router = require("./router/route");
const app = express();
app.use(express.json());
app.use(Router);
module.exports = app;