// Um determinado funcionário recebe $8,00 por hora trabalhada. Faça um programa que leia a quantidade de horas que ele trabalhou, calcule e imprima o valor do seu salário.

// Employee
let employee001 = {
    name: "Marcos",
    dollarPerHour: 8.00,
    workingDay: 10
}

//Algorithm to calc wage
function Wage(employee) {
    const calcWage = employee.dollarPerHour*employee.workingDay;
    const calcWageMonthly = calcWage*30;
    console.log(`O ${employee.name} recebe um salário de $${calcWageMonthly}/mês ganhando $${calcWage}/dia`);
}

Wage(employee001);
