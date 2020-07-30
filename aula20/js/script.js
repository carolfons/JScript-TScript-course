 function meuEscopo()
 {
      const form = document.querySelector('.form');
      const resultado = document.querySelector('.resultado');

      //criando o array
      const pessoas = [];


    function recebeEventoForm(evento)
    {
        evento.preventDefault(); // não envia os dados para atualizar

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        //criando o objeto e colocando no array
         pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        });
        
        //mostrando os valores
        console.log (pessoas);

        resultado.innerHTML += `<p>${nome.value},${sobrenome},${peso.value},${altura.value}</p>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
 }

 meuEscopo();