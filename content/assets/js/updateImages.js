function disabledButtons(opt) {
  $("#updateServicesId").attr("disabled", opt);
  $("#updateMethodId").attr("disabled", opt);
  $("#updateInformationId").attr("disabled", opt);
  $("#updateHoursId").attr("disabled", opt);
  $("#updateImageId").attr("disabled", opt);
}

function updateImgFile(idInput, idPreview, idinputUpdate) {
  showImage();
  $("#preview").show()
  reader.readAsDataURL(document.getElementById(idInput).files[0])
  reader.onload = function () {
    let preview = document.getElementById(idPreview),
      image = document.createElement('img');
    image.src = reader.result;
    preview.innerHTML = '';
    preview.append(image);
  };
  var imagesName = document.getElementById(idInput).files[0].name;
  innerImages = document.getElementById(idinputUpdate).innerHTML = imagesName;
}


function saveImagesInServer(op, idSendUpdate, idPreview, idInputUpload, idInput, idForm,idChangeValue) {
  switch (op) {
    case "yes":
      $("#" + idSendUpdate).attr('disabled', false);
      $("#" + idPreview).hide();
      hideImage()
      saveImages(idPreview, idInputUpload, idInput, idForm,idChangeValue)
      break;
    case "no":
      $("#" + idPreview).hide()
      document.getElementById(idPreview).innerHTML = ""
      hideImage()
      innerImages = document.getElementById(idInputUpload).innerHTML = " "
      break;
    default:
      break;
  }
}


function saveImages(idPreview, idInputUpload, idInput, idForm,idChangeValue) {
  $("#" + idPreview).hide()
  document.getElementById(idChangeValue).value = document.getElementById(idInput).files[0].name
  var formData = new FormData(document.getElementById(idForm));
  formData.append("dato", "valor");
  hideImage();
  updateImagesInTheServer(formData);
}

function updateImagesInTheServer(formData) {
  $.ajax({
    url: "/images/upload",
    type: "post",
    dataType: "html",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      $("#updateInformationId").attr("disabled", false);
      $("#preview").hide();
      alertify.set('notifier', 'position', 'top-right');
      alertify.success('La imagen se Guardo correctamente');
    },
    error: function (textStatus, err) {}
  })
}

function resetImages() {
  $("#preview").hide();
  $(".messageEdit").hide();
  $("#updateInformationId").attr("disabled", true);
  document.getElementById('preview').innerHTML = "";
  document.getElementById("namefile").innerHTML = "Elija  una Imagen"
}
hideImage();
disabledButtons(true);