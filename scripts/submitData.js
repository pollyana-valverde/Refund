// Captura o evento de submit do formulário para obter os valores
export async function submitData(form, amount, category, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, expenseAdd, uptadeTotal) {
    form.onsubmit = async (e) => {
        // Previne o comportamento padrão do formulário
        e.preventDefault()

        const newExpense = await fetch('http://localhost:3000/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: new Date().getTime(),
                expense: expense.value,
                category_id: category.value,
                category_name: category.options[category.selectedIndex].text, //Pega apenas a opção selecionada
                amount: amount.value,
                created_at: new Date()
            })
        })
    }
}
