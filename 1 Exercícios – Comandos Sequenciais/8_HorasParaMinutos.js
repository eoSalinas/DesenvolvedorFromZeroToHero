//Faça um programa que leia um determinado horário (hora e minutos separados), calcule e imprima o valor correspondente em minutos (ex: 10h e 30m = 630 minutos).

function CalcHourToMinute(hour, minute) {
    let convertHourToMinute = hour*60;
    let sumMinute = convertHourToMinute + minute;
    console.log(`${hour}h e ${minute}m = ${sumMinute} minutos.`)
}

CalcHourToMinute(10, 30);