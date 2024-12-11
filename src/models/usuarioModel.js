class UsuarioModel {
    //transformando os metodos em estáticos por não ter ainda conexão com o banco
    
    static felinos = [
        {
            id:1,
            nome:"pimenta"
        },
        {
            id:2,
            nome:"pimenta"
        }
    ]

    static listar(){
        return UsuarioModel.felinos
    }

    static consultaPorID(id){
        const dados = UsuarioModel.felinos.filter(item => item.id == id)
        // console.log(typeof(id)) tipo de dado recebido e string
        return dados
    }

    static criar(dados){
        return UsuarioModel.felinos.push(dados)
        
    }

    static atualizar(id, dados){
        const index = UsuarioModel.felinos.findIndex(item => item.id == id)
        UsuarioModel.felinos[index] = dados
        // const data = UsuarioModel.felinos.filter(item => {
        //     if(item.id==id){
        //         return dados

        //     }else{
        //         return item
        //     }
        // })
        // UsuarioModel.felinos = data
    }

    static deletar(id){
        const dados = UsuarioModel.felinos.filter(item => item.id != id)
        UsuarioModel.felinos = dados
        
    }
}


module.exports = UsuarioModel