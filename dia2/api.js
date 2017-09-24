const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/gerenciador-financeiro';


MongoClient.connect(url, function(err, db) {
	if(err){
		return console.error(err);
	}

 	console.log("Connected successfully to server");


	app.get('/orcamentos', function (req, res) {
		var orcamento = db.collection('orcamento');
		
		orcamento.find({}).toArray(function(err, items){
			if(err){
				res.json({
					success: false,
					 message:'Erro ao obter orcamento',
					 error: err
				})
			}
			res.json(items)	
		});
		
	})

	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!')
	});
});