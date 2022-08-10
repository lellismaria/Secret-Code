async function copiar() {
  let text = document.getElementById("saida").value;
  await navigator.clipboard.writeText(text);
  document.getElementById("saida").value = "";
  document.getElementById("entrada").value = text;
  document.getElementById("alerta").innerHTML = "&nbsp";
}

function limpar() {
  document.getElementById("saida").value = "";
  document.getElementById("entrada").value = "";
  document.getElementById("alerta").innerHTML = "&nbsp";
}
