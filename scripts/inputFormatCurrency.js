export function inputFormatCurrency (amount, formarCurrencyBRL) {
    // Evento de input para formatar o valor monetário enquanto o usuário digita
    amount.oninput = () => {

        // Substituindo as letras por nada, aceitando apenas valor numérico
        let value = amount.value.replace(/\D/g, "")

        // Transforma o valor em centavos (ex: 150/100 = 1.5 que é equivalente a R$ 1,50)
        value = Number(value) / 100;

        // Atuliza o valor do input
        amount.value = formarCurrencyBRL(value)
    }
}