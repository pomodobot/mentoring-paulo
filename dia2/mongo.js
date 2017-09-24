var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/gerenciador-financeiro';

MongoClient.connect(url, function(err, db) {
	if(err){
		return console.error(err);
	}

 	console.log("Connected successfully to server");

 	var orcamento = db.collection('orcamento');
 	orcamento.insertOne({
		"mes": "Janeiro/2017",
		"categoria": "Despesas residenciais",
		"valor": 150,
		"ativo": false
	}, function(err, res) {
		if(err){
			return console.error(err);
		}
	 	console.log("Adicionado com sucesso");
 	});

	db.close();
});


