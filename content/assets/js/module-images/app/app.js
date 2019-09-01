'use strict'
var imagesProfileRender = "";
var imagesIdRender = "";
var imagesThreeRender = "" ; 
$('#imagespView').hide();
$('#imagesoView').hide();
$('#imagestView').hide();
window.upload = new uploadImagesServer({
  Module: "upload-image", save: [{ btn1: "saveImagesPerfil", btn2: "saveImagesId" ,btn3:"saveImagesThree" }]
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
  objImagesLocal.push({
      imageslocal: nameImagesId,
  })
  console.log(objImagesLocal)
}

function chooseAnotherImagesId() {
  upload.chooseAnother(configId);
  objImagesLocal.splice(0, 1);
}

/* validation ImagesThree */
function validateUploadThree(input) {
  console.log(input)
  var nameImagesThree= document.getElementById(configThree[0].idInput).files[0].name;
  imagesThreeRender = nameImagesThree;
  configThree.push({
    data: input
  });
  upload.registerDataForm(configThree);

  objImagesLocalTree.push({
    imageslocal: nameImagesThree
  })
  console.log(objImagesLocalTree)
}

function chooseAnotherImagesId() {
  upload.chooseAnother(configId);
  objImagesLocalTree.splice(0, 1);
}


// save Images in the server 
function uploadImagesServ() {
  upload.saveImages({
    url: '/upload'
  });

  if (imagesIdRender != "" && imagesIdRender != undefined) { 
    document.getElementById("chamgeImagesO").src = "/public/images/" + imagesIdRender;
    $('#imagesoView').show()
  }

  if (imagesProfileRender != "" && imagesProfileRender != undefined) {
    document.getElementById("chamgeImages").src = "./public/images/" + imagesProfileRender;
    $('#imagespView').show()
  }
  if (imagesThreeRender != "" && imagesThreeRender != undefined) {
    document.getElementById("chamgeImagesT").src = "./public/images/" + imagesThreeRender;
    $('#imagestView').show()
  }

}


// delete Images in the server 
function deleteFiles() {
  deleteFile.deleteImages({
    name: '',
    Url: "/delete"
  })
}
