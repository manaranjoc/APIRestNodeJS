/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

const Produccion = require('../../model/produccion');

router.get('/', (req, res, next) => {
    Produccion.findAll().then(
        produccion => {
            res.status(200).json(produccion);
        }
    ).catch(err => {
        const error = new Error('Production not found');
        error.status = 404;
        next(error);
    });
});

router.post('/', (req, res, next) => {
    Produccion.create(req.body)
        .then(()=>{
            res.status(201).json({
                message: 'Production added'
            });
        }).catch(err => {
            console.log(err);
            const error = new Error('Production not created');
            error.status = 400;
            next(error);
        });
});

router.get('/:productionId', (req, res, next)=>{
    const id = req.params.productionId;
    Produccion.findByPk(Number(id)).then(produccion => {
        res.status(200).json(produccion);
    }).catch(err => {
        const error = new Error('Production not found');
        error.status = 404;
        next(error);
    });
});

router.delete('/:productionId', (req, res, next)=>{
    const id = req.params.productionId;
    Produccion.destroy({
        where: {id: Number(id)}
    }).then(production => {
        res.status(200).json({
            message: 'Delete Production'
        });
    }).catch(err => {
        const error = new Error('Production not deleted');
        error.status = 402;
        next(error);
    });
});

module.exports = router;