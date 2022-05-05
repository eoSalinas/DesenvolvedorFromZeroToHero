//Faça um programa que leia o salário de um funcionário, calcule e imprima o novo salário sabendo-se que este sofreu um aumento de 25%

//aumento = 25 x salario / 100
//novo salario = aumento + salario

function NewWage(wage) {
    const increse = (25*wage)/100;
    const newWage = increse + wage;
    console.log(`O seu sálario sofreu um aumento de 25%, subindo de ${wage} para ${newWage.toFixed(2)}`);
}


NewWage(3000.28);