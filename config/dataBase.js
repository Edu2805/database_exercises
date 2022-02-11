const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/**
 * Conectando o banco de dados previamente criado com
 * o projeto em JS
 * 
 */

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.eror(err));

//Obs: abortar esse projeto e ir para o projeto To do list em NODEJS/ToDoList