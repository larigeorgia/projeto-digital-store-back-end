const UsuarioService = require('../services/UsuarioService')

/*classe que se comunica com a service usuario*/ 

class UsuarioController {

    async listar(req, res){
        return UsuarioService.listar().then((response)=>{
            res.json(response)
        })
    }

    async consultaPorID(req, res){
        const id = req.params.id
        return UsuarioService.consultarId(id).then((response)=>{
            res.json(response)
        })
    }

    async criar(req, res){
        const body = req.body
        return UsuarioService.criar(body).then((response)=> {

            const cadastroExistente = "Email já cadastrado"
            const sucesso = "Usuário cadastrado com sucesso!"
            
            try {
                if(response == cadastroExistente ){
                    return res.status(403).json({
                        message: "Email já cadastrado"
                    })
                }else if(response == sucesso){
                    return res.status(200).json({
                        message: "Usuário cadastrado com sucesso!"
                    })  
                }
            }catch {
                return res.status(404).json({
                    message: "erro, por favor tente novamente"
                }) 
            }
        });
    }

    async atualizar(req, res){
        const id = req.params.id
        const body = req.body
        return UsuarioService.atualizar(id, body).then((response)=>{
            res.status(200).json({response,
                message: "cadastro atualizado com sucesso"
            })
        })
    }

    async deletar(req, res){
        const id = req.params.id
        return UsuarioService.deletar(id).then((response)=>{
            res.status(200).json({response,
                message: "cadastro removido com sucesso"
            })
        })
    }


}

module.exports = UsuarioController