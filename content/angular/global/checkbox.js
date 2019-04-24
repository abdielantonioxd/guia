function disablecheckbox() {
  document.getElementById("Price1").disabled = true;
  document.getElementById("Price2").disabled = true;
  document.getElementById("Price3").disabled = true;
  document.getElementById("Price4").disabled = true;
}

function activecheckbox() {
  document.getElementById("Price1").disabled = false;
  document.getElementById("Price2").disabled = false;
  document.getElementById("Price3").disabled = false;
  document.getElementById("Price4").disabled = false;
  console.log("funcionando")
}

function disablecheckboxServ() {
  document.getElementById("Salones").disabled = true;
  document.getElementById("Barberias").disabled = true;
  document.getElementById("Estética").disabled = true;
  document.getElementById("Clínicas Dentales").disabled = true;
  document.getElementById("Functional Training").disabled = true;
  document.getElementById("Cejas y Pestañas").disabled = true;
  document.getElementById("Unas").disabled = true;
  document.getElementById("Depilación").disabled = true;
  document.getElementById("Masajes y Spa").disabled = true;
}

function activecheckboxServ() {
  document.getElementById("Salones").disabled = false;
  document.getElementById("Barberias").disabled = false;
  document.getElementById("Estética").disabled = false;
  document.getElementById("Clínicas Dentales").disabled = false;
  document.getElementById("Functional Training").disabled = false;
  document.getElementById("Cejas y Pestañas").disabled = false;
  document.getElementById("Uñas").disabled = false;
  document.getElementById("Depilación").disabled = false;
  document.getElementById("Masajes y Spa").disabled = false;
}