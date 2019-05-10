app.controller("ctrl-update", ['$scope', 'Dataservice', function ($scope, Dataservice) {
  $scope.service = true;
  $scope.information = true;
  $scope.hours = true;
  $scope.method = true;
  $scope.production = true;
  $scope.Users = objUserAdminRolOne;
  /**############################################## */
  //           SET VALUE  IN  FORM 
  /**############################################## */
  $scope.getDataService = function (data) {
    var dataService = data.data;
    loadData(dataService);
    loadHours(dataService);
    $scope.service = false;
    $scope.information = false;
    $scope.hours = false;
    $scope.method = false;
  }
  function loadData(dataService) {
    $scope.id = dataService.idestablecimiento;
    document.getElementById("id").value = dataService.idestablecimiento;
    document.getElementById("nombre").value = dataService.Nombre_establecimiento;
    document.getElementById("telefono").value = dataService.Telefono;
    document.getElementById("direccion").value = dataService.Direccion;
    document.getElementById("precio").value = dataService.Precio;
    document.getElementById("promocion").value = dataService.Promociones;
    document.getElementById("mapa").value = dataService.mapa;
    document.getElementById("nameImagen").value = dataService.imagenPrincipal;
    document.getElementById("PrincipalService").value = dataService.servicioPrincipal;
    document.getElementById("services").value = dataService.servicios;
    document.getElementById("methodPay").value = dataService.methodpay;
    FuncValidateProduction(dataService);
  }

  /**############################################## */
  //                LOAD HOURS SERVICE 
  /**############################################## */
  function loadHours(dataService) {
    $.ajax({
      type: "POST",
      url: UrlHorario,
      timeout: 2000,
      data: {
        id: dataService.idestablecimiento
      },
      success: function (data) {
        var horarioApertura = data.result.Database[0].Table.Row[0];
        $scope.hoursLocal = horarioApertura;
        console.log($scope.hoursLocal)
        $scope.$digest();
      },
      error: function (textStatus, err) {
        console.log(err + ' ' + textStatus)
      }
    });
  }

  /**############################################## */
  //            PAGINATION SERVICES 
  /**############################################## */
  Dataservice.GetToAllEstablecimientoUpdate().then(function (response) {
    $scope.datosOfServices = response.data.result.Database[0].Table.Row[0];
    $scope.datapaginations = response.data.result.Database[0].Table.Row[0];
    console.log($scope.datosOfServices)
    $scope.NSelected = $scope.datapaginations
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.pages = [];
    $scope.pages.length = 0;
    var ini = $scope.currentPage - 10;
    var fin = $scope.currentPage + 10;
    if (ini < 1) {
      ini = 1;
      if (Math.ceil($scope.datapaginations.length / $scope.pageSize) > 10)
        fin = 5;
      else
        fin = Math.ceil($scope.datapaginations.length / $scope.pageSize);
    } else {
      if (ini >= Math.ceil($scope.datapaginations.length / $scope.pageSize) - 10) {
        ini = Math.ceil($scope.datapaginations.length / $scope.pageSize) - 10;
        fin = Math.ceil($scope.datapaginations.length / $scope.pageSize);
      }
    }
    if (ini < 1) ini = 1;
    for (var i = ini; i <= fin; i++) {
      $scope.pages.push({
        num: i
      });
    }

    if ($scope.currentPage >= $scope.pages.length)
      $scope.currentPage = $scope.pages.length - 1;

    $scope.setPage = function (index) {
      $scope.currentPage = index - 1;
    };
  })

  /**############################################## */
  //                 UPDATE APIS ONE
  /**############################################## */

  $scope.updateEstablishment = function () {
    var datos = {
      id: document.getElementById("id").value,
      name: document.getElementById("nombre").value,
      direction: document.getElementById("direccion").value,
      price: document.getElementById("precio").value,
      tel: document.getElementById("telefono").value,
      mapa: document.getElementById("mapa").value,
      promociones: document.getElementById("promocion").value,
      imagenPrincipal: document.getElementById("nameImagen").value,
    }
    sendUpdateEstablishment(datos);
  }

  function sendUpdateEstablishment(datos) {
    $.ajax({
      type: "POST",
      url: UrlUpdateEstablishment,
      timeout: 2000,
      data: datos,
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  /**############################################## */
  //                 UPDATE APIS THWO
  /**############################################## */

  $scope.updateHour = function () {
    var datos = $('#horarios').serializeArray()
    datos.push({ name: "id", value: $scope.id });
    var obj = new Object();
    for (const i in datos) {
      obj[datos[i].name] = datos[i].value;
    }

    sendUpdateHour(obj)
  }
  function sendUpdateHour(obj) {
    $.ajax({
      type: "POST",
      url: UrlUpdateHour,
      timeout: 2000,
      data: obj,
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  /**############################################## */
  //                 UPDATE APIS THREE
  /**############################################## */

  $scope.UpdateServices = function () {
    var datos = {
      servicePrincipal: document.getElementById("PrincipalService").value,
      services: document.getElementById("services").value,
      id: $scope.id
    }
    sendUpdateServices(datos)
  }
  function sendUpdateServices(datos) {
    $.ajax({
      type: "POST",
      url: UrlUpdateService,
      timeout: 2000,
      data: datos,
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }


  /**############################################## */
  //                 UPDATE APIS FOUR
  /**############################################## */

  $scope.updateMethodPay = function () {
    var datos = {
      methodPay: document.getElementById("methodPay").value,
      id: $scope.id
    }
    sendMethodPay(datos)
  }

  function sendMethodPay(datos) {
    $.ajax({
      type: "POST",
      url: UrlMethodPay,
      timeout: 2000,
      data: datos,
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  $scope.ProductionEstablishment = function () {
    $.ajax({
      type: "POST",
      url: UrlProductionService,
      timeout: 2000,
      data: {
        prod: 1,
        id: $scope.id
      },
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        $("#Producion").prop('disabled', true);
        $("#QuitarProducion").prop('disabled', false);
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  $scope.ProductionEstablishmentQuit = function () {
    $.ajax({
      type: "POST",
      url: UrlQuitProductionService,
      timeout: 2000,
      data: {
        prod: 0,
        id: document.getElementById("id").value
      },
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        $("#Producion").prop('disabled', false)
        $("#QuitarProducion").prop('disabled', true);
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  if ($scope.Users != "" && $scope.Users != null) {
    console.log("permiso");
  } else {
    location.href = "/"
    console.log("no");
  }
  function FuncValidateProduction(dataService) {
    if (dataService.prod != 1) {
      $("#Producion").prop('disabled', false);
    } else {
      $("#Producion").prop('disabled', true);
    }
    if (dataService.prod === 1) {
      $("#QuitarProducion").prop('disabled', false);
    } else {
      $("#QuitarProducion").prop('disabled', true);
    }
  }

}]);