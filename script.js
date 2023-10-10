document.addEventListener("DOMContentLoaded", function () {
let butao = document.getElementsByClassName("butao")[0]
let texto = document.getElementById('texto')
butao.addEventListener("click",function(){
   if(texto.value === "Pindamonhangaba"){
    alert("Felipe teixeira vai pra sepae")
   }
   else{
    alert("nao")
   }
})
})