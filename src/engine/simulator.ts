// Lógica de simulação de Monte Carlo simplificada
export interface SimulationResult {
  path: number[];
  isWinner: boolean; // Se superou a inflação
}

export class MonteCarloEngine {
  // Gera um caminho aleatório baseado em retorno esperado e volatilidade
  static simulate(initial: number, monthly: number, months: number, yieldRate: number, volatility: number, inflation: number): number[] {
    let balance = initial;
    const history = [initial];
    
    // Taxa mensal aproximada
    const monthlyYield = Math.pow(1 + yieldRate, 1/12) - 1;
    const monthlyVol = volatility / Math.sqrt(12);

    for (let i = 0; i < months; i++) {
      // Box-Muller transform para gerar números aleatórios com distribuição normal (Gaussiana)
      const u1 = Math.random();
      const u2 = Math.random();
      const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      
      const change = monthlyYield + (monthlyVol * z);
      balance = (balance + monthly) * (1 + change);
      history.push(Number(balance.toFixed(2)));
    }
    return history;
  }
}