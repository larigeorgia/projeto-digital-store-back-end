const AdminController = require("../controllers/AdminController");
const jwt = require('jsonwebtoken')
require("dotenv").config()

/*middleware como classe de autenticacao, uma funcao gera o token e faz o cadastro na tabela de admin e a outra verifica se o token e valido, a chave SECRET_JWT pode ser definida no arquivo .env.example*/
class Autenticacoes {

    static async authentication (req, res) {
        const body = req.body

        return AdminController.login(body).then((response)=>{
            try{
                if(response){
                    const token = jwt.sign({response}, process.env.SECRET_JWT, {expiresIn: 600})
                    return res.status(200).json({ seu_token: token });
                }
            }catch{
                return res.status(404).json({
                    message: "erro, por favor tente novamente"
                }) 
            }
        })
    }
    
    static async verifyJWT (req, res, next) {
        const token = req.headers['authorization'];
        jwt.verify(token, process.env.SECRET_JWT, (err)=>{
            if(err) return res.status(400).end()
            next()
        })
        
    }
}


module.exports = Autenticacoes
