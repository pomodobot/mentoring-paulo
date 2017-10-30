const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/gerenciador-financeiro';
const bodyParser = require('body-parser');
const path = require('path');
const ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.json());

MongoClient.connect(url, function (err, db) {
    if (err) {
        return console.error(err);
    }

    console.log("Connected successfully to server");

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/orcamentos', function (req, res) {
        const orcamento = db.collection('orcamento');

        orcamento.find({}).toArray(function (err, items) {
            if (err) {
                res.json({
                    success: false,
                    message: 'Erro ao obter orcamento',
                    error: err
                })
            }
            res.json(items)
        });

    });

    function verifica(req) {
        const keys = Object.keys(req.body);
        if (keys.indexOf('categoria') === -1 ||
            keys.indexOf('mes') === -1 ||
            keys.indexOf('valor') === -1) {
            return {
                success: false,
                message: "É preciso ter 3 parâmetros: categoria, mes e valor"
            }
        }


        if (typeof(req.body.categoria) !== "string") {
            return {
                success: false,
                message: 'A categoria precisa ser string'
            }
        }

        if (typeof(req.body.mes) !== "string") {
            return {
                success: false,
                message: 'O mes precisa ser string'
            }
        }

        if (typeof(req.body.valor) !== "number") {
            return {
                success: false,
                message: 'O valor precisa ser numerico'
            }
        }
        return null;
    }

    app.post('/orcamentos', (req, res) => {
        const resultado = verifica(req);
        if (resultado !== null) {
            return res.json(resultado);
        }

        const orcamento = db.collection('orcamento');
        orcamento.insertOne(req.body, function (err) {
            if (err) {

                return res.json(err)
            }
            res.json({
                success: true
            })
        })

    });

    app.delete('/orcamentos/:id', (req, res) => {
        const orcamento = db.collection('orcamento');
        orcamento.deleteOne({ _id: ObjectID(req.params.id) }, function (err) {
            if (err) {
                return res.json(err)
            }
            res.json({
                success: true
            })
        })
    });

    app.put('/orcamentos/:id', (req, res) => {
        const resultado = verifica(req);
        if (resultado !== null) {
            return res.json(resultado);
        }

        const orcamento = db.collection('orcamento');
        orcamento.updateOne({ _id: ObjectID(req.params.id) }, req.body, function (err) {
            if (err) {
                return res.json(err)
            }
            res.json({
                success: true
            })
        })
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    });
});