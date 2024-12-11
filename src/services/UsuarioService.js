const TabelaUsuarios = require('../models/TabelaUsuarios')

class UsuarioService {

    static async listar(){
        const usuarios = await TabelaUsuarios.findAll()
        return usuarios
    }

    static async criar(body){

        const {firstname, surname, email, password} = body
        const emailCheck = await TabelaUsuarios.findOne({where: {email : email}})
        if (emailCheck){
            const message = "Email já cadastrado"
            return  (message)
        }else{
            TabelaUsuarios.create({
                firstname : firstname,
                surname: surname,
                email: email, 
                password: password
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