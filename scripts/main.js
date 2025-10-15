// Importa os módulos necessários
import { formarCurrencyBRL } from "./formatCurrency.js";
import { expenseAdd } from "./addExpense.js";
import { uptadeTotal } from "./totalUptdate.js";

// Seleciona os elementos dos formulários
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

const expensesList = document.querySelector("ul")
const expenseLength = document.getElementById("expense-length")
const expensesTotal = document.getElementById("expensesTotal")

// Evento de input para formatar o valor monetário enquanto o usuário digita
amount.oninput = () => {

    // Substituindo as letras por nada, aceitando apenas valor numérico
    let value = amount.value.replace(/\D/g, "")

    // Transforma o valor em centavos (ex: 150/100 = 1.5 que é equivalente a R$ 1,50)
    value = Number(value) / 100;

    // Atuliza o valor do input
    amount.value = formarCurrencyBRL(value)
}

// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (e) => {
    // Previne o comportamento padrão do formulário
    e.preventDefault()

    // Cria um objeto com os detalhes da nova despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text, //Pega apenas a opção selecionada
        amount: amount.value,
        created_at: new Date()
    }

    // Chama a função para adicionar a nova despesa
    expenseAdd(newExpense, expensesList, form, expense, expenseLength, expensesTotal, formarCurrencyBRL, uptadeTotal)
}

// Evento de clique para remover uma despesa
expensesList.addEventListener("click", function (e) {
    //Verifica se o elemento clicado é o ícone de remoção
    if (e.target.classList.contains("remove-icon")) {
        // Obtém o elemento pai (a despesa) e o remove da lista
        const item = e.target.parentElement;

        // Remove o item da lista
        item.remove();
    }

    // Atualiza os totais após a remoção
    uptadeTotal(expensesList, expenseLength, expensesTotal, formarCurrencyBRL)

    // Foca no campo de despesa
    expense.focus()
})