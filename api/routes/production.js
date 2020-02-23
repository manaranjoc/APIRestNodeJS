/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Here is your product'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Posting production'
    });
});

router.get('/:productionId', (req, res, next)=>{
    const id = req.params.productionId;
    res.status(200).json({
        message: 'You discovered ID',
        id: id
    });
});

router.delete('/:productionId', (req, res, next)=>{
    const id = req.params.productionId;
    res.status(200).json({
        message: 'Deleted production',
        id: id
    });
});

module.exports = router;