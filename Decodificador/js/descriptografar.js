function descriptar() {
  var txtColado = document.getElementById("entrada").value;

  if (txtColado != "") {
    var txtCripto = txtColado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("saida").value = txtCripto;
    document.getElementById("entrada").value = "";
    document.getElementById("alerta").innerHTML = "&nbsp";
  } else {
    document.getElementById("alerta").innerText =
      "Digite ou Cole Algo Para Descriptografar";
  }
}
