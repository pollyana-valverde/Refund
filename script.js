// Seleciona os elementos dos formulários
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

amount.oninput = () => {

    // Substituindo as letras por nada, aceitando apenas valor numérico
    let value = amount.value.replace(/\D/g, "")

    // Transforma o valor em centavos (ex: 150/100 = 1.5 que é equivalente a R$ 1,50)
    value = Number(value) / 100;

    // Atuliza o valor do input
    amount.value = formarCurrencyBRL(value)
}

function formarCurrencyBRL(value) {

    // Formata o valor no padrão BRL
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Retorna o valor formatado
    return value
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

}