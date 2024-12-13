const database = require("../config/database")

//criacao das tabelas no banco

require('../models/AdminModel')
require('../models/ImagensProduto')
require('../models/OpcoesProdutos')
require('../models/ProdutosCategorias')
require('../models/TabelaCategoria')
require('../models/TabelaProdutos')
require('../models/TabelaUsuarios')



database.sync({force:true})