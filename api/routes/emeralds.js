const express = require('express');
const router = express.Router();
const Esmeralda = require('../../model/esmeraldas');

router.get('/', (req, res, next) => {
    Esmeralda.findAll().then(
        esmeraldas => {
            res.status(200).json(esmeraldas);
        }
    ).catch(err => {
        const error = new Error('Esmeraldas not found');
        error.status = 404;
        next(error);
    });
});

router.post('/', (req, res, next) => {
    Esmeralda.create(req.body)
        .then(()=>{
            res.status(201).json({
                message: 'Emerald added'
            });
        }).catch(err => {
            const error = new Error('Emerald not created');
            error.status = 400;
            next(error);
        });
});

router.get('/:emeraldId', (req, res, next)=>{
    const id = req.params.workerId;
    Esmeralda.findByPk(Number(id)).then(esmeralda => {
        res.status(200).json(esmeralda);
    }).catch(err => {
        const error = new Error('Emerald was not found');
        error.status = 404;
        next(error);
    });
});

router.patch('/:emeraldId', (req, res, next)=>{
    const id = req.params.workerId;
    Esmeralda.update(req.body, {where: {id: Number(id)}})
        .then(result => {
            res.status(200).json({
                message: 'Updated Emerald'
            });
        }).catch(err => {
            const error = new Error('Emerald not updated');
            error.status = 404;
            next(error);
        });
});

router.delete('/:emeraldId', (req, res, next)=>{
    const id = req.params.workerId;
    Esmeralda.destroy({
        where: {id: Number(id)}
    }).then(esmeralda => {
        res.status(200).json({
            message: 'Deleted emerald'
        });
    }).catch(err => {
        const error = new Error('Emerald not deleted');
        error.status = 402;
        next(error);
    });
});

module.exports = router;