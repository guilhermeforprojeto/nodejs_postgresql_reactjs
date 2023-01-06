const { response } = require("express");
const express = require("express")

const Data = [{ nome: "Guilherme", status: false }]
const allRoutes = express.Router()


// C
allRoutes.post("/todos", (request, response) => {
  const { name } = request.body
  Data.push({ name, status: false })
  return response.status(201).json(Data)
});


// R
allRoutes.get("/todos", (request, response) => {
  return response.status(200).json(Data)
})

// U
// D


module.exports = allRoutes