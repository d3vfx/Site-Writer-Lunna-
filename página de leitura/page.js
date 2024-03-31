document.addEventListener('DOMContentLoaded', function() {
  var conteudo = new URLSearchParams(window.location.search).get('conteudo');
  var iframeConto = document.getElementById('conto');
  var elementoContainer = document.querySelector('.container');

  var livros = {
    'pascoal1': {
      titulo: 'O Caso da Rua Pascoal (+12)',
      descricao: '11hHmhj8g8PZqUM8BuS2WftwyDupsDjioHeCBOBeHn8U',
      corBorda: '#9390FF'
    },
    'retornogrob': {
      titulo: 'O Retorno de Grob',
      descricao: '1DcM3ObgG8dgXZeFoAszZbit3M0dkw_JR',
      corBorda: '#90FF98'
    },
    'euescolhiesperar': {
      titulo: 'Eu escolhi esperar',
      descricao: '1L1-BmeCIXzJFr14ssWBqwmI68S68Yt9qqFuWsM4oZtU',
      corBorda: '#9390FF'
    },
    'omagobombado': {
      titulo: 'O Mago Bombado',
      descricao: '1PRMKHMT6nJqe0UeEMra2DvNbdC355WKf',
      corBorda: '#FFA44C'
    },
    // ... outros livros com suas respectivas cores ...
  };

  // Função para mudar a cor da borda com base no livro atual
  function mudarCorBorda(conteudo) {
    if(livros[conteudo]) {
      elementoContainer.style.borderColor = livros[conteudo].corBorda;
      iframeConto.src = "https://docs.google.com/document/d/" + livros[conteudo].descricao + "/edit?usp=drivesdk&embedded=true";
    } else {
      console.log('Livro não encontrado');
      // Você pode adicionar uma mensagem de erro ou lógica adicional aqui
    }
  }

  // Aplica a cor da borda quando a página carrega
  mudarCorBorda(conteudo);
});
