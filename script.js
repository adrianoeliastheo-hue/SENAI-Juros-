function calcular() {
  const C = parseFloat(document.getElementById('capital').value);
  let i = parseFloat(document.getElementById('taxa').value) / 100;
  let t = parseFloat(document.getElementById('tempo').value);
  const tipoTempo = document.getElementById('tipoTempo').value;
  const tipoJuros = document.getElementById('tipoJuros').value;

  if (tipoTempo === 'anos') {
    t *= 12; // converte para meses
  }

  let M = 0;
  let J = 0;

  if (tipoJuros === 'simples') {
    J = C * i * t;
    M = C + J;
  } else {
    M = C * Math.pow(1 + i, t);
    J = M - C;
  }

  document.getElementById('resultado').innerHTML = `
    <strong>Montante Final:</strong> R$ ${M.toFixed(2)}<br>
    <strong>Juros:</strong> R$ ${J.toFixed(2)}
  `;
}
