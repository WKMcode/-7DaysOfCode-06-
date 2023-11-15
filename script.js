const compras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let adicionar = true;

while (adicionar) {
    let adicionarItem = window.prompt("Deseja adicionar um item na lista de compras? Responda com 'sim' ou 'não'.");

    if (adicionarItem.toLowerCase() === 'sim') {
        let comida = window.prompt("Qual comida deseja adicionar?");
        let categoria = window.prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)");

        switch (categoria.toLowerCase()) {
            case 'frutas':
                compras.Frutas.push(comida);
                break;
            case 'laticínios':
                compras.Laticínios.push(comida);
                break;
            case 'congelados':
                compras.Congelados.push(comida);
                break;
            case 'doces':
                compras.Doces.push(comida);
                break;
            default:
                compras.Outros.push(comida);
                break;
        }
    } else if (adicionarItem.toLowerCase() === 'não') {
        adicionar = false;
    } else if (adicionarItem.toLowerCase() === 'remover') {
        // Verificar se existem itens na lista para remoção
        const listaAtual = Object.values(compras).flat();
        if (listaAtual.length === 0) {
            alert("Não há itens para remover na lista de compras.");
        } else {
            // Exibir os itens atuais
            alert(`Itens na lista atual: ${listaAtual.join(', ')}`);
            let itemRemover = window.prompt("Qual item deseja remover?");
            let itemEncontrado = false;

            for (let categoria in compras) {
                const index = compras[categoria].indexOf(itemRemover);
                if (index !== -1) {
                    compras[categoria].splice(index, 1);
                    alert(`"${itemRemover}" foi removido da categoria ${categoria}.`);
                    itemEncontrado = true;
                    break;
                }
            }

            if (!itemEncontrado) {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
        }
    } else {
        alert("Resposta inválida. Responda com 'sim', 'não' ou 'remover'.");
    }
}

alert("Lista de compras:");
for (const categoria in compras) {
    alert(`    ${categoria}: ${compras[categoria].join(', ')}`);
}
