function obterDados(){
    var nome = document.getElementById('inputname')
    var peso = document.getElementById('inputwidth')
    var altura = document.getElementById('inputheight')
    var obj = {
        nome: nome.value,
        peso: peso.value,
        altura: altura.value
    }
    var imc = obj.peso/(obj.altura*obj.altura)
   
    document.write(obj.nome + ', com o peso de '+ obj.peso +' e altura de '+ obj.altura + ' o seu   IMC é de '+ imc)
}