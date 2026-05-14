export const getMarketData = async () => {
  // Simulação de chamada de API para Selic e IPCA
  // No futuro: return fetch('https://api.bcb.gov.br/...').then(res => res.json())
  return {
    selic: 0.1175, // 11.75%
    ipca: 0.045,   // 4.5% (Inflação alvo)
  };
};