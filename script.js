const botão = document.querySelector("button")
      botao.addEventListener ('click', curtir)

      function curtir(){
         let curtidas = document.querySelector("span")
         curtidas.textContent++;
      }


// BOTÃO DO TAMANHO
const tamanho = documento.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)

//FUNÇÃO
function aumentarFonte(){
fonte++;

}