/*jshint esversion: 6 */

const express = require('express')

const app = express();

app.use((req, res, next)=>{
    res.status(200).json({
        message: "it is working"
    });
});

module.exports = app;