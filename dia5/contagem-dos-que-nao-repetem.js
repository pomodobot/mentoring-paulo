function repeats(arr){
  const contagem = {};
    
  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    if(!contagem[item]){
      contagem[item]=0;
    }
    contagem[item] = contagem[item] + 1;
  }
    let soma = 0;
    const chaves = Object.keys(contagem);
    for(let i = 0; i < chaves.length; i++){
    const chave = chaves[i];
    if(contagem[chave] === 1){
      soma += parseInt(chave);
    }
  }
  return soma;
}