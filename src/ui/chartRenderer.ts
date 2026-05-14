declare var Chart: any; // Para o TS não reclamar se usar via CDN

export const renderChart = (canvasId: string, simulations: number[][], inflationPath: number[]) => {
  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
  
  const datasets = simulations.map((data, index) => ({
    label: index === 0 ? 'Simulações' : '',
    data: data,
    borderColor: 'rgba(75, 192, 192, 0.1)', // Linhas finas e transparentes
    borderWidth: 1,
    pointRadius: 0,
    fill: false,
  }));

  // Adiciona a linha da inflação (a vilã)
  datasets.push({
    label: 'Poder de Compra (Inflação Corrosiva)',
    data: inflationPath,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 3,
    pointRadius: 0,
    fill: false,
  } as any);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: inflationPath.length }, (_, i) => `Mês ${i}`),
      datasets: datasets
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: false } }
    }
  });
};