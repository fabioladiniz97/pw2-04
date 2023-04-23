import {Animal, Filhote, Furao, Hamster} from './index'

// Questão 01
console.log('\nQuestão 01')
const gato = new Animal('gato', ['carnívoro', 'solitário']);
gato.exibirAnimal(); // Animal: gato
gato.cadastrar('caça à noite');
console.log(gato.exibirCaracteristica()); // caça à noite

// Questão 02
console.log('\nQuestão 02')
const filhote = new Filhote(["Marrom", "Preto"], 5);

console.log("Cores:", filhote.cores);
console.log("Pelagem:", filhote.pelagem);
console.log("Tutor:", filhote.tutor);

filhote.adotar("João");

console.log("Tutor após adoção:", filhote.tutor);


// Questão 03
console.log('\nQuestão 03')
const meuFurao = new Furao();
const meuHamster = new Hamster();

console.log(meuFurao.comer('insetos')); // true
console.log(meuFurao.comer('frutas')); // false

meuFurao.cavar();
console.log(meuFurao.estaFeliz()); // true

console.log(meuHamster.comer('insetos')); // true
console.log(meuHamster.comer('frutas')); // true

meuHamster.correr();
console.log(meuHamster.estaFeliz()); // true
