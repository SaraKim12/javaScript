function change1(){
    document.getElementById('quadro').src = 'L.A.jpg'
    document.body.style.backgroundImage = 'linear-gradient(45deg, black, #C98991)'
    setTimeout('change2()', 2000)
}

function change2(){
    document.getElementById('quadro').src = 'paris.jpg'
    document.body.style.backgroundImage = 'linear-gradient(45deg, black, #303C56)'
    setTimeout('change3()', 2000)
}

function change3(){
    document.getElementById('quadro').src = 'NY.jpg'
    document.body.style.backgroundImage = 'linear-gradient(45deg, black, #C2704B)'
    setTimeout('change4()', 2000)
}

function change4(){
    document.getElementById('quadro').src = 'tokyo.jpg'
    document.body.style.backgroundImage = 'linear-gradient(45deg, black, #E5087C)'
    setTimeout('change1()', 2000)
}

