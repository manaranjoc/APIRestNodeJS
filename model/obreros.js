const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../database');

class Obrero extends Model {}
Obrero.init({
    id: {
        field: 'idobreros',
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuenta: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    }
}, {
    sequelize: db,
    modelName: 'obreros'
});

module.exports = Obrero;