document.addEventListener('DOMContentLoaded', function() {
  // Função para obter o parâmetro de pesquisa da URL
  function getParametroPesquisa() {
    var params = new URLSearchParams(window.location.search);
    return params.get('pesquisa');
  }

  // Função para criar o grid de resultados
  function criarGridResultados(titulo) {
    var gridContos = document.querySelector('.grid-contos');
    var contoDiv = document.createElement('div');
    contoDiv.classList.add('conto');
    
    // Recupera o conteúdo do localStorage
    var conteudo = localStorage.getItem('conteudoPesquisado');
    var capaUrl = localStorage.getItem('urlCapaPesquisada'); // Recupera a URL da capa do localStorage

    // Verifica se o conteúdo e a capaUrl existem
    if (conteudo && capaUrl) {
      contoDiv.innerHTML = `
        <a href="/Pre leitura/preler.html?conteudo=${encodeURIComponent(conteudo)}">
          <img src="${capaUrl}" alt="Capa do conto ${titulo}"/>
        </a>
        <span class="nome-conto">${titulo}</span>
      `;
      
      gridContos.appendChild(contoDiv);
    } else {
      // Se não existir, exibe uma mensagem de erro
      document.querySelector('.grid-contos').innerHTML = '<p>Erro ao carregar o conto.</p>';
    }
  }

  // Obter o termo de pesquisa da URL
  var pesquisa = getParametroPesquisa();
  
  // Criar o grid de resultados com base no termo de pesquisa
  if (pesquisa) {
    criarGridResultados(pesquisa);
  } else {
    // Se não houver termo de pesquisa, exibe uma mensagem de erro
    document.querySelector('.grid-contos').innerHTML = '<p>Nenhum conto foi pesquisado.</p>';
  }
});
