const numero = Number(prompt("Digite um número")); // number vai fazer que retorne um número e não string
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto'); // em HTML éimportante ter apenas um elemento por id

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> A raíz quadrada é: ${numero**0.5}.</p>`; //elevado a 0,5
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

