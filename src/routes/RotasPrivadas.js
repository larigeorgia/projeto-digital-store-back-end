const express = require("express")

const usuarioRoute = require("./usuarioRoute")
const authentication = require("../middleware/authentication")

const RotasPrivadas = express.Router()

// RotasPrivadas.use((req, res, next)=>{
//     const token = req.headers['authorization']
//     console.log(req.headers.token)
//     if(token != '123321'){
//         return res.status(403).send("acesso não autorizado")
//     }
//     next()
// })

RotasPrivadas.use(authentication)
RotasPrivadas.use(usuarioRoute)

module.exports = RotasPrivadas