export async function removeExpense(expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, uptadeTotal) {
    // Evento de clique para remover uma despesa
    expensesList.addEventListener("click", async (e) => {
        //Verifica se o elemento clicado é o ícone de remoção
        if (e.target.classList.contains("remove-icon")) {
            // Obtém o elemento pai (a despesa) e o remove da lista
            const item = e.target.parentElement;

            // Remove a despesa do servidor
            await fetch(`http://localhost:3000/expenses/${item.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // Remove o item da lista
            item.remove();
        }

        // Atualiza os totais após a remoção
        uptadeTotal(expensesList, expenseLength, expensesTotal, formarCurrencyBRL)

        // Foca no campo de despesa
        expense.focus()
    })
}