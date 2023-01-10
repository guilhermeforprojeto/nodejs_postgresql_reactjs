const express = require("express")

const Data = [{ nome: "Guilherme", status: false }]
const allRoutes = express.Router()
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();


// C
allRoutes.post("/todos", async (request, response) => {
  const { name } = request.body;
  const All = await prisma.All.create({
    data: {
      name,
      status: false,
    }
  })
  // Data.push({ name, status: false })
  return response.status(201).json(All)
});
// R
allRoutes.get("/todos", (request, response) => {
  return response.status(200).json(Data)
})

// U


// D


module.exports = allRoutes