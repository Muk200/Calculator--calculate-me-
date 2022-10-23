//to-do: M+, M-, %, error
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) =>{
  button.addEventListener('click', (e)=> {
    
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
      
    }
    else if(e.target.innerHTML == '%'){
      function percentage(percent, total) {
        return ((percent/ 100) * total).toFixed(2)
      }
      string = function()
      document.querySelector('input').value = string;
      
    }
    else{
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})