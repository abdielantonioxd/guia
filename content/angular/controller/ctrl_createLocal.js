app.controller("ctrl-create", ['$scope', function ($scope) {
  /* ==========================================
            GLOBAL ANGULAR VARS  
     ==========================================   */
  $scope.weekdays = objectweekdays;
  $scope.Services = objServices;
  $scope.daysweek = daysweek;
  $scope.Price = objPrice;
  $scope.methodPay = methodPay;
  $scope.subservice = "";
  $scope.price = "";
  $scope.service = "";
  $scope.imgOfLocal = objImagesLocal;
  $scope.Users = objUserAdminRolOne;
  $scope.Horario = horario;

  /* ==========================================
        GET DATA GENERAL OF ESTABLISHMENT 
     ==========================================   */
  $scope.obtainData = function (obj) {
    email = document.getElementById('email_local').value;
    Name = document.getElementById("Name_local").value;
    telefono = document.getElementById("Tel").value;
    mapa = document.getElementById("mapa").value;
    if ($scope.dataInGeneral.Direccion != undefined && $scope.dataInGeneral.Direccion != "") {
      if ($scope.dataInGeneral.Direccion === obj.ubication.selectedOption.name) {
        direction = document.getElementById("idInformation").value;
      } else {
        var direccionOld = document.getElementById("idInformation").value;
        var splitOldValue = direccionOld.split(',', 9)
        direction = obj.ubication.selectedOption.name + "," + splitOldValue[1]
      }
    } else {
      direction = obj.ubication.selectedOption.name + "," + document.getElementById("idInformation").value;
    }

    if ($scope.dataInGeneral != undefined) {
      if ($scope.dataInGeneral.imagenPrincipal != "") {
        imagesP.push({ name: $scope.dataInGeneral.imagenPrincipal })
        $scope.imagesP = imagesP[0].name;
      }
    } else {
      $scope.imagesP = imagesP[0].name;
    }
    promotion = "";
    Name && telefono && direction && $scope.imagesP != "" ?
      responseTrue() : responseFalse();
    function responseTrue() {
      $scope.validateresponseUser('yes');
    }
    function responseFalse() {
      alertify.set('notifier', 'position', 'top-right');
      alertify.error('Todos los Campos son Obligatorios')
    }
  }

  /* ==========================================
             GET PRICE 
     ==========================================   */
  $scope.getIdPrice = function (obj) {
    Price = obj.p.Price;
    $scope.price = Price;
  }

  /* ==========================================
              VALIDATE DATA GENERAL  
      ==========================================   */
  $scope.validateresponseUser = function (opc) {
    if (opc == "yes") {

      if ($scope.price === "") {
        if ($scope.dataInGeneral.Precio != undefined && $scope.dataInGeneral.Precio != "") {
          $scope.price = $scope.dataInGeneral.Precio;
        } else {
          $scope.price = 10;
        }
      }

      if ($scope.dataInGeneral.Promociones != undefined && $scope.dataInGeneral.Promociones != "") {
        var promo = $scope.dataInGeneral.Promociones;
      }
      objdataform.push(
        infoServ = [{
          name: Name,
          email: email,
          direction: direction,
          telefono: telefono,
          mapa: mapa,
          promociones: promo,
          price: $scope.price,
          imagenPrincipal: $scope.imagesP,
          idPerfil: $scope.dataOfUserSession[0].id
        }]
      );
      var dataUsers = objdataform[0];
      console.log(dataUsers)
      $scope.personalInformation = true;
      $scope.typeService = false;
      InserDataPersonal(dataUsers);
    } else { }
  }

  /* ==========================================
                GET SUB SERVICE
     ==========================================   */
  $scope.showChecboxSubservic = function (Serv) {
    switch (Serv) {
      case "Salones":
        $scope.subservice = objsubServicesSalones;
        break;
      case "Barberias":
        $scope.subservice = objsubServiceBarberia;
        break;
      case "Estética":
        $scope.subservice = objsubServiceEstetica;
        break;
      case "Clínicas":
        $scope.$watch($scope.subservice = objsubServiceClinicas)
        break;
      case "Functional Training":
        $scope.subservice = objsubServiceCejasPesta
        break;
      case "Cejas y Pestañas":
        $scope.subservice = objsubServiceCejasPesta
        break;
      case "Uñas":
        $scope.subservice = objsubServiceUñas
        break;
      case "Depilación":
        $scope.subservice = objsubServiceDepilacion
        break;
      case "Masajes y Spa":
        $scope.subservice = objsubServiceMasajesEspa
        break;
      default:
        alertify.set('notifier', 'position', 'top-left');
        alertify.error('A ocurrido un error, sus datos no se estan Guardando Correctamente  Vuelva a Intentarlos o contacte al administrador de este sitio.');
        break;
    }
  }

  /* ==========================================
       GET AND PUSH DATA SUB SERVICE 
     ==========================================   */
  $scope.getsubservice = function (obj) {
    $scope.buttonEdit = false;
    var subServ = obj.subserv.Service;
    $scope.subService = subServ
    objservicesgetothers.push($scope.subService)
  }

  /* ==========================================
           PUSH SERVICE AND SUB SERVICE   
     ==========================================   */
  $scope.pushServiceAndSub = function () {
console.log(objservicesget)
    objservicesget.push({
      "servicioPrincipal": $scope.service,
      "othersServ": objservicesgetothers
    })

    insertServise(objservicesget);
  }
  /* ==========================================
              GET SERVICE 
    ==========================================   */
  $scope.getIdServ = function (obj) {
    $scope.buttonEdit = true;
    var Serv = obj.s.Service;
    $scope.service = Serv
    $scope.showChecboxSubservic(Serv)
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
        email: dataUsers[0].email,
        idPerfil: dataUsers[0].idPerfil,
        price: dataUsers[0].price,
        promotion: 1,
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
    console.log(objservicesget);
    $.ajax({
      type: "POST",
      url: UrlServInsert,
      timeout: 2000,
      data: {
        subService: objservicesget[0].othersServ,
        service: objservicesget[0].servicioPrincipal,
        id: $scope.dataOfUserSession[0].id
      },
      success: function (data) {
        data_app = data;
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se Guardaron los datos correctamente ');
        objservicesget = [] ; 
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
        id: $scope.dataOfUserSession[0].id
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

  /*
     #####################################################################################
     #                    API UPDATE ESTABLECIMIENTO                                     #
     #####################################################################################
    */

  /*
      #####################################################################################
      #                                  SET DATA GENERAL                                 #
      #####################################################################################
     */
  function getDaGeneral() {
    $.ajax({
      type: "POST",
      url: "api/getdata-update/json",
      timeout: 2000,
      data: {
        id: $scope.dataOfUserSession[0].id
      },
      success: function (data) {
        var dataGeneral = data.result.Database[0].Table.Row[0][0];
        $scope.dataInGeneral = dataGeneral;
        if (dataGeneral != undefined) {
          setDataServicesOfLocal(dataGeneral);
          setDataGeneral(dataGeneral);
          setDataMethodPay(dataGeneral);
        }
      },
      error: function (textStatus, err) {
        console.log(textStatus + "" + err);
      }
    });
  }


  function setDataGeneral(dataGeneral) {
    $scope.ubication = objectUbication;
    if (dataGeneral.Nombre_establecimiento != "") {
      document.getElementById("Name_local").value = dataGeneral.Nombre_establecimiento;
    }

    if (dataGeneral.email != "") {
      document.getElementById("email_local").value = dataGeneral.email;
    }
    if (dataGeneral.Telefono != "") {
      document.getElementById("Tel").value = dataGeneral.Telefono;
    }
    if (dataGeneral.Direccion != "") {
      document.getElementById("idInformation").value = dataGeneral.Direccion;
    }

    if (dataGeneral.mapa != "") {
      document.getElementById("mapa").value = dataGeneral.mapa;
    }

    if (dataGeneral.imagenPrincipal != "") {
      document.getElementById("chamgeImages").src = "/public/images/" + dataGeneral.imagenPrincipal;
      $('#imagespView').show()
    }
    var sliceDirection = dataGeneral.Direccion.split(',', 9)
    for (const key in $scope.ubication.Panama) {
      if ($scope.ubication.Panama[key].name === sliceDirection[0]) {
        $scope.$watch($scope.ubication.selectedOption.id = $scope.ubication.Panama[key].id,
          $scope.ubication.selectedOption.name = $scope.ubication.Panama[key].name
        )
        applyObject()
      }
    }

    for (const prc in $scope.Price) {
      if ($scope.Price[prc].Price === dataGeneral.Precio) {
        var id = $scope.Price[prc].id
        document.getElementById(id).checked = true;
      }
    }
  }

  /*
   #####################################################################################
   #                                  SERVICE PRINCIPAL                                #
   #####################################################################################
  */
  function setDataServicesOfLocal(dataGeneral) {
    for (const servP in $scope.Services) {
      if ($scope.Services[servP].Service === dataGeneral.servicioPrincipal) {
        var id = $scope.Services[servP].Service;
        document.getElementById(id).checked = true;
        setSubservice(dataGeneral)
      }
    }
    function setSubservice(dataGeneral) {

      switch (dataGeneral.servicioPrincipal) {
        case "Salones":
          $scope.subservice = objsubServicesSalones;
          applyObject();
          break;
        case "Barberias":
          $scope.subservice = objsubServiceBarberia;
          applyObject();
          break;
        case "Estética":
          $scope.subservice = objsubServiceEstetica;
          applyObject();
          break;
        case "Clínicas":
          $scope.subservice = objsubServiceClinicas;
          applyObject();
          break;
        case "Functional Training":
          $scope.subservice = objsubServiceCejasPesta
          applyObject();
          break;
        case "Cejas y Pestañas":
          $scope.subservice = objsubServiceCejasPesta
          applyObject();
          break;
        case "Uñas":
          $scope.subservice = objsubServiceUñas
          applyObject();
          break;
        case "Depilación":
          $scope.subservice = objsubServiceDepilacion
          applyObject();
          break;
        case "Masajes y Spa":
          $scope.subservice = objsubServiceMasajesEspa
          applyObject();
          break;
        default:
          alertify.set('notifier', 'position', 'top-left');
          alertify.error('A ocurrido un error, sus datos no se estan Guardando Correctamente  Vuelva a Intentarlos o contacte al administrador de este sitio.');
          break;
      }
      var splitSubservice = dataGeneral.servicios.split(',');
      $.each($scope.subservice, function (i, sub) {
        var subS = splitSubservice;
        $.each(subS, function (l, s) {
          if (sub.Service == s) {
            var id = s
            document.getElementById(id).checked = true;
          }
        })
      })
    }
  }
  function applyObject() {
    $scope.$apply()
  }
  /*
     #####################################################################################
     #                               SET DATA METHOD OF PAY                             #
     #####################################################################################
    */
  function setDataMethodPay(dataGeneral) {
    var splitmethodPay = dataGeneral.methodpay.split(',');
    $.each($scope.methodPay, function (i, pay) {
      var methodPay = splitmethodPay;
      $.each(methodPay, function (l, s) {
        if (pay.method == s) {
          var id = s
          document.getElementById(id).checked = true;
        }
      })
    })
  }
  /*
     #####################################################################################
     #                                  EXIST SESION                                     #
     #####################################################################################
    */
  if ($scope.Users != "" && $scope.Users != null) {
    $scope.dataOfUserSession = JSON.parse($scope.Users);
  } else {
    location.href = "/"
  }

  getDaGeneral()
}]);