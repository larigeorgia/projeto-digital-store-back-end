const express = require("express")
const jwt = require('jsonwebtoken')

const usuarioRoute = require("./usuarioRoute")
const authentication = require("../middleware/authentication")

const RotasPublicas = express.Router()

RotasPublicas.post('/login', (req, res)=>{

})

RotasPrivadas.use(authentication)
RotasPublicas.use(usuarioRoute)

module.exports = RotasPublicas