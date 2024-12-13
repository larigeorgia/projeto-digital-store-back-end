const TabelaUsuarios = require('../models/TabelaUsuarios')
const bcrypt = require('bcrypt')

/* crud com regras de consulta de email, para que nao se repita no banco e criptografia da senha*/

class UsuarioService {

    static async listar(){
        const usuarios = await TabelaUsuarios.findAll({attributes: ['id', 'firstname', 'surname', 'email']})
        return usuarios
    }

    static async criar(body){

        const {firstname, surname, email, password} = body
        const passwordHash = await bcrypt.hash(password, 10) //criptografando senha
        const emailCheck = await TabelaUsuarios.findOne({where: {email : email}})
        
        if (emailCheck){
            const message = "Email já cadastrado"
            return (message)
        }else{
            TabelaUsuarios.create({
                firstname : firstname,
                surname: surname,
                email: email, 
                password: passwordHash //guardabdo a senha criptografada no banco
            })
            return ("Usuário cadastrado com sucesso!")
        }
        
    }
    
    static async consultarId(id){
        return TabelaUsuarios.findByPk(id)
    }

    static async atualizar(id, body){
        const {firstname, surname, password} = body 
        const editar = await TabelaUsuarios.update({
            firstname : firstname,
            surname: surname,
            password: password
        },
        {
            where: {id:id}
        }
    )
    }

    static async deletar(id){
        TabelaUsuarios.destroy({
            where:{id:id}
        })
    }

}


module.exports = UsuarioService