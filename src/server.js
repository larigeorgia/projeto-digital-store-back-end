const express = require('express')
require("dotenv").config()
const app = express()
app.use(express.json())

const RotasPrivadas = require("./routes/RotasPrivadas")
const Autenticacoes = require('./middleware/authentication')

app.get('/', (req,res)=>{
    return res.send("funcionando")
})

//Rota publica para conseguir acessar as outras rotas, chama a funcao de autenticacao que gera o token ou cadastra e gera o token
app.post('/login', Autenticacoes.authentication)
/*processo: na rota de login informe um json no body conforme descrito abaixo, no seu arquivo .env insira uma chave no SECRET_JWT ele sera usado para codificar e decodificar o token jwt gerado no login e da acesso as outras rotas.
{
  "email": "user@mail.com",
  "password": "123@123"
}  

quando passar para a rota de GET users e necessario informar o mesmo body =) */

app.use(RotasPrivadas) 


app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log("servidor rodando")
})