// ABRIR E FECHAR POPUP
const botaoAbrirPopup = document.getElementById("abrir-popup");
const botaoFecharPopup = document.getElementById("fechar-popup");
const popup = document.getElementById("popup");

botaoAbrirPopup.addEventListener("click", function() {
  popup.style.display = "block";
});

botaoFecharPopup.addEventListener("click", function() {
  popup.style.display = "none";
});


// TEXTAREA
// seleciona o formulário
const form = document.querySelector("#myForm");

// adiciona um listener para o evento 'submit'
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const textarea = document.querySelector("#conteudo");
  const text = textarea.value;

  const textoSemQuebrasDeLinha = text.replace(/\n/g, " ");

  const palavras = textoSemQuebrasDeLinha.split(" ");

  let resultado = "";

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].startsWith("PANDU")) {
      resultado += palavras[i] + " ";
    }
  }

  const textoComQuebrasDeLinha = resultado.replace(/ /g, "\n");

  document.getElementById('resultado').innerText = textoComQuebrasDeLinha

  const linhas = textoComQuebrasDeLinha.split("\n");
  document.getElementById('quantidade').innerHTML = (linhas.length) - 1;

  console.log(linhas.length)
  if(linhas.length <= 1){
    alert("Insira um conteúdo válido \uD83D\uDE21")
  }



  // BOTAO DE COPIAR O TEXTO
  // paragrafo = #resultado
  const button = document.querySelector("#copiarTexto");

  button.addEventListener("click", function() {
    // cria um elemento temporário para armazenar o texto
    const tempElement = document.createElement("textarea");
    tempElement.value = textoComQuebrasDeLinha

    // adiciona o elemento temporário à página
    document.body.appendChild(tempElement);

    // seleciona o texto dentro do elemento temporário
    tempElement.select();

    // copia o texto selecionado para a área de transferência
    document.execCommand("copy");

    // remove o elemento temporário da página
    document.body.removeChild(tempElement);

    // exibe uma mensagem de confirmação
    alert("Texto copiado para a área de transferência!");
  });
});
















