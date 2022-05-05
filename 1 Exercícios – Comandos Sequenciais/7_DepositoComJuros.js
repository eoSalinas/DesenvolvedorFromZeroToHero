//Faça um programa que leia o valor de um depósito e o valor da taxa de juros. Calcule e imprima o valor do rendimento e o valor total depois do rendimento

//rendimento = deposito X taxa / 100
//total = deposito + rendimento


function InvestimentDeposit(depositAmount) {
    let yield = (depositAmount*2.00)/100;
    let total = depositAmount+yield;
    //treatment
    yield.toFixed(2)
    total.toFixed(2)
    //ShowMeTheResults
    console.log(`Você investiu R$${depositAmount}`);
    console.log(`Seu rendimento foi de R$${yield}`);
    console.log(`Totalizando R$${total}`);
}

InvestimentDeposit(1653.50);