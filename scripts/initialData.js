// Função para buscar dados iniciais de um servidor simulado
export async function fetchInitialData(form, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, expenseAdd, uptadeTotal) {
    // Obtem os dados iniciais 
    const initialExpenses = await fetch('http://localhost:3000/expenses')
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao buscar dados iniciais:', error);
            return [];
        });

    // Processa os dados
    displayInitialData(initialExpenses, form, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, expenseAdd, uptadeTotal);
}

function displayInitialData(initialExpenses, form, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, expenseAdd, uptadeTotal) {
    // Verifica se há despesas iniciais
    if (!initialExpenses || initialExpenses.length === 0) {
        console.log("Nenhuma despesa inicial encontrada.");
        return;
    }

    console.log("Dados iniciais carregados:", initialExpenses);

    // Adiciona as despesas iniciais à lista
    initialExpenses.forEach(newExpense => {
        expenseAdd(newExpense, form, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, uptadeTotal);
    });

    console.log("Dados na lista:", initialExpenses);
}