// Seleciona os elementos dos formulários
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

const expensesList = document.querySelector("ul")

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

// Chama a função para adicionar a nova despesa
    expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
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

        console.log(expenseItem)

        // Adiciona o elemento na lista
        expensesList.appendChild(expenseItem)

    } catch (error) {
        alert("Não foi possível adicionar a despesa.")
        console.log(error)
    }
}