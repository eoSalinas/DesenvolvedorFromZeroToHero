//Faça um programa que leia dois números inteiros, calcule e imprima o resto da divisão do primeiro pelo segundo.

function RestOfDivision(n1, n2) {
    const rest = n1%n2;
    console.log(`O Resto da divisão entre ${n1} e ${n2} é ${rest}`);
}

RestOfDivision(10, 3);