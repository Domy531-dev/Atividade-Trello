
const etiquetasPrioridade = document.querySelectorAll('.etiqueta__prioridade');

etiquetasPrioridade.forEach(prioridade => {
    if (prioridade.textContent === 'Baixa') {
        prioridade.classList.add('etiqueta--baixa');
    } else if (prioridade.textContent === 'Média') {
        prioridade.classList.add('etiqueta--media');
    } else {
        prioridade.classList.add('etiqueta--alta');
    }
});
