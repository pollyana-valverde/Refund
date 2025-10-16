// Importa os módulos necessários
import { fetchInitialData } from "./initialData.js";
import { submitData } from "./submitData.js";

import { expenseAdd } from "./addExpense.js";
import { uptadeTotal } from "./totalUptdate.js";
import { removeExpense } from "./removeExpense.js";

import { formarCurrencyBRL } from "./formatCurrency.js";
import { inputFormatCurrency } from "./inputFormatCurrency.js";

// Seleciona os elementos dos formulários
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

const expensesList = document.querySelector("ul")
const expenseLength = document.getElementById("expense-length")
const expensesTotal = document.getElementById("expensesTotal")

// Chama a função para buscar e exibir os dados iniciais ao carregar a página
fetchInitialData(form, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, expenseAdd, uptadeTotal);

// Configura o evento de submit do formulário para adicionar novas despesas
submitData(form, amount, category, expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, expenseAdd, uptadeTotal );

// Configura o evento de clique para remover despesas
removeExpense(expense, expensesList, expenseLength, expensesTotal, formarCurrencyBRL, uptadeTotal);

// Formata o campo de valor enquanto o usuário digita
inputFormatCurrency(amount, formarCurrencyBRL);