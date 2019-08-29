'use strict'
var imagesProfileRender = "";
var imagesIdRender = "";
$('#imagespView').hide();
window.upload = new uploadImagesServer({
  Module: "upload-image", save: [{ btn1: "saveImagesPerfil", btn2: "saveImagesId" }]
})

window.deleteFile = new deleteFileInServer({
  Module: "delete-image",
  msgErrActive: true,
  useSweetAlert: false,
  useAlertify: false,
  useConsole: true
})

/* validation Images Principal */
function validateUpload(input) {
  var imagesPofile = document.getElementById(config[0].idInput).files[0].name;
  imagesProfileRender = imagesPofile
  config.push({
    data: input
  });
  upload.registerDataForm(config);

  imagesP.push({
    name: imagesPofile
  })

}

function chooseAnotherImages() {
  upload.chooseAnother(config);
  imagesP.splice(0, 1);
}

/* validation ImagesID */
function validateUploadId(input) {
  var nameImagesId = document.getElementById(configId[0].idInput).files[0].name;
  imagesIdRender = nameImagesId;
  configId.push({
    data: input
  });
  upload.registerDataForm(configId);
  imagesID.push({
    name: nameImagesId
  })
}

function chooseAnotherImagesId() {
  upload.chooseAnother(configId);
  imagesID.splice(0, 1);
}

// save Images in the server 
function uploadImagesServ() {
  upload.saveImages({
    url: '/upload'
  });

  if (imagesIdRender != "" && imagesIdRender != undefined) { 
    document.getElementById("chamgeImagesID").src = "/public/images/" + imagesIdRender;
  }

  if (imagesProfileRender != "" && imagesProfileRender != undefined) {
    document.getElementById("chamgeImages").src = "./public/images/" + imagesProfileRender;
    $('#imagespView').show()
  }

}

// delete Images in the server 
function deleteFiles() {
  deleteFile.deleteImages({
    name: '',
    Url: "/delete"
  })
}
