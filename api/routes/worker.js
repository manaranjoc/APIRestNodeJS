/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Los trabajadores son los siguientes'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Posting worker'
    });
});

router.get('/:workerId', (req, res, next)=>{
    const id = req.params.workerId;
    res.status(200).json({
        message: 'Getting your worker'
    });
});

router.patch('/:workerId', (req, res, next)=>{
    const id = req.params.workerId;
    res.status(200).json({
        message: 'Updated worker'
    });
});

router.delete('/:workerId', (req, res, next)=>{
    const id = req.params.workerId;
    res.status(200).json({
        message: 'Deleted worker'
    });
});

module.exports = router;