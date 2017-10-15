
let num, soma;
soma = 0;
for (var i = 2; i < process.argv.length; i++) {
    num = parseInt(process.argv[i]);
    num *= num;
    soma += num;
}

console.log(soma)

