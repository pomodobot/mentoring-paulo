var d = new Date();
var num = 1;
var soma = 0 
for(var i=0; i<64; i++){
	soma += num;
	num *= 2;

}
console.log(new Date()-d);
console.log(soma);


var d = new Date();
var soma = 0 
for(var i=0; i<64; i++){
	soma += Math.pow(2,i);
}
console.log(new Date()-d);
console.log(soma);
