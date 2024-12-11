const express = require("express")

const UsuarioController = require("../controllers/UsuarioController")
const UsuarioRoute = express.Router()

const usuariosController = new UsuarioController()

UsuarioRoute.get("/users", usuariosController.listar)
UsuarioRoute.get("/users/:id", usuariosController.consultaPorID)
UsuarioRoute.post("/users", usuariosController.criar)
UsuarioRoute.put("/users/:id", usuariosController.atualizar)
UsuarioRoute.delete("/users/:id", usuariosController.deletar)

module.exports = UsuarioRoute