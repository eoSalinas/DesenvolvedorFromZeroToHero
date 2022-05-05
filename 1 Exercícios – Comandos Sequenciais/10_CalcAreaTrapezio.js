//Faça um programa que calcule a área de um trapézio após ler as dimensões das bases e da altura.

//area = (base maior + base menor) X Altura / 2

function CalcTrapezeoArea(baseMaior, baseMenor, altura) {
    const area = ((baseMaior+baseMenor)*altura)/2;
    console.log(`A àrea do trapézio é ${area}`);
}

CalcTrapezeoArea(10, 20, 50);