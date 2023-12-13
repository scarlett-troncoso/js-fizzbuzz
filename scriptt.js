console.log('Ciao');

const contEl = document.getElementById('container')
const rowEl = document.querySelector('.row');

//Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    //console.log(i)

    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    if (i % 3 === 0 && i % 5 === 0) { //questo era dopo degli altre due opzione ma invece deve essere scritto prima per questione del modo di leggere di js, altrimento non lo legge
        console.log('FizzBuzz', i);
        const fizzBuzz = `<div class= "col fizzbuzz" >FizzBuzz</div>`
        rowEl.innerHTML += fizzBuzz;
    
    //per i multipli di 3 stampi “Fizz”
    } else if (i % 3 === 0) {
        console.log('Fizz', i);
        const fizz = `<div class= "col fizz" >Fizz</div>`
        rowEl.innerHTML += fizz;

    //per i multipli di 5 stampi “Buzz”
    } else if (i % 5 === 0) {
        console.log('Buzz', i);
        const buzz = `<div class= "col buzz" >Buzz</div>`
        rowEl.innerHTML += buzz;

    } else {
        console.log(i);
        const boxes = `<div class= "col" >${i}</div>`
        rowEl.innerHTML += boxes
    }
    
}
