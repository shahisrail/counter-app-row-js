// select dom elements
const counterEl = document.getElementById('counter');
const incromentEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// inital state 
let count = 0 ;

// event liseners

incromentEl.addEventListener('click',() =>{
 count ++
 counterEl.innerText = count
})
decrementEl.addEventListener('click',() =>{
 count --
 counterEl.innerText =  count
})