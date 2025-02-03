const count = document.querySelector('#counter');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const reset = document.querySelector('#reset');
const input = document.querySelector('.changeby');

increment.addEventListener('click', () => {
    const changevalue = parseInt(input.value)
   const value = parseInt(count.innerText) 
   count.innerText = value + changevalue

})

decrement.addEventListener('click', () => {
    const changevalue = parseInt(input.value)
    count.innerText =  parseInt(count.innerText) - changevalue
    if(parseInt(count.innerText) < 0){
        count.innerText = 0
    }
})

reset.addEventListener('click', () => {
    
    count.innerText = 0
})