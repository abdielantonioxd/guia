app.controller("ctrl-create", ['$scope', function ($scope) {
  /* ==========================================
              Global var  
     ==========================================   */
  $scope.ubication = objectUbication;
  $scope.weekdays = objectweekdays;
  $scope.Services = objServices;
  $scope.daysweek = daysweek;
  $scope.Price = objPrice;
  $scope.methodPay = methodPay;
  $scope.subservice = "";
  $scope.price = "";
  $scope.service = "";
  $scope.serviceoptional = true;
  $scope.personalInformation = false;
  $scope.typeService = true;
  $scope.imageslocal = true;
  $scope.methodP = true;
  $scope.addHours = true;
  $scope.responseUser = true;
  $scope.personalinfomationdone = true;
  $scope.servicedone = true;
  $scope.lunesViernes = false;
  $scope.lunesSabado = false;
  $scope.Personalisation = false;
  $scope.imgOfLocal = objImagesLocal;
  $scope.Users = objUserAdminRolOne;
  $scope.Horario = horario;
  $scope.uploadImagesServer = false
  $scope.edit = true
  $scope.buttonEdit = true;
  $scope.HourDay = true;
  $scope.DoneEstablishment = true;
  /* ==========================================
              Get subServices  
     ==========================================   */
  $scope.showChecboxSubservic = function (Serv) {
    switch (Serv) {
      case "Salones":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServicesSalones;
        break;
      case "Barberias":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceBarberia;
        break;
      case "Estética":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceEstetica;
        break;
      case "Clínicas Dentales":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceClinicas
        break;
      case "Functional Training":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceCejasPesta
        break;
      case "Cejas y Pestañas":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceCejasPesta
        break;
      case "Uñas":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceUñas
        break;
      case "Depilación":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceDepilacion
        break;
      case "Masajes y Spa":
        $scope.serviceoptional = false;
        $scope.subservice = objsubServiceMasajesEspa
        break;
      default:
        alertify.set('notifier', 'position', 'top-left');
        alertify.error('A ocurrido un error, sus datos no se estan Guardando Correctamente  Vuelva a Intentarlos o contacte al administrador de este sitio.');
        break;
    }
  }
  /* ==========================================
               get to all data part 1  
    ==========================================   */
  $scope.obtainData = function (obj) {
    Name = document.getElementById("Name_local").value;
    telefono = document.getElementById("Tel").value;
    mapa = document.getElementById("mapa").value;
    direction = obj.ubication.selectedOption.name + "," + document.getElementById("idInformation").value;
    $scope.imagesP = imagesP[0].images;
    promotion = "";
    Name && telefono && direction && $scope.imagesP != "" ?
      responseTrue() : responseFalse();
    function responseTrue() {
      $scope.responseUser = false
      $scope.validateresponseUser('yes')
    }
    function responseFalse() {
      alertify.set('notifier', 'position', 'top-right');
      alertify.error('Todos los Campos son Obligatorios')
    }
  }

  $scope.validateresponseUser = function (opc) {
    if (opc == "yes") {
      objdataform.push(
        infoServ = [{
          "name": Name,
          "direction": direction,
          "telefono": "507" + telefono,
          "mapa": mapa,
          "promociones": "",
          "price": $scope.price,
          "imagenPrincipal": $scope.imagesP
        }]
      );
      var dataUsers = objdataform[0];
      $scope.personalInformation = true;
      $scope.typeService = false;
      InserDataPersonal(dataUsers);
    } else { }
  }
  $scope.getIdPrice = function (obj) {
    Price = obj.p.Price;
    $scope.price = Price;
  }
  /* ==========================================
                get data subservices 
     ==========================================   */
  $scope.getsubservice = function (obj) {
    $scope.buttonEdit = false;
    var subServ = obj.subserv.Service;
    $scope.subService = subServ
    objservicesgetothers.push($scope.subService)
  }

  /* ==========================================
            Push service and Subservices  
     ==========================================   */
  $scope.pushServiceAndSub = function () {
    objservicesget.push({
      "servicioPrincipal": $scope.service,
      "othersServ": objservicesgetothers
    })
    $scope.typeService = true;
    $scope.imageslocal = false;
    insertServise(objservicesget);
  }
  /* ==========================================
              get Services  
    ==========================================   */
  $scope.getIdServ = function (obj) {
    $scope.buttonEdit = true;
    var Serv = obj.s.Service;
    $scope.service = Serv
    $scope.showChecboxSubservic(Serv)
  }
  /* ==========================================
                edit Service  
     ==========================================   */
  $scope.EditServ = function () {
    $scope.service = "";
    activecheckboxServ()
  }
  /* ==========================================
               Validate Images
     ==========================================   */
  $scope.ValidateImages = function () {
    if (objImagesLocal[0].imagenlocal.imageslocalOne && objImagesLocal[0].imagenlocal.imageslocalTwo != "") {
      $scope.imageslocal = true;
      $scope.methodP = false;
      $.ajax({
        type: "POST",
        url: urlInserImages,
        timeout: 2000,
        data: {
          imgOne: objImagesLocal[0].imagenlocal.imageslocalOne,
          imgTwo: objImagesLocal[0].imagenlocal.imageslocalTwo,
          id: $scope.idUser[0].id
        },
        success: function (data) {
          data_app = data;
        },
        error: function (textStatus, err) {
          console.log(textStatus + "" + err);
        }
      });
    }
  }

  /*
   #####################################################################################
   #                    Method of pay                                                  #
   #####################################################################################
  */
  $scope.getmethodPay = function (obj) {
    var method = obj.Pay.method;
    objMethodPay.push(method)
  }

  $scope.sendMethod = function () {
    $scope.methodP = true;
    $scope.addHours = false;
    insertMethodPay(objMethodPay)
  }


  /*
   #####################################################################################
   #                     get data  for table 3  Hours                                  #
   #####################################################################################
  */
  $scope.validateBtnHour = function (btn) {
    switch (btn) {
      case 'LV':
        $scope.lunesViernes = false;
        $scope.lunesSabado = true;
        $scope.Personalisation = true;
        break;
      case 'LS':
        $scope.lunesSabado = false;
        $scope.Personalisation = true;
        $scope.lunesViernes = true;
        break;
      case 'P':
        $scope.lunesSabado = true;
        $scope.Personalisation = false;
        $scope.lunesViernes = true;
        break;
      case 'all':
        $scope.lunesSabado = false;
        $scope.Personalisation = false;
        $scope.lunesViernes = false;
        break;
      default:
        break;
    }
  }
  /* ==========================================
                get values week days 
     ==========================================   */
  $scope.octainselectweekdays = function (obj) {
    open = document.getElementById(`openMonday${obj}_id`).value
    close = document.getElementById(`closeMonday${obj}_id`).value
    switch (obj) {
      case 'V':
        LunesVienes();
        setTimeout(() => {
          InsertHour();
        }, 2000);
        $scope.addHours = true
        $scope.uploadImagesServer = false
        $scope.DoneEstablishment = false;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        break;
      case 'S':
        LunesSabado();
        setTimeout(() => {
          InsertHour();
        }, 2000);
        $scope.addHours = true
        $scope.DoneEstablishment = false;
        $scope.uploadImagesServer = false
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        break;
      default:
        alert("A ocurrido un eror contacte al admin de la pagina ")
        break;
    }
  }

  $scope.inputHours = function (obj) {
    day = obj.d.id;
    HoursA = document.getElementById(obj.d.id_HoursA).value;
    HoursC = document.getElementById(obj.d.id_HoursC).value;
    var HourOpen = `${HoursA}:00`;
    var HourClose = `${HoursC}:00`;
    objHoursEstablishment.push({
      horario: {
        "dia": day,
        "horaEntrada": HourOpen,
        "horaCierre": HourClose
      }
    })
    // console.log(" dia :  " + day + " hora de netrada : " + HourOpen + "  hora de salida: " + HourClose);
  }
  /* ==========================================
                Send Hours  
     ==========================================   */
  $scope.sendHour = function () {
    var horario = {
      "Lunes": objHoursEstablishment[0].horario.dia,
      "L_apertura": objHoursEstablishment[0].horario.horaEntrada + ":00",
      "L_cierre": objHoursEstablishment[0].horario.horaCierre + ":00",
      "Martes": objHoursEstablishment[1].horario.dia,
      "M_apertura": objHoursEstablishment[1].horario.horaEntrada + ":00",
      "M_cierre": objHoursEstablishment[1].horario.horaCierre + ":00",
      "Miercoles": objHoursEstablishment[2].horario.dia,
      "Mi_apertura": objHoursEstablishment[2].horario.horaEntrada + ":00",
      "Mi_cierre": objHoursEstablishment[2].horario.horaCierre + ":00",
      "Jueves": objHoursEstablishment[3].horario.dia,
      "J_apertura": objHoursEstablishment[3].horario.horaEntrada + ":00",
      "J_cierre": objHoursEstablishment[3].horario.horaCierre + ":00",
      "Viernes": objHoursEstablishment[4].horario.dia,
      "V_apertura": objHoursEstablishment[4].horario.horaEntrada + ":00",
      "V_cierre": objHoursEstablishment[4].horario.horaCierre + ":00",
      "Sabado": objHoursEstablishment[5].horario.dia,
      "S_apertura": objHoursEstablishment[5].horario.horaEntrada + ":00",
      "S_cierre": objHoursEstablishment[5].horario.horaCierre + ":00",
      "Domingo": objHoursEstablishment[5].horario.dia,
      "D_apertura": objHoursEstablishment[5].horario.horaEntrada + ":00",
      "D_cierre": objHoursEstablishment[5].horario.horaCierre + ":00",
      id: $scope.idUser[0].id
    }

    $.ajax({
      type: "POST",
      url: UrlInsertHour,
      timeout: 2000,
      data: horario,
      success: function (data) {
        data_app = data.result.Database[0].Table.Row[0];
        $scope.idUser = data_app;
        $scope.DoneEstablishment = false;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        doneInsert()
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }
  /*
    #####################################################################################
    #                     API INSERT DATA IN DATABASE                                   #
    #####################################################################################
   */
  function doneInsert() {
    $scope.addHours = true;
    $scope.uploadImagesServer = false
  }
  if ($scope.Users != "" && $scope.Users != null) {
    // console.log("permiso")
  } else {
    location.href = "/"
    // console.log("no")
  }

  function InserDataPersonal(dataUsers) {
    // console.log(dataUsers)
    $.ajax({
      type: "POST",
      url: UrlLocalInsert,
      timeout: 2000,
      data: {
        direction: dataUsers[0].direction,
        imagenPrincipal: dataUsers[0].imagenPrincipal,
        name: dataUsers[0].name,
        price: dataUsers[0].price,
        promotion: "",
        tel: dataUsers[0].telefono,
        mapa: dataUsers[0].mapa
      },
      success: function (data) {
        data_app = data.result.Database[0].Table.Row[0];
        $scope.idUser = data_app;
        id.push({
          id: $scope.idUser[0].id
        })
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  function insertServise(objservicesget) {
    $.ajax({
      type: "POST",
      url: UrlServInsert,
      timeout: 2000,
      data: {
        subService: objservicesget[0].othersServ,
        service: objservicesget[0].servicioPrincipal,
        id: $scope.idUser[0].id
      },
      success: function (data) {
        data_app = data;
        // console.log(data_app);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  };

  function InsertHour() {
    $.ajax({
      type: "POST",
      url: UrlInsertHour,
      timeout: 2000,
      data: $scope.Horario[0],
      success: function (data) {
        // console.log(data)
        data_app = data.result.Database[0].Table.Row[0];
        $scope.idUser = data_app;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

  function insertMethodPay(objMethodPay) {
    $.ajax({
      type: "POST",
      url: UrlPayMethod,
      timeout: 2000,
      data: {
        pay: objMethodPay,
        id: $scope.idUser[0].id
      },
      success: function (data) {
        data_app = data.result.Database[0].Table.Row[0];
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        // console.log(data_app)
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }

}]);