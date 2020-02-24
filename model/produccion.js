const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const db = require('../database');

class Produccion extends Model {}
Produccion.init({
    id: {
        field: 'idproduccion',
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false
    },
    peso: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    obrero: {
        type: Sequelize.INTEGER,
        references: {
            model: 'obreros',
            key: 'idobreros'
        }
    },
    tipoEsmeralda: {
        field: 'tipo_esmeralda',
        type: Sequelize.INTEGER,
        references: {
            model: 'esmeraldas',
            key: 'codigo'
        }
    }
}, {
    sequelize: db,
    modelName: 'produccion'
});

module.exports = Produccion;