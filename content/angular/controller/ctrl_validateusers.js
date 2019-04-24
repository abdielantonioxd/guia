app.controller("ctrl_validateUsers", ["$scope", function ($scope) {
  $scope.data_app = "";
  $scope.sesionli = false;
  $scope.useradmin = true;
  $scope.messagehide = true;
  $scope.nameuser = "";
  $scope.firstuser = "";
  $scope.idRol = JSON.parse(users);
  /* get values of the input  */
  $scope.validateuser = function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email != "" && password != "") {
      var dataUser = {
        email: email,
        password: password
      }
      sendInformationUser(dataUser);
    }
  }

  function sendInformationUser(dataUser) {
    $.ajax({
      type: "POST",
      url: Urluser,
      timeout: 2000,
      data: dataUser,
      headers: {
        "TOKEN": akumahello()
      },
      success: function (data) {
        $scope.data_app = data.result.Database[0].Table.Row[0];
        $scope.message = data.result.Database[0].Table.Row[0].message;
        if ($scope.data_app.length != 0 && $scope.data_app[0].nombre != null) {
          let nameuser = $scope.data_app[0].nombre;
          let apellidosuser = $scope.data_app[0].apellido;
          let idusers = $scope.data_app[0].id;
          userExist(nameuser, apellidosuser, idusers)
        } else {
          userNotFound()
        }
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  function userExist(nameuser, apellidosuser, idusers) {
    $('#sesion').modal('hide');
    modalwelcome(nameuser, apellidosuser, idusers);
  }

  function userNotFound() {
    alertify.error('Usuario no Registrado Intente Nuevamente');
    $scope.messagehide = false;
    $scope.message = " ";
  }

  function modalwelcome(nameuser, apellidosuser, idusers) {
    $scope.sesionli = true;
    $scope.useradmin = false;
    $scope.nameuser = nameuser;
    $scope.firstuser = apellidosuser;
    alertify.set('notifier', 'position', 'top-left');
    alertify.notify(`Bienvenido ${nameuser}  ${apellidosuser}`, function () {
      $('#sesion').modal("hide")
    });
    objname.push({
      id: idusers,
      nombre: $scope.nameuser,
      apellido: $scope.firstuser
    });
    localStorage.setItem('datos', JSON.stringify(objname));
    userSesionExist();
    location.reload();
  };

  function userSesionExist() {
    if (users != [] && users != null) {
      data = JSON.parse(users);
      $scope.sesionli = true;
      $scope.useradmin = false;
      $scope.nameuser = data[0].nombre;
      $scope.firstuser = data[0].apellido
      $scope.idusuarios = data[0].id
    }
  }

  $scope.closeSesion = function () {
    data = JSON.parse(users);
    localStorage.clear();
    users = null;
    $scope.sesionli = false;
    $scope.useradmin = true;
    location.reload();
  }

  function UserinteractingActive() {
    if ($scope.nameuser != "") {
      logoutSesionInteracting();
    } else { }
  }

  $scope.rolAdmin = function () {
    if ($scope.idRol !== null) {
      $.ajax({
        type: "POST",
        url: "/api/user-exist/json",
        timeout: 2000,
        data: {
          id: $scope.idRol[0].id
        },
        success: function (data) {
          $scope.result = data.result.Database[0].Table.Row[0];
          var access = $scope.result[0].message
          validateRol(access);
        },
        error: function (textStatus, err) {
          console.log(textStatus + "" + err);
        }
      });

    } else {
      alertify.alert('Guia Look', 'Usted no tiene permiso para acceder a esta opcion ', function () {
        $('#sesion').modal("show")
      });
    }
  }

  function validateRol(access) {
    if (access === 1) {
      location.href = "/create-service"
    } else {
      alertify.alert('Guia Look', 'solo personas con acseso pueden ingresar a esta pagina !', function () {
        alertify.warning('Ok');
      });
    }
  }


  userSesionExist();
  UserinteractingActive()
}]);