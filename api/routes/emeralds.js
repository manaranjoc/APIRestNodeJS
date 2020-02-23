const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'the emeralds are the following'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'New emerald batch recording'
    });
});

router.get('/:emeraldId', (req, res, next)=>{
    const id = req.params.workerId;
    res.status(200).json({
        message: 'Getting your emerald'
    });
});

router.patch('/:emeraldId', (req, res, next)=>{
    const id = req.params.workerId;
    res.status(200).json({
        message: 'Updated emerald'
    });
});

router.delete('/:emeraldId', (req, res, next)=>{
    const id = req.params.workerId;
    res.status(200).json({
        message: 'Deleted emerald'
    });
});

module.exports = router;