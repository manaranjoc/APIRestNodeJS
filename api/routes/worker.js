/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const Obrero = require('../../model/obreros');

router.get('/', (req, res, next) => {
    Obrero.findAll().then(
        obreros => {
            res.status(200).json(obreros);
        }
    ).catch(err => {
        const error = new Error('Obreros not found');
        error.status = 404;
        next(error);
    });    
});

router.post('/', (req, res, next) => {
    Obrero.create(req.body)
        .then(()=>{
            res.status(201).json({
                message: 'Worker Added'
            });
        }).catch(err => {
            const error = new Error('Obrero not created');
            error.status = 400;
            next(error);
        });    
});

router.get('/:workerId', (req, res, next)=>{
    const id = req.params.workerId;
    Obrero.findByPk(Number(id)).then(obrero => {
        res.status(200).json(obrero);
    }).catch(err => {
        const error = new Error('Obrero no encontrado');
        error.status = 404;
        next(error);
    });    
});

router.patch('/:workerId', (req, res, next)=>{
    const id = req.params.workerId;
    Obrero.update(req.body, {where: {id: Number(id)}})
        .then(result => {
            res.status(200).json({
                message: 'Updated obrero'
            });
        }).catch(err => {
            const error = new Error('Obrero no actualizado');
            error.status = 404;
            next(error);
        });
});

router.delete('/:workerId', (req, res, next)=>{
    const id = req.params.workerId;
    Obrero.destroy({
        where: {id: Number(id)}
    }).then(obrero => {
        res.status(200).json({
            message: 'Deleted worker'
        });
    }).catch(err => {
        const error = new Error('Obrero eliminar');
        error.status = 402;
        next(error);
    });
    
});

module.exports = router;