const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const mongoose =require('mongoose');


// Iniciando Aplicação
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando Banco de Dados
mongoose.connect('mongodb+srv://master:Jc96840897@softmanager.ll5so.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{useUnifiedTopology: true}, {useNewUrlParser: true} 
);

requireDir('./src/models');



//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);