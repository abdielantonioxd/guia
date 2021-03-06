app.controller("ctrl_Filter", ['$scope', 'Dataservice', function ($scope, Dataservice) {
  /* ==========================================
              global var  
     ==========================================   */
  $scope.filterservice = false;
  $scope.searchServices = true;
  $scope.nameuser = JSON.parse(users);
  $scope.ubication = objectUbication.Panama;
  /* ==========================================
              Filter of services  
     ==========================================   */
  $scope.filterService = function () {
    $scope.filterservice = true;
    $scope.searchServices = true;
    var div = document.getElementById("list-R2");
    document.addEventListener("keyup", function (e) {
      serviceload();
      var clic = e.target;
      if (div.style.display == "none" && clic != div) {
        div.style.display = "block";
      }
    });
    document.addEventListener("click", function (e) {
      var clic = e.target;
      if (div.style.display == "block" && clic != div) {
        div.style.display = "none";
      }
    });
  }
  /* ==========================================
                   Search advance  
     ==========================================   */
  $scope.seachGlobal = function (search) {
    resultOf = search.search;
    localStorage.setItem('resultOfSearch', JSON.stringify(resultOf))
    var SearchAdvanced = `%${search.search}%`
    if (search.search != undefined) {
      $.ajax({
        type: "POST",
        url: UrlSearchAdvanced,
        timeout: 2000,
        data: {
          search: SearchAdvanced
        },
        success: function (data) {
          data_app = data.result.Database[0].Table.Row[0];
          ObjSearchAdvanced.push(data_app)
          localStorage.setItem('ObjSearchAdvancedLocalStorage', JSON.stringify(ObjSearchAdvanced))
          resulOfSearchAdvanced()
        },
        error: function (textStatus, err) {
          console.log(textStatus + "" + err);
        }
      });
    } else {
      alertify.set('notifier', 'position', 'top-right');
      alertify.error('el campo está  vacío ');
    }
  };

  /* ==========================================
              Load services 
     ==========================================   */
  function serviceload() {
    Dataservice.GetToAllEstablecimiento().then(function (data) {
      $scope.services = data.data.result.Database[0].Table.Row[0]
    })
  }


}])