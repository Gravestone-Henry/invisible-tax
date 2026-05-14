import { MonteCarloEngine } from './engine/simulator.js';
import { renderChart } from './ui/chartRenderer.js';
import { getMarketData } from './api/financeClient.js';

document.getElementById('runBtn')?.addEventListener('click', async () => {
  const data = await getMarketData();
  const simulations: number[][] = [];
  
  // Rodar 50 simulações para o feixe de luz
  for (let i = 0; i < 50; i++) {
    simulations.push(MonteCarloEngine.simulate(1000, 200, 60, data.selic, 0.15, data.ipca));
  }

  // Caminho da inflação (apenas o capital perdendo valor)
  const inflationPath = simulations[0].map((_, i) => {
    return 1000 * Math.pow(1 - data.ipca/12, i);
  });

  renderChart('mainChart', simulations, inflationPath);
});