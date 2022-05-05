//Faça um programa que leia as notas que um aluno obteve nas três avaliações de uma determinada disciplina e calcule a nota final desse aluno, somando os valores lidos.

function calcAverage(av1, av2, av3) {
    const total = av1 + av2 + av3;
    const media = total / 3;

    console.log(`A nota final do aluno foi: ${total}`);
    console.log(`A media final do aluno foi: ${media}`);
}

calcAverage(10, 5, 6);