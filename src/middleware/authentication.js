const authentication = (req, res, next) => {
    const token = req.headers['authorization'];
    const meu_token_secreto = '123321'
    console.log(token)
    if (token === meu_token_secreto) {
        next();
    } else {
        res.status(403).json({ mensagem: 'Não autorizado' });
    }
};

module.exports = authentication;

//teoricamente no meu raciocínio, quando eu chamasse essa autenticacao nas rotas privadas, deveria validar pq passei no header a informacao correta, mas nao validou. É necessário entender pq