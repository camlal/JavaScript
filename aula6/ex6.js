const cartão1  = {
    nome: 'Catarina',
    saldo: 50000,
    banco: 'Itaú',
};

const cartao2 = cartão1;

console.log(cartão1);
console.log(cartao2);

cartao2.saldo = 10;
console.log(cartao2);

