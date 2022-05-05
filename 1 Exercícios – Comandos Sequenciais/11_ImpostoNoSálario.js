//Faça um programa que leia o salário de um funcionário, calcule e imprima o valor do imposto de renda a ser pago, sabendo que o imposto equivale a 5% do salário.

// imposto = 5x salario / 100


function CalcTax(wage) {
    const tax = (5*wage)/100;
    console.log(`O Imposto de renda a ser pago é de R$${tax.toFixed(2)}`);
}

CalcTax(3250.90);