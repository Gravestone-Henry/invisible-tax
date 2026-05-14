# 📉 THE INVISIBLE TAX | MONTE CARLO SIMULATOR

> "O dinheiro é uma alucinação coletiva. A inflação é a única realidade."

Este projeto é uma ferramenta de visualização de erosão patrimonial que utiliza Simulações de Monte Carlo para projetar a probabilidade de sobrevivência do capital contra a entropia econômica.

---

##  ARQUITETURA E ORGANIZAÇÃO (O PORQUÊ DA PASTA /SRC)

Embora o ambiente de produção (GitHub Pages) execute o código a partir de um ponto central, este repositório mantém a estrutura original na pasta `/src`. 

Manter o código desacoplado em arquivos específicos não é apenas capricho; é uma necessidade de engenharia por trás de qualquer sistema robusto:

1. **Separação de Preocupações (SoC)**: A lógica matemática do motor de Monte Carlo não deve saber como o gráfico é desenhado.
2. **Escalabilidade**: Se amanhã eu decidir trocar o Chart.js por outra biblioteca, eu altero apenas a camada de UI, mantendo o "Core" intacto.
3. **Testabilidade**: Arquivos isolados na `/src` permitem a implementação de testes unitários em lógica financeira complexa sem interferência do DOM.

### Estrutura do Repositório:
```text
/src
 ├── engine/
 │    └── simulator.ts      # O motor estocástico (Lógica Pura/Math)
 ├── api/
 │    └── financeClient.ts  # Abstração para futuras conexões com APIs do BCB/HG
 ├── ui/
 │    └── chartRenderer.ts  # Camada de visualização e manipulação do Canvas
 └── main.ts                # O orquestrador que une os módulos

/public
 └── index.html             # A interface final otimizada para o GitHub Pages


<p align="center">
  <i><font color="grey">
    "Zona de conforto é a zona de perigo.<br>
    <b>𝔊𝔯𝔞𝔳𝔢𝔰𝔱𝔬𝔫𝔢 ℌ𝔢𝔫𝔯𝔶</b> — Entre logs, códigos e o abismo do servidor." 
  </font></i>
</p>
