// Função para adicionar a nova despesa na lista
export function expenseAdd(newExpense, expensesList, form, expense, expenseLength, expensesTotal, formarCurrencyBRL, uptadeTotal) {
    try {
        // Cria o elemento para adicionar na lista
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")
        expenseItem.innerHTML = `
            <img src="./img/${newExpense.category_id}.svg" alt="Ícone de tipo da despesa" />

              <div class="expense-info">
                <strong>${newExpense.expense}</strong>
                <span>${newExpense.category_name}</span>
              </div>

              <span class="expense-amount"><small>R$</small>${(newExpense.amount).replace("R$", "")}</span>

              <img src="./img/remove.svg" alt="remover" class="remove-icon" />
        `

        // Adiciona o elemento na lista
        expensesList.appendChild(expenseItem)

        // Atuliza os totais
        uptadeTotal(expensesList, expenseLength, expensesTotal, formarCurrencyBRL)

        // Reseta o formulário
        form.reset()

        // Foca no campo de despesa
        expense.focus()

    } catch (error) {
        console.log("Não foi possível adicionar a despesa.")
        console.log(error)
    }
}