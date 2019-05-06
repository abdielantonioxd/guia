app.controller("ctrlCarrouserl", ["$scope", "Dataservice", function ($scope, Dataservice) {
  $scope.test = "test ctrl";
  function carrouselOne() {
    Dataservice.GetToAllEstablecimiento().then(function (data) {
      $scope.recomendate = data.data.result.Database[0].Table.Row[0];
      console.log($scope.recomendate)
    })
  }

  carrouselOne()
}])