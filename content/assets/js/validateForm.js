
$(function () {
  //#######  ERROR MESSAGES ###########//
  $('#name_error_message').hide();
  //#######  FUNCTION OF THE  INPUT  ###########//
  $("#Name_local").focusout(function () {
    check_name();
  });
  $("#Tel").focusout(function () {
    check_Tel();
  });
  $("#mySelect").focusout(function () {
    // check_ubication();
  });
  $("#Email").focusout(function () {
    check_Email();
  });

  $("#idInformation").focusout(function () {
    check_information();
  });
  $("#idInformationlocal").focusout(function () {
    check_informationlocal();
  });
})


function check_name() {
  var Name = $("#Name_local ").val();
  if (Name !== '') {
    $("#name_error_message").hide();
    $("#Name_local").css("border-bottom", "2px solid #c39c00");
  } else {
    $("#name_error_message").html(" * Este campo es obligatorio ");
    $("#name_error_message").show();
    $("#Name_local").css("border-bottom", "2px solid #911D04");
    $(".error_name").css("font-size", "12px");
    $(".error_name").css("color", "#911D04");

  }
}

function check_Tel() {
  var tel = $("#Tel").val();
  if (tel !== '') {
    $("#tel_error_message").hide();
    $("#Tel").css("border-bottom", "2px solid #c39c00");
  } else {
    $("#tel_error_message").html(" * Este campo es obligatorio");
    $("#tel_error_message").show();
    $("#Tel").css("border-bottom", "2px solid #911D04");
    $(".error_tel").css("font-size", "12px");
    $(".error_tel").css("color", "#911D04");
  }
}

function check_ubication() {
  // var mySelect = $("#mySelect").val();
  // console.log(mySelect)
  // if (mySelect !== "Ubication") {
  //   $("#mySelect_error_message").hide();
  //   $("#mySelect").css("border-bottom", "2px solid #c39c00");
  // } else {
  //   $("#mySelect_error_message").html(" * Este campo es obligatorio");
  //   $("#mySelect_error_message").show();
  //   $("#mySelect").css("border-bottom", "2px solid #911D04");
  //   $(".error_mySelect").css("font-size", "12px");
  //   $(".error_mySelect").css("color", "#911D04");
  //   //check_Cname();
  // }
}

function check_Email() {
  var pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var Email = $("#Email").val();
  if (pattern.test(Email) && Email !== '') {
    $("#Email_error_message").hide();
    $("#Email").css("border-bottom", "2px solid #c39c00");
  } else {
    $("#Email_error_message").html(" * Inserte un email valido (  establecimiento@gmail.com ) ");
    $("#Email_error_message").show();
    $("#Email").css("border-bottom", "2px solid #911D04");
    //check_Email();
    $(".error_Email").css("font-size", "12px");
    $(".error_Email").css("color", "#911D04");
  }
}

function check_information() {
  var idInformation = $("#idInformation").val();
  if (idInformation !== '') {
    $("#idInformation_error_message").hide();
    $("#idInformation").css("border-bottom", "2px solid #c39c00");
  } else {
    $("#idInformation_error_message").html(" * Este campo es obligatorio");
    $("#idInformation_error_message").show();
    $("#idInformation").css("border-bottom", "2px solid #911D04");
    $(".error_idInformation").css("font-size", "12px");
    $(".error_idInformation").css("color", "#911D04");
  }
}

function check_informationlocal() {
  var idInformationlocal = $("#idInformationlocal").val();
  if (idInformationlocal !== '') {
    $("#idInformationlocal_error_message").hide();
    $("#idInformationlocal").css("border-bottom", "2px solid #c39c00");
  } else {
    $("#idInformationlocal_error_message").html(" * Este campo es obligatorio");
    $("#idInformationlocal_error_message").show();
    $("#idInformationlocal").css("border-bottom", "2px solid #911D04");
    $(".error_idInformationlocal").css("font-size", "12px");
    $(".error_idInformationlocal").css("color", "#911D04");
  }
}