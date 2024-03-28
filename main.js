// Função para buscar os títulos dos livros e redirecionar para a página de resultados
function buscarLivros() {
  var termoPesquisa = document.getElementById('searchInput').value.toLowerCase();
  var contos = document.getElementsByClassName('nome-conto');
  var encontrado = false;

  for (var i = 0; i < contos.length; i++) {
    var contoAtual = contos[i];
    if (contoAtual.textContent.toLowerCase().includes(termoPesquisa)) {
      encontrado = true;
      // Armazena o título e a URL da capa no localStorage
      var titulo = contoAtual.textContent;
      var capaUrl = contoAtual.parentElement.querySelector('img').src;
      localStorage.setItem('tituloPesquisado', titulo);
      localStorage.setItem('urlCapaPesquisada', capaUrl);

      // Extrai o parâmetro 'conteudo' do atributo 'href' do link
      var linkConto = contoAtual.parentElement.querySelector('a').href;
      var conteudo = new URL(linkConto).searchParams.get('conteudo');
      localStorage.setItem('conteudoPesquisado', conteudo);

      // Redireciona para a página de resultados com o termo de pesquisa
      window.location.href = '/resultado/resultado.html?pesquisa=' + encodeURIComponent(titulo);
      break;
    }
  }

  if (!encontrado) {
    // Exibe uma mensagem de erro ou trata a ausência de resultados
    var resultadosPesquisa = document.getElementById('resultadosPesquisa');
    resultadosPesquisa.textContent = 'Conto não encontrado.';
  }
}

// Adiciona um ouvinte de eventos que detecta a tecla Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Impede que o formulário seja enviado
    buscarLivros();
  }
});

// Certifique-se de que o elemento com ID 'resultadosPesquisa' exista na sua página index.html
