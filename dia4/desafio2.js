function categoria(idade) {
	if(idade < 0) {
		return 'Idade inválida';
	}
	if(idade < 5){
		return 'Too young!'
	}
	if (idade < 8) {
		return 'Infantil A'
	}

	if (idade < 11) {
		return 'Infantil B'
	}

	if (idade < 13) {
		return 'Juvenil A'
	}

	if (idade < 17) {
		return 'Juvenil B'
	}
	return 'Adultos'
}
var d = new Date();
for(var i = 0; i < 10000000; i++){
	categoria(i);
}
console.log(new Date()-d);

//console.log(categoria(parseInt(process.argv[2])));



