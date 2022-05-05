// Faça um programa que leia o preço de uma mercadoria e a quantidade comprada, calcule e imprima o valor da compra.

let mariaShoppingCart = {
    produto: 'Chiclete',
    preco: 25.0,
    qtd: 5
}

//Algorithm to sum the product and qtd
function Checkout(shoppingCart) {
    let purchasePrice = shoppingCart.qtd*shoppingCart.preco;
    console.log(`Valor da compra: R$${purchasePrice}`)
}

Checkout(mariaShoppingCart);