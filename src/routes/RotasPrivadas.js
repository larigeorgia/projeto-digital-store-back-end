const express = require("express")

const usuarioRoute = require("./UsuarioRoute")
// const {authentication} = require("../middleware/authentication")
const Autenticacoes = require('../middleware/authentication')

const RotasPrivadas = express.Router()


RotasPrivadas.use(Autenticacoes.verifyJWT)
RotasPrivadas.use(usuarioRoute)

module.exports = RotasPrivadas