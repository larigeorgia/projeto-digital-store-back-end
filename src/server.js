const express = require('express')
require("dotenv").config()
const app = express()
app.use(express.json())

// const RotasPublicas = require("./routes/RotasPublicas")
const RotasPrivadas = require("./routes/RotasPrivadas")

app.get('/', (req,res)=>{
    return res.send("funcionando")
})
// app.use(RotasPublicas) 
app.use(RotasPrivadas) 

app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log("servidor rodando")
})