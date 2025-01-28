const faturamentoMensal = require('./faturamento.json');
function calcularFaturamento(faturamentoDiario) {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));

    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

    const totalFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
    const mediaMensal = totalFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);