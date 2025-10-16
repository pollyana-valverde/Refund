// Atualiza o total de despesas e a quantidade
export function uptadeTotal(expensesList, expenseLength, expensesTotal, formarCurrencyBRL) {
    try {
        // Recupera todos os itens da lista
        const items = expensesList.children

        // Atualiza a quantidade de despesas
        expenseLength.textContent = `${items.length} ${items.length === 1 ? "despesa" : "despesas"}`

        // Variável para incrementar o total
        let total = 0

        // Percorre todos os itens da lista
        for (let item = 0; item < items.length; item++) {
            // Pega o valor do item atual, remove caracteres não numéricos e converte para número
            let currentAmount = Number(items[item].querySelector(".expense-amount").textContent.replace(/[^\d,]/g, "").replace(",", "."))

            // Incrementa o total
            total += currentAmount
        }

        // Atualiza o total na interface com o formato BRL
        expensesTotal.innerHTML = `<small style="margin-right: unset;">R$</small>${formarCurrencyBRL(total).replace("R$", "")}`

    } catch (error) {
        console.log(error)
        console.log("Não foi possível atualizar o total.")
    }
}