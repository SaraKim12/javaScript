const colorDiv = document.getElementById('box')
let counter = 0
const colorChange = ['red','orange','blue','yellow','black','brown','grey','pink','purple']
var interval

function começar(){
   
   interval = setInterval(()=>{
      counter ++
      if(counter == colorChange.length){
         counter = 0
      }
      colorDiv.style.background = colorChange[counter]
   }, 1000
   )
}

function parar(){
   clearInterval(interval)
}


