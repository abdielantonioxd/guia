app.controller("ctrl_info", ['$scope', 'Dataservice', function ($scope, Dataservice) {
  $scope.dataInfo = [];
  function ShowdataInfo() {
    dataurl = Dataservice.GetFilter();
    $.ajax({
      type: "POST",
      url: Urlinfo,
      timeout: 2000,
      data: {
        _Id: dataurl.Establecimiento
      },
      success: function (data) {
        var datosinfo = data.result.Database[0].Table.Row[0];
        var horario = datosinfo[0].establecimirntoID;
        $scope.mapaUbication = datosinfo[0].mapa;
        showInfo(datosinfo, horario);
      },
      error: function (textStatus, err) {
        console.log(err + ' ' + textStatus)
      }
    });
  }

  function hoursLocal(horario) {
    $.ajax({
      type: "POST",
      url: UrlHorario,
      timeout: 2000,
      data: {
        id: horario
      },
      success: function (data) {
        var horarioApertura = data.result.Database[0].Table.Row[0];
        console.log(horarioApertura)

        showhorario(horarioApertura);
      },
      error: function (textStatus, err) {
        console.log(err + ' ' + textStatus)
      }
    });
  }

  function showInfo(datosinfo, horario) {
    $scope.dataInfo = datosinfo;
    obj = datosinfo[0].methodpay;
    $scope.payMethod = obj.split(",", 6);
    objservice = datosinfo[0].servicios;
    $scope.servicesaditional = objservice.split(",", 12);
    recomendation();
    hoursLocal(horario);
  }

  function showhorario(horarioApertura) {
    $scope.horario = horarioApertura;
  }

  function recomendation() {
    Dataservice.Recomendate().then(function (data) {
      $scope.recomendate = data.data.result.Database[0].Table.Row[0]
    })
  }

  ShowdataInfo();
  $scope.dia = Dataservice.GetDay();
}])