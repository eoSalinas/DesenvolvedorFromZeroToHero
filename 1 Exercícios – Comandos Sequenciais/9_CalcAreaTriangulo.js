//Faça um programa que calcule a área de um triângulo após ler as dimensões da base e da altura

//Area = base*altura/2

function CalcTriangleArea(triangleBase, triangleHeight) {
    const area = (triangleBase*triangleHeight)/2;
    area.toFixed(2);
    console.log(`A àrea deste triangulo é ${area}`);
}

CalcTriangleArea(15, 35);