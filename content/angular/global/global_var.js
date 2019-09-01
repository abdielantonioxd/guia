var UrlServInsert = `/api/send-services/json`;
var urlInserImages = `/api/send-images/json`;
var UrlcloseSesion = `/api/close-sesion/json`;
var UrlInsertHour = `/api/insert-hour/json`;
var UrlPayMethod = `/api/insert-pay/json`;
var UrlZonas = `/api/get-ubication/json`;
var sendEmail = "/send-email"
var Urlprice = `/api/get-price/json`;
var Urlservice = `/api/get-forservices/json`;
var Urlhour = `/api/get-hours/json`;
var UrlHorario = `/api/get-horario/json`;
var Urlinfo = `/api/get-info/json`;
var Urlrecomdate = `/api/get-recomendate/json`;
var UrlMP = `/api/get-mprice/json`;
var Urlinsert = `/api/get-insert/json`;
var Urlpromotion = `/api/get-promotion/json`;
var Urluser = `/api/get-user/json`;
var UrlLocalInsert = "/api/send-local/json";
var UrlSearchAdvanced = "/api/search-advanced/json";
var UrlUpdateEstablishment = "/api/update-establecimiento/json";
var UrlUpdateHour = "/api/update-hour/json";
var UrlUpdateService = "/api/update-services/json";
var UrlMethodPay = "/api/update-methodPay/json";
var UrlProductionService = "/api/update-production/json";
var UrlQuitProductionService = "/api/update-QuitProduction/json";
var UrlDeleteLocal = "/api/delete-establishment/json";
var UrlimagesUpdate = "/api/update-images/json";
var UrlUpdateEstablishmentImages = "/api/update-imagesEstablishment/json";
var informationLocal = "";
var telefono = "";
var MetodosPago = "";
var data_app = "";
var nombreEst = "";
var dataUbication = "";
var dataweek = "";
var Serv = "";
var other_Serv = "";
var Price_val = "";
var day = "";
var HoursA = "";
var HoursC = "";
var Price = "";
var users = "";
var imageslocalOne = "";
var imageslocalTwo = "";
var nameUseradmin = "";
var Services = [];
var objdataform = [];
var objdarweek = [];
var imagesP = [];
var updateImagesP = [];
var objservicesget = [];
var objservicesgetothers = [];
var objImagesLocal = [];
var objImagesLocalTree = [];
var objHoursEstablishment = []
var objname = []
var sesionActive = false;
var objUserAdminRolOne = "";
var idObj = [];
var exist = "";
var objHorarioSelect = []
var open = "";
var close = "";
var horario = [];
var id = [];
var click = 0;
var Price_valGet = "";
var resultOf = []
var serviceSelected = "";
var subServiceselected = "";
var objMethodPay = [];
var ObjresultJSON = [];
var ObjSearchAdvanced = []
var ObjectSearchAdvanced = [];
var S = "";
var reader = new FileReader();

// configuration Images Global 
var config = [{
  contentImput: "image-upload-input-wrap",
  idInput: "file-upload-input",
  contentUpload: "file-upload-content",
  viewImages: "file-upload-image",
  titleImages: "image-title",
  idErr: "errMessage",
  templateErr: "",
  nameForm: "imagesPrincipal",
  size: 1024 * 1024,
  validateSize: false,
  validateFormats: true,
  validateSpace: true,
  preview: true,
  useSweetAlert: false,
  useAlertify: true,
}];

var configId = [{
  contentImput: "image-upload-input-wrap-Id",
  idInput: "file-upload-input-Id",
  contentUpload: "file-upload-content-Id",
  viewImages: "file-upload-image-Id",
  titleImages: "image-title-Id",
  idErr: "errMessage-Id",
  templateErr: "",
  nameForm: "imagesId",
  size: 1024 * 1024,
  validateSize: false,
  validateFormats: true,
  validateSpace: true,
  preview: true,
  useSweetAlert: false,
  useAlertify: true,
}];

var configThree = [{
  contentImput: "image-upload-input-wrap-Three",
  idInput: "file-upload-input-Three",
  contentUpload: "file-upload-content-Three",
  viewImages: "file-upload-image-Three",
  titleImages: "image-title-Three",
  idErr: "errMessage-Three",
  templateErr: "",
  nameForm: "imageThree",
  size: 1024 * 1024,
  validateSize: false,
  validateFormats: true,
  validateSpace: true,
  preview: true,
  useSweetAlert: false,
  useAlertify: true,
}];
