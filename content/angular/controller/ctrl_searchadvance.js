app.controller("ctrl_boutique", ['$scope', 'Dataservice', function ($scope, Dataservice) {

   /* ==========================================
                  global var
      ==========================================   */
   $scope.Price = objPrice;
   $scope.Services = objServices;
   $scope.data = objservicesOptions;
   $scope.subservices = "";
   $scope.zonasPanama = modelZonasPanama;
   $scope.ObjSearchAdvanced = ObjSearchJSON;
   $scope.resulOfSearch = ObjresultJSON;
   // console.log($scope.resulOfSearch)

   /* ==========================================
              Get Price of Establishment 
      ==========================================   */
   $scope.getPrice = function (p) {
      var Price_val = document.getElementById(p.id).value;
      hideMessage();
      var objoptions = {
         from: "Price",
         value: Price_val,
         obj: p
      }
      dblClick_and_Click(objoptions)
   }

   /* ==========================================
               Filter for Localization 
      ==========================================   */
   $scope.filterZonas = function (z) {
      var zonas = z.name;
      hideMessage()
      var objoptions = {
         from: "zonas",
         value: zonas,
         obj: z
      }
      dblClick_and_Click(objoptions)
   }

   /* ==========================================
                  Filter for Services 
      ==========================================   */
   $scope.getService = function (service) {
      var Serv = document.getElementById(service.id).value;
      serviceSelected = Serv;
      $scope.showChecboxSubservic(Serv)
      $scope.subServiceshide = false;
      subService = "";
      hideMessage()
      var objoptions = {
         from: "service",
         value: serviceSelected,
         obj: service
      }
      dblClick_and_Click(objoptions)
   }

   /* ==========================================
              Filter for SubServices 
      ==========================================   */
   $scope.getSubService = function (subservice) {
      serviceSelected
      var subService = document.getElementById(subservice.id).value;
      hideMessage()
      var objoptions = {
         from: "subService",
         value: subService,
         service: serviceSelected,
         obj: subservice
      }
      dblClick_and_Click(objoptions)
   }

   /* ==========================================
               Filter for Hours 
      ==========================================   */
   $scope.getHours = function () {
      var hour = new Date();
      var Hora = hour.getHours() + ":" + hour.getMinutes() + ":00"
      var day = Dataservice.GetDay();
      hideMessage()
      var h = "abierto"
      obj = {
         id: h
      }
      var objoptions = {
         from: "hours",
         value: Hora,
         valueTwo: day,
         obj: obj
      }
      dblClick_and_Click(objoptions)
      // FilterHoursNow(Hora, day);
   }

   /* ==========================================
              Filter  Service Mobile 
      ==========================================   */
   $scope.clickaction = function (obj) {
      var Option = obj.data.selectedOption.id;
      hideMessage()
      if (Option == "MP") {
         FilterMPrice()
      } else {
         if (Option == "Popularidad") { } else {
            if (Option == "Promociones") {
               $scope.promotion()
            } else {
               if (Option == "Orden") { } else {
                  Serv = Option;
                  subService = ""
                  FilterServices(Serv, subService)
               }
            }
         }
      }
   };

   /* ==========================================
              Load  Filter for Promotions 
      ==========================================   */
   $scope.promotion = function () {
      $.ajax({
         type: "POST",
         url: Urlpromotion,
         timeout: 2000,
         data: "",
         success: function (data) {
            data_app = data.result.Database[0].Table.Row[0];
            filter(data_app);
         },
         error: function (textStatus, err) {
            console.log(textStatus + "" + err);
         }
      });
   }
   /* ==========================================
                Load filter Prices
       ==========================================   */
   function FilterPrice(Price_val, serviceSelected) {

      $.ajax({
         type: "POST",
         url: Urlprice,
         timeout: 2000,
         data: {
            Price: Price_val,
            service: serviceSelected
         },
         success: function (data) {
            data_app = data.result.Database[0].Table.Row[0];
            filter(data_app);
         },
         error: function (textStatus, err) {
            console.log(textStatus + "" + err);
         }
      });
   }

   /* ==========================================
         Load Filter Service and SubServices
      ==========================================   */
   function FilterServices(serviceSelected, subService) {
      $.ajax({
         type: "POST",
         url: Urlservice,
         timeout: 2000,
         data: {
            Service: serviceSelected,
            subService: subService,
            ubication: ""
         },
         success: function (data) {
            var data_app = data.result.Database[0].Table.Row[0];
            filter(data_app)
         },
         error: function (textStatus, err) {
            alert("text status " + textStatus + ", err " + err);
         }
      });
   }
   /* ==========================================
               Load Filter Hours Now 
     ==========================================   */
   function FilterHoursNow(Hora, day) {
      $.ajax({
         type: "POST",
         url: Urlhour,
         timeout: 2000,
         data: {
            days: day,
            hours: Hora
         },
         success: function (data) {
            var data_app = data.result.Database[0].Table.Row[0];
            filter(data_app)
         },
         error: function (textStatus, err) {
            console.log(textStatus + "  " + err);
         }
      });
   }

   /* ==========================================
            Load Filter M Price    
      ==========================================   */
   function FilterMPrice() {
      $.ajax({
         type: "POST",
         url: UrlMP,
         timeout: 2000,
         data: "",
         dataType: "json",
         success: function (data) {
            var data_app = data.result.Database[0].Table.Row[0];
            filter(data_app)
         },
         error: function (textStatus, err) {
            console.log(textStatus + "  " + err);
         }
      });
   }
   /* ========================================== 
              Function of  Load  Pages 
      ==========================================   */

   $scope.LoadDataPages = function () {
      dataUrl = Dataservice.GetFilter();
      if (dataUrl != undefined) {
         filterFor(dataUrl)
      } else {
         if ($scope.ObjSearchAdvanced != null) {
            $scope.resulText = true;
            data_app = $scope.ObjSearchAdvanced[0];
            filterTwo(data_app)
            setTimeout(() => {
               localStorage.clear();
               $scope.ObjSearchAdvanced = null;
            }, 2000);
         } else {
            $scope.resulText = false;
            Dataservice.GetToAllEstablecimiento().then(function (data) {
               $scope.NSelected = data.data.result.Database[0].Table.Row[0]
               $scope.Nresultado = $scope.NSelected.length;
            })
         }
      }
   }

   function filterFor(dataUrl) {
      if (dataUrl.Search == undefined) {
         Serv = "";
         Ubication = dataUrl.ubicacion;
      } else {
         Serv = dataUrl.Search;
         Ubication = ""
      }
      sendFilter(Serv, Ubication);
   }

   function sendFilter(Serv, Ubication) {
      $.ajax({
         type: "POST",
         url: Urlservice,
         timeout: 2000,
         data: {
            Service: Serv,
            subService: "",
            ubication: Ubication
         },
         success: function (data) {
            var data_app = data.result.Database[0].Table.Row[0];
            filter(data_app)
         },
         error: function (textStatus, err) {
            alert("text status " + textStatus + ", err " + err);
         }
      });
   }


   /* ==========================================
               Load SubServices 
    ==========================================   */
   $scope.showChecboxSubservic = function (Serv) {
      switch (Serv) {
         case "Salones":
            $scope.subservices = objsubServicesSalones;
            break;
         case "Barberias":
            $scope.subservices = objsubServiceBarberia;
            break;
         case "Estética":
            $scope.subservices = objsubServiceEstetica;
            break;
         case "Clínicas Dentales":
            $scope.subservices = objsubServiceClinicas
            break;
         case "Functional Training":
            $scope.subservices = objsubServiceCejasPesta
            break;
         case "Cejas y Pestañas":
            $scope.subservices = objsubServiceCejasPesta
            break;
         case "Uñas":
            $scope.subservices = objsubServiceUñas
            break;
         case "Depilación":
            $scope.subservices = objsubServiceDepilacion
            break;
         case "Masajes y Spa":
            $scope.subservices = objsubServiceMasajesEspa
            break;
         default:
            alert("a ocurrido un error Contacte al administrador de la Pagina")
            break;
      }
   }

   /* ==========================================
              Load filter Localization  
      ==========================================   */
   function SendFilterZonas(zonas) {
      $.ajax({
         type: "POST",
         url: UrlZonas,
         timeout: 2000,
         data: {
            zonas: zonas,
         },
         success: function (data) {
            var data_app = data.result.Database[0].Table.Row[0];
            filter(data_app)
         },
         error: function (textStatus, err) {
            alert("text status " + textStatus + ", err " + err);
         }
      });
   }

   /* ==========================================
               Filter Pages  Search Advanced
      ==========================================   */
   function filter(data_app) {
      $scope.$apply($scope.NSelected = data_app,
         $scope.Nresultado = data_app.length
      )
      if (data_app.length === 0) {
         alertify.set('notifier', 'position', 'top-left');
         alertify.error('no se encontraron resultados');
      }
   }

   /* ===============================================
      Filter Pages  Search Advanced  since Pages Home 
      ================================================  */
   function filterTwo(data_app) {
      $scope.NSelected = data_app
      $scope.Nresultado = data_app.length
      messageResult()
   }

   function messageResult() {
      if (data_app.length === 0) {
         $scope.resultNotFound = `No se encontro ningún resultado para ${$scope.resulOfSearch}`;
         alertify.set('notifier', 'position', 'top-left');
         alertify.error('no se encontraron resultados');
      } else {
         alertify.set('notifier', 'position', 'top-left');
         alertify.notify('Resultado de la busqueda de ' + $scope.resulOfSearch);
      }
   }

   function hideMessage() {
      $scope.resulText = false;
   }
   /* ===============================================
                   Function of dblClick  
      ================================================  */
   function dblClick_and_Click(objoptions) {
      switch (objoptions.from) {
         case "Price":
            var {
               value,
               id
            } = objGetValue(value, objoptions, id);
            var FunctionX = FilterPrice(value, serviceSelected);
            optionClick(value, id, FunctionX)
            break;
         case "zonas":
            var {
               value,
               id
            } = objGetValue(value, objoptions, id);
            var FunctionX = SendFilterZonas(value)
            optionClick(value, id, FunctionX)
            break;
         case "service":
            var {
               value,
               id
            } = objGetValue(value, objoptions, id);
            subService = "";
            var FunctionX = FilterServices(value, subService)
            optionClick(value, id, FunctionX)
            break;
         case "subservice":
            var {
               value,
               id
            } = objGetValue(value, objoptions, id);
            var service = objoptions.service
            var FunctionX = FilterServices(service, value)
            optionClick(value, id, FunctionX)
            break;
         case "hours":
            var {
               value,
               id
            } = objGetValue(value, objoptions, id);
            var day = objoptions.valueTwo
            var FunctionX = FilterHoursNow(value, day)
            optionClick(value, id, FunctionX)
            break;
         default:
            return false;
            break;
      }
   }

   function optionClick(value, id, FunctionX) {
      if (click == 0) {
         FunctionX
         valueOld = value;
         click++
         console.log(click)
      } else {
         if (valueOld != value) {
            document.getElementById(id).checked = true;
            click = 0;
            FunctionX
         } else {
            document.getElementById(id).checked = false;
            click = 0;
            $scope.LoadDataPages()
            $scope.subServiceshide = true;

         }
      }
   }
   $scope.LoadDataPages()
}])

function objGetValue(value, objoptions, id) {
   var value = objoptions.value;
   var id = objoptions.obj.id;
   return {
      value,
      id
   };
}