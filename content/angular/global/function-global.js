/* ==========================================
                Active Users 
   ==========================================   */
users = localStorage.getItem('datos');
objUserAdminRolOne = users
NameUser = JSON.parse(users)
if (users != null) {
  sesionActive = true;
}

resultOf = localStorage.getItem('resultOfSearch')
if ( resultOf !== "undefined") {
ObjresultJSON = JSON.parse(resultOf)
}
/* ==========================================
         Token Akuma 
   ========================================== */
function akumahello() {
  return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
}

/* ==========================================
          Time inactive 10 min   
   ==========================================   */
function logoutSesionInteracting() {
  var limitTime = 10 * 60000;
  var t;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout() {
    localStorage.clear();
    alertify.set('notifier', 'position', 'top-left');
    alertify.notify('se agoto el tiempo de inactividad  para el Usuario ' + NameUser[0].nombre);
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  }
  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(logout, limitTime)
  }
}


/* ==========================================
          Object Search advanced  
   ==========================================   */
if (ObjSearchAdvanced != " ") {
  ObjectSearchAdvanced = localStorage.getItem('ObjSearchAdvancedLocalStorage')
  ObjSearchJSON = JSON.parse(ObjectSearchAdvanced)
  function resulOfSearchAdvanced() {
    window.location = "/busqueda-Avanzada"
  }
} else {
  ObjectSearchAdvanced = null;
}

function myFunction() {
  alert("Upload data");
}

