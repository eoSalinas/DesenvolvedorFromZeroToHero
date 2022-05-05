// Faça um programa que leia a distância entre duas cidades (em km) e a velocidade utilizada para fazer o percurso (em km/h), calcule e imprima o tempo gasto na viagem.

//Route = Km; RouteVelovity = Km/h
function CalcTimeSpent(km, kmPerHour) {
    const route = km;
    let routeVelocity = kmPerHour
    let timeSpent = route/routeVelocity
    console.log(`O Tempo gasto na viagem é de aproximadamente ${timeSpent.toFixed(2)}`);
    
}

//Guarujá para Ilhabela são 135.7 Km
CalcTimeSpent(135.7, 50);