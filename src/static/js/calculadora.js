// /home/ubuntu/investidor_academia/src/static/js/calculadora.js

document.addEventListener("DOMContentLoaded", () => {
    const valorInicialInput = document.getElementById("valorInicial");
    const aporteMensalInput = document.getElementById("aporteMensal");
    const taxaJurosInput = document.getElementById("taxaJuros");
    const periodoInput = document.getElementById("periodo");
    const calcularBtn = document.getElementById("calcularBtn");

    const resultadoTotalInvestido = document.getElementById("resultadoTotalInvestido");
    const resultadoTotalJuros = document.getElementById("resultadoTotalJuros");
    const resultadoValorFinal = document.getElementById("resultadoValorFinal");
    const projecaoAnualTableBody = document.querySelector("#projecaoAnualTable tbody");

    calcularBtn.addEventListener("click", () => {
        const P = parseFloat(valorInicialInput.value) || 0;
        const A = parseFloat(aporteMensalInput.value) || 0;
        const i = (parseFloat(taxaJurosInput.value) || 0) / 100; // Taxa anual
        const n = parseInt(periodoInput.value) || 0; // Período em anos

        if (n <= 0) {
            alert("O período deve ser de pelo menos 1 ano.");
            return;
        }

        const taxaMensal = Math.pow(1 + i, 1 / 12) - 1;
        const numMeses = n * 12;
        let valorAcumulado = P;
        let totalAportado = P;
        projecaoAnualTableBody.innerHTML = ""; // Limpa a tabela anterior

        let projecaoAnual = [];

        for (let mes = 1; mes <= numMeses; mes++) {
            valorAcumulado *= (1 + taxaMensal);
            valorAcumulado += A;
            totalAportado += A;

            // Guarda a projeção ao final de cada ano
            if (mes % 12 === 0 || mes === numMeses) {
                projecaoAnual.push({
                    ano: Math.ceil(mes / 12),
                    valor: valorAcumulado
                });
            }
        }
        
        // Ajuste para o caso de apenas valor inicial sem aportes
        if (A === 0 && P > 0) {
             totalAportado = P;
             valorAcumulado = P * Math.pow(1 + i, n);
             projecaoAnual = []; // Recalcula projeção anual sem aportes
             let valorAno = P;
             for(let ano = 1; ano <= n; ano++){
                valorAno *= (1+i);
                projecaoAnual.push({ano: ano, valor: valorAno});
             }
        } else if (A > 0 && P === 0) {
             totalAportado = A * numMeses;
        } else if (A === 0 && P === 0) {
            totalAportado = 0;
            valorAcumulado = 0;
        }


        const totalJuros = valorAcumulado - totalAportado;

        resultadoTotalInvestido.textContent = `Total Investido: R$ ${totalAportado.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultadoTotalJuros.textContent = `Total em Juros: R$ ${totalJuros.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        resultadoValorFinal.innerHTML = `<strong>Valor Final Acumulado: R$ ${valorAcumulado.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>`;

        // Preenche a tabela de projeção anual
        projecaoAnual.forEach(item => {
            const row = projecaoAnualTableBody.insertRow();
            const cellAno = row.insertCell();
            const cellValor = row.insertCell();
            cellAno.textContent = item.ano;
            cellValor.textContent = `R$ ${item.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        });
    });

    // Calcula ao carregar a página com valores padrão
    calcularBtn.click(); 
});
