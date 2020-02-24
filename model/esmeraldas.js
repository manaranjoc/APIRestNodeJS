const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../database');

class Esmeralda extends Model {}
Esmeralda.init({
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pureza: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'esmeraldas'
});

module.exports = Esmeralda;