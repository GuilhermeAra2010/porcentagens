function formatarMoeda(valor) {
  return valor.toFixed(2);
}

function obterPercentual(salario) {
  if (salario <= 1000.00) {
    return 20;
  }
  if (salario <= 3000.00) {
    return 15;
  }
  if (salario <= 8000.00) {
    return 10;
  }
  return 5;
}

function calcularAumento() {
  const campo = document.getElementById("salario");
  const salario = Number(campo.value);

  if (campo.value === "" || Number.isNaN(salario) || salario < 0) {
    alert("Digite um salário válido.");
    return;
  }

  const percentual = obterPercentual(salario);
  const aumento = salario * (percentual / 100);
  const novoSalario = salario + aumento;

  document.getElementById("novoSalario").textContent = formatarMoeda(novoSalario);
  document.getElementById("aumento").textContent = formatarMoeda(aumento);
  document.getElementById("porcentagem").textContent = percentual + " %";
}

document.getElementById("calcular").addEventListener("click", calcularAumento);

document.getElementById("salario").addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    calcularAumento();
  }
});