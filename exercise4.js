const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularPercentualRepresentacao(faturamento) {
  const totalMensal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

  const percentuais = {};
  for (const estado in faturamento) {
      percentuais[estado] = (faturamento[estado] / totalMensal) * 100;
  }

  return percentuais;
}

const percentuais = calcularPercentualRepresentacao(faturamentoPorEstado);

for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}