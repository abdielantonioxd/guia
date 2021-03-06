app.controller("ctrl-update", ['$scope', 'Dataservice', function ($scope, Dataservice) {
  $scope.service = true;
  $scope.information = true;
  $scope.hours = true;
  $scope.method = true;
  $scope.production = true;
  $scope.imagePrincipal = true;
  $scope.hidePriview = false;
  $scope.imagesOne = true;
  $scope.imagesTwoHide = true;
  $scope.formImages = true;
  $scope.Users = objUserAdminRolOne;

  /**############################################## */
  //           SET VALUE  IN  FORM 
  /**############################################## */
  $scope.getDataService = function (data) {
    var dataService = data.data;
    $scope.imagePrincipal = true;
    loadData(dataService);
    loadHours(dataService);
    $scope.service = false;
    $scope.information = false;
    $scope.hours = false;
    $scope.method = false;
    $scope.formImages = false;
  }

  function loadData(dataService) {
    $scope.nameEstablishment = dataService.Nombre_establecimiento;
    $scope.id = dataService.establecimientID;
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
    UpdateImages();
    disabledButtons(false)
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
        $scope.$apply()
      },
      error: function (textStatus, err) {
        console.log(err + ' ' + textStatus)
      }
    });
  }

  /**############################################## */
  //            PAGINATION SERVICES 
  /**############################################## */
  function reloadDataEstablishment() {
    Dataservice.GetToAllEstablecimientoUpdate().then(function (response) {
      $scope.datosOfServices = response.data.result.Database[0].Table.Row[0];
      $scope.datapaginations = response.data.result.Database[0].Table.Row[0];

      $scope.NSelected = $scope.datapaginations
      $scope.currentPage = 0;
      $scope.pageSize = 6;
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
  }

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
        $scope.imagePrincipal = false;
        reloadDataEstablishment()
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se ha actualizado ' + `<b>${$scope.nameEstablishment}</b>`);
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
    datos.push({
      name: "id",
      value: $scope.id
    });
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
        reloadDataEstablishment()
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se ha actualizado el horario  del local ' + `<b>${$scope.nameEstablishment}</b>`);
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
        reloadDataEstablishment()
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se ha actualizado Los sericios  del local ' + `<b>${$scope.nameEstablishment}</b>`);
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
        reloadDataEstablishment()
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se ha actualizado el metod de pago del local ' + `<b>${$scope.nameEstablishment}</b>`);
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
        alertify.success('Se ha puesto en Produción el local ' + `<b>${$scope.nameEstablishment}</b>`);
        $("#Producion").prop('disabled', true);
        $("#QuitarProducion").prop('disabled', false);
        reloadDataEstablishment()
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
        alertify.success('Se ha quitado de  Produción el local ' + `<b>${$scope.nameEstablishment}</b>`);
        $("#Producion").prop('disabled', false)
        $("#QuitarProducion").prop('disabled', true);
        reloadDataEstablishment()
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }
  /**############################################## */
  //                 UPDATE APIS IMAGES
  /**############################################## */

  function UpdateImages() {
    $.ajax({
      type: "POST",
      url: UrlimagesUpdate,
      timeout: 2000,
      data: {
        id: document.getElementById("id").value
      },
      success: function (data) {
        $scope.images = data.result.Database[0].Table.Row[0];

        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se ha actualizado las Imagenes del local ' + `<b>${$scope.nameEstablishment}</b>`);
        document.getElementById("updateImagesOne").value = $scope.images[0].imagenesEstablecimiento;
        document.getElementById("updateImagesTwo").value = value = $scope.images[1].imagenesEstablecimiento;
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }
  $scope.SendupdateImages = function () {
    var data = {
      imagesOne: document.getElementById("updateImagesOne").value,
      imagesTwo: document.getElementById("updateImagesTwo").value,
      idOne: $scope.images[0].id,
      idTwo: $scope.images[1].id
    }

    $.ajax({
      type: "POST",
      url: UrlUpdateEstablishmentImages,
      timeout: 2000,
      data: data,
      success: function (data) {
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Imagenes Actualizadas Para el local  ' + `<b>${$scope.nameEstablishment}</b>`);
        $("#imagesTwoUpdate").hide();
        $("#imagesOne").hide()
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }
  if ($scope.Users != "" && $scope.Users != null) {
    // console.log("true");
  } else {
    location.href = "/"
    // console.log("");
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

  $scope.modal = (name, id) => {
    $("#deleteModal").modal("show");
    $scope.name = name;
    $scope.id = id;
  };

  $scope.deleteLocalGuialook = function (id) {
    deleteobj(id)
  }

  function deleteobj(id) {
    for (const key in $scope.datosOfServices) {
      if (id === $scope.datosOfServices[key].establecimientID) {
        delete $scope.datosOfServices[key];
        sendDelete(id)
      }
    }
  }

  function sendDelete(id) {
    $.ajax({
      type: "POST",
      url: UrlDeleteLocal,
      timeout: 2000,
      data: {
        id: id
      },
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se ha Eliminado el local ' + `<b>${$scope.nameEstablishment}</b> ` + ' de la base de datos ');
        $("#deleteModal").modal("hide");
        reloadDataEstablishment()
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  $scope.showFormImgPrincipal = function () {
    $scope.imagePrincipal = false;
    resetImages();
  }

  $scope.showImagesOne = function () {
    $scope.imagesOne = false;
    $("#imagesOne").show()
    preview.innerHTML = '';
  }

  $scope.showImagesTwo = function () {
    $scope.imagesTwoHide = false;
    $("#imagesTwoUpdate").show();
    preview.innerHTML = '';
  }

  reloadDataEstablishment();
}]);