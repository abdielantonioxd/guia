app.factory("Dataservice", function ($http) {
  const all = "/api/get-services/json";
  const allUpdate = "/api/get-dataUpdate/json";
  const desc = "/api/get-descuento/json"
  const recomendate = `/api/get-recomendate/json`
  var Dataservice = {
    GetToAllEstablecimiento: function () {
      return $http.get(all).then(function (data) {
        return data
      })
    },
    GetToAllEstablecimientoUpdate: function () {
      return $http.get(allUpdate).then(function (data) {
        return data
      })
    },
    GetDescuento: function () {
      return $http.get(desc).then(function (data) {
        return data
      })
    },
    GetFilter: function () {
      var loc = document.URL;
      if (loc.indexOf('?') != -1) {
        var getString = loc.split('?')[1];
        var params = getString.split('&');
        var objectget = {};
        for (const i in params) {
          var tmp = params[i].split('=');
          objectget[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return objectget;
      } else { }
      return objectget
    },
    GetDay: function () {
      var dia = "";
      var hour = new Date();
      var day = hour.getDay();
      switch (day) {
        case 0:
          dia = "Domingo";
          return dia;
          break;
        case 1:
          dia = "Lunes";
          return dia;
          break;
        case 2:
          dia = "Martes";
          return dia;
          break;
        case 3:
          dia = "miercoles";
          return dia;
          break;
        case 4:
          dia = "Jueves";
          return dia;
          break;
        case 5:
          dia = "Viernes";
          return dia;
          break;
        case 6:
          dia = "Sabado";
          return dia;
          break;
        default:
          console.log("a ocurrido un error ")

          break;
      }
    },
    Recomendate: function () {
      return $http.get(recomendate).then(function (data) {
        return data
      })
    }

  }
  return Dataservice;
})