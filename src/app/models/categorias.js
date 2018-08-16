const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = Schema({
    title: String,
});

module.exports = mongoose.model('categorias', CategoriaSchema);



