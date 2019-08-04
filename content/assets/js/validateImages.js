$(".btnEstablishment").attr('disabled', true);
$("#imagesTwo").hide()
$("#imagesOne").show()
$("#preview").hide()

function showImage() {
  $('.Save').show()
  $('.EditImage').show()
  $('.messageEdit').show()
}

function hideImage() {
  $('.Save').hide()
  $('.EditImage').hide()
  $('.messageEdit').hide()
}

function imgFileP() {
  showImage()
  $("#preview").show()
  $(".btnEstablishment").attr('disabled', true);
  reader.readAsDataURL(document.getElementById("file-upload").files[0])
  reader.onload = function () {
    let preview = document.getElementById('preview'),
      image = document.createElement('img');
    image.src = reader.result;
    preview.innerHTML = '';
    preview.append(image);
  };
  // console.log("hola Test " + document.getElementById("file-upload").files[0])
  var imagesName = document.getElementById("file-upload").files[0].name;
  innerImages = document.getElementById("namefile").innerHTML = imagesName;
  imagesP.push({
    "images": imagesName
  })
}

function saveImagesInServer(op) {
  switch (op) {
    case "yes":
      $(".btnEstablishment").attr('disabled', false);
      hideImage()
      saveImages("P")
      break;
    case "no":
      $("#preview").hide()
      document.getElementById('preview').innerHTML = ""
      imagesP = [];
      hideImage()
      innerImages = document.getElementById("namefile").innerHTML = " "
      $(".btnEstablishment").attr('disabled', true);
      break;
    case "OneTrue":
      hideImage()
      saveImages("One")
      $("#imagesTwo").show()
      $("#imagesOne").hide()
      break;
    case "OneFalse":
      hideImage()
      innerImages = document.getElementById("namefileOne").innerHTML = " "
      $(".btnEstablishment").attr('disabled', true);
      break;
    case "TwoTrue":
      hideImage()
      saveImages("Two")
      $("#imagesTwo").show()
      $("#imagesOne").show()
      break;
    case "TwoFalse":
      hideImage()
      innerImages = document.getElementById("namefileTwo").innerHTML = " "
      $(".btnEstablishment").attr('disabled', true);
      break;
    default:
      break;
  }
}


/*
  #####################################################################################
  #                      function of input file for images  table 3                   #
  #####################################################################################
 */

function imgFileAlOne() {
  showImage()
  reader.readAsDataURL(document.getElementById("file-uploadOne").files[0])
  reader.onload = function () {
    let preview = document.getElementById('previewTwo'),
      image = document.createElement('img');
    image.src = reader.result;
    preview.innerHTML = '';
    preview.append(image);
  };
  var img = document.getElementById("file-uploadOne").files[0];
  imageslocalOne = img.name;
  if (imageslocalOne != imageslocalTwo) {
    document.getElementById("namefileOne").innerHTML = img.name;
  }
}

function imgFileAlTwo() {
  showImage()
  reader.readAsDataURL(document.getElementById("file-uploadTwo").files[0])
  reader.onload = function () {
    let preview = document.getElementById('previewThree'),
      image = document.createElement('img');
    image.src = reader.result;
    preview.innerHTML = '';
    preview.append(image);
  };
  var img = document.getElementById("file-uploadTwo").files[0];
  imageslocalTwo = img.name;
  var size = img.size;
  if (imageslocalTwo != imageslocalOne) {
    document.getElementById("namefileTwo").innerHTML = img.name;
  }
}


function validateImages() {
  if (imageslocalOne && imageslocalTwo != "" && imageslocalOne != imageslocalTwo) {
    objImagesLocal.push({
      imagenlocal: {
        "imageslocalOne": imageslocalOne,
        "imageslocalTwo": imageslocalTwo
      }
    })
  } else {
    alertify.set('notifier', 'position', 'top-center');
    alertify.message('Las Imagen deven ser distintas ');
  }
}


function saveImages(op) {
  switch (op) {
    case "P":
      var formData = new FormData(document.getElementById("imagesP"));
      formData.append("dato", "valor");
      SaveImagesInTheServer(formData)
      break;
    case "One":
      var formData = new FormData(document.getElementById("imagesOne"));
      formData.append("dato", "valor");
      SaveImagesInTheServer(formData)
      break;
    case "Two":
      var formData = new FormData(document.getElementById("imagesTwo"));
      formData.append("dato", "valor");
      SaveImagesInTheServer(formData)
      break;
    default:
      break;
  }

  function SaveImagesInTheServer(formData) {
    $.ajax({
      url: "/upload",
      type: "post",
      dataType: "html",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('La imagen se Guardo correctamente');
      }
    })
    // .done(function (res) {
    // });
  }
}
hideImage()