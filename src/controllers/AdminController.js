const AdminModel = require("../models/AdminModel");

/*checagem de dados no banco, caso tenham dados do email que vem no body, 
esse controller retorna os dados para autenticacao, caso não tenha efetua o cadastro*/

class AdminController {

   static async login(dados){
        const {email, password} = dados
        const emailCheck = await AdminModel.findOne({where: {email : email}})
        if (emailCheck === null){
            console.log(emailCheck)
            const criandoAdm = await AdminModel.create({
                email: email, 
                password: password
            })
            const dadosBanco = await AdminModel.findAll({attributes:["email", "password"], where: {email:email}})
            return dadosBanco
        }else{
            const dadosBanco = AdminModel.findAll({attributes:["email", "password"], where: {email:email}})
            return dadosBanco
        }
        
    }
}

module.exports = AdminController