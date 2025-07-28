
function mostrarMedidas() {
  const produto = document.getElementById('produto').value;
  const area = document.getElementById('medidas-area');
  const linear = document.getElementById('medidas-linear');

  if (produto === 'linear') {

    area.style.display = 'none';
    linear.style.display = 'block';

  } else if (produto === 'area') {

    linear.style.display = 'none';
    area.style.display = 'block';

  } else {

    // caso escolha "Selecione..."
    area.style.display = 'none';
    linear.style.display = 'none';

  }
}


function mostrarResultado() {
  const resultado = document.getElementById('resultado');

  resultado.style.display = 'block';
}
