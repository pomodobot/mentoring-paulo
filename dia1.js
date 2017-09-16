var orcamento = [{
	"mes": "Janeiro/2017",
	"categoria": "Alimentação",
	"valor": 300,
	"ativo": true
},
{

	"mes": "Janeiro/2017",
	"categoria": "Despesas com carro",
	"valor": 200,
	"ativo": 1
},
{

	"mes": "Janeiro/2017",
	"categoria": "Despesas residenciais",
	"valor": 150,
	"ativo": false
}];

orcamento
	.filter(function(a){
		return a.ativo === 1;
	})
	.forEach(function(a) {
	    console.log(a.valor);
	});

