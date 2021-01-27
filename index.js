
import dotenv from 'dotenv';
import client from './dbseed';

dotenv.config();
var express = require('express')
var app = express()

// Dishes

app.get('/dishes', (req, res) => {
    client.connect(function(err) {
         client.query('SELECT * FROM public."dishes"', function(err, result) {
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
});

// Categories

app.get('/categories', (req, res) => {
    client.connect(function(err) {
        client.query('SELECT * FROM public."categories"', function(err, result) {
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
});

// Days

app.get('/days', (req, res) => {
    client.connect(function(err) {
        client.query('SELECT * FROM public."days"', function(err, result) {
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
});

app.listen(3000)
