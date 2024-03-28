document.addEventListener('DOMContentLoaded', function() {
      var conteudo = new URLSearchParams(window.location.search).get('conteudo');
      console.log('Conteúdo:', conteudo); // Isso deve imprimir o valor de 'conteudo' no console.

      var imagem = document.getElementById('capa');
      var texto = document.getElementById('titulo');
      var autor = document.getElementById('autor');
      var genero = document.getElementById('genero');
      var sinopse = document.getElementById('sinopse');
      var titulo = document.title;
      var classificacao = document.querySelector('.star-rating');

      // Adiciona o botão que leva para a terceira tela
      var linkLeitura = document.querySelector('a[href="/página de leitura/page.html"]');
      linkLeitura.href = '/página de leitura/page.html?conteudo=' + conteudo;

      function atualizarClassificacaoPorEstrelas(conteudo) {
        switch (conteudo) {
          case 'pascoal1':
            return '★★★☆☆ 3/5'; // 3 estrelas
          case 'retornogrob':
          case 'euescolhiesperar':
          case 'omagobombado':
            return '★★★★★ 5/5'; // 5 estrelas
          default:
            return '☆☆☆☆☆'; // 0 estrelas
        }
      }

      if (conteudo === 'pascoal1') {
        imagem.src = '/capas/ocasopascoa.png';
        texto.innerHTML = 'O Caso da Rua Pascoal (+12)';
        autor.innerHTML = 'Jester Triboulet';
        genero.innerHTML = 'Suspense👀; Noir🕵️';
        sinopse.innerHTML = 'Um advogado falido, um crime sem culpado e uma depressão profunda. Na primeira parte de "O Caso da Rua Pascoal", acompanhamos o início da jornada do Dr. Marcus em busca de provar sua inocência (ou não).';
        document.title = 'Writer Lunna – leia: O Caso da Rua Pascoal';
      } else if (conteudo === 'retornogrob') {
        imagem.src = '/capas/retornogrob.png';
        texto.innerHTML = 'O Retorno de Grob (+12)';
        autor.innerHTML = 'Sartius';
        genero.innerHTML = 'Fantasia🧙‍♂️; Terror☠️';
        sinopse.innerHTML = 'Um advogado falido, um crime sem culpado e uma depressão profunda. No primeiro volume de "O Caso da Rua Pascoal", acompanhamos o início da jornada do Dr. Marcus em busca de provar sua inocência (ou não).';
        document.title = 'Writer Lunna – leia: O Retorno de Grob';
      } else if (conteudo === 'euescolhiesperar') {
        imagem.src = 'https://i.postimg.cc/x8WFpZ8B/escolhiesperar-20240327043300.png';
        texto.innerHTML = 'Eu escolhi esperar. (L)';
        autor.innerHTML = 'Jenneviv';
        genero.innerHTML = 'Romance💏';
        sinopse.innerHTML = 'Uma jovem mulher prestes a se casar enfrenta o desaparecimento súbito de seu noivo soldado. Em meio à incerteza, ela prova a profundidade de seu amor e a força de sua devoção.';
        document.title = 'Writer Lunna – leia: Eu escolhi esperar';
      } else if (conteudo === 'omagobombado') {
    imagem.src = 'https://i.postimg.cc/ZKQn8Rgz/Mago-Bombado-Capa-1-1.png';
    texto.innerHTML = 'O Mago Bombado 💪 (+14)';
    autor.innerHTML = 'Alonso Allen';
    genero.innerHTML = 'Comédia😂; Fantasia🧙‍♂️';
    sinopse.innerHTML = 'No Reino da Magia, onde ter magia era tão comum quanto ter pelos na bunda, possuir capacidades mágicas era essencial! E nesse mundo, um jovem de quinze anos se preparava para fazer o exame de admissão na Academia Mágica de Magos do Reino da Magia. Seu nome era Renato, mas também era conhecido na vizinhança como… “Renato do fim da rua”. Acompanhe esta história, baseada em fatos reais, da jornada de Renato e seu mestre.';
    document.title = 'Writer Lunna – leia: O Mago Bombado';
}


  // Atualiza a classificação por estrelas
  classificacao.textContent = atualizarClassificacaoPorEstrelas(conteudo);
});
