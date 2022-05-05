/*
Faça um programa que leia o ano atual e o ano de nascimento de uma pessoa, calcule e imprima:
a idade dessa pessoa, em anos;
a idade dessa pessoa, em meses. 
*/

function CalcAge(yearOfBirth) {
    //Take the current year
    let year = new Date().getFullYear();
    //calc the age and month
    const age = year - yearOfBirth;
    const ageMonth = age*12
    console.log(`Você tem ${age} anos, um total de ${ageMonth} meses`);
}

CalcAge(2003);
