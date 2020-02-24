const Sequelize = require('sequelize');

const NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
    path: `.${NODE_ENV}.env`
});

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

db.authenticate()
    .then(() => {
        console.log('Connection Succesful');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;