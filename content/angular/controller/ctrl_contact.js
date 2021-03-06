app.controller("ctrl_contact", ['$scope', function ($scope) {
  /* ==========================================
              Global var 
   ==========================================   */
  $scope.categories = objservicesOptions;
  $scope.find = objfind;
  $scope.countryNames = countryList;
  $scope.selected = $scope.countryNames.selectedOption;
  $scope.countryCode = $scope.selected.dial_code;
  /* ==========================================
              Load Select Input  
     ==========================================   */
  var objcountry = [{
    country: "Panama"   
  }];

  /* ==========================================
              Get Categories 
   ==========================================   */
  $scope.selectCategories = function (categories) {
    $scope.categoriesContact = categories.categories.selectedOption.name;
  }
  /* ==========================================
             Gert find 
    ==========================================   */
  $scope.selectfind = function (find) {
    $scope.findcontact = find.find.selectedOption.name;
  }
  /* ==========================================
              Get country  
     ==========================================   */
  $scope.selectCountry = function (option) {
    $scope.countryCode = option.countryNames.selectedOption.dial_code;
    $scope.countryname = option.countryNames.selectedOption.name;
    objcountry = []
    objcountry.push({
      country: $scope.countryname
    })
  }

  /* ==========================================
              Load To all data 
     ==========================================   */
  $scope.dataContact = function () {
    let country = objcountry[0].country;
    let categories = $scope.categoriesContact;
    let findContact = $scope.findcontact
    dataContact = {
      name: document.getElementById("nameClient").value,
      lastname: document.getElementById("lastName").value,
      nameBusiness: document.getElementById("nameBusiness").value,
      email: document.getElementById("EmailId").value,
      tel: document.getElementById("CountryCode").value + document.getElementById("number").value,
      message: document.getElementById("teamcontact").value,
      country: country,
      categories: categories,
      findContact: findContact
    }
    // console.log(dataContact)
    sendEmailContact(dataContact)
  }

  /* ==========================================
             Send Informations  for email  
     ==========================================   */
  function sendEmailContact(dataContact) {
    $.ajax({
      type: "POST",
      url: sendEmail,
      timeout: 2000,
      data: dataContact,
      success: function (data) {},
      error: function (textStatus, err) {
        if (textStatus.statusText === "Bad Request") {
          alertify.alert('Guia Look', 'Se Enviaron sus datos Nuestro Equipo lo estara contactando  ', function () {
            setTimeout(() => {
              location.reload()
            }, 2000);
          });
        }
      }
    });
  }
}])