let turno = 'Jedi';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

function jogar(index) {
    if (tabuleiro[index]) return;  // Verifica se a célula já foi preenchida

    tabuleiro[index] = turno;
    
    // Seleciona a célula e insere a imagem correspondente ao turno
    let imagem = (turno === 'Jedi') ? '<img src="Jedi - X.png" alt="Jedi" />' : '<img src="Sith - O.svg" alt="Sith" />';
    document.querySelectorAll('.cedula')[index].innerHTML = imagem;

    // Verifica se há um vencedor
    if (verificarVencedor()) {
        alert(`A Ordem dos ${turno} venceu!`);
    }

    // Alterna o turno
    turno = (turno === 'Jedi') ? 'Sith' : 'Jedi';
}

// Função de exemplo para verificar vencedor (implemente conforme necessário)
function verificarVencedor() {
    // Exemplo simples de verificação, a lógica real depende da sua implementação
    const combinacoesVencedoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            return true;
        }
    }
    return false;
}
