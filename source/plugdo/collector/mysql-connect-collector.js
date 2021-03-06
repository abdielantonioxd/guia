/*object data of connections mysql */
var objConnect = global.settings.db;

/** get to all the service of the establishment */
plugdo.collector("mysqlGetallServices", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSelecServices"
});
/** get the Price  of the establishment */
plugdo.collector("mysqlGetprice", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "CALL spSelectPrecio",
  parameter: ["json:post.Price", "json:post.service"]
});

/** get the service   of the establishment */
plugdo.collector("mysqlGetservice", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSelectServicio",
  parameter: ["json:post.Service", "json:post.subService", "json:post.ubication"]
});

/**know what establishment is open */
plugdo.collector("mysqlGethour", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spOpenNow",
  parameter: ["json:post.days", "json:post.hours"]
  // parameter: [""]
})
/* know the information of service  */
plugdo.collector("mysqlGetinfo", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSelectEstablecimiento",
  parameter: ["json:post._Id"]
})

/* know what  is the  price small   */
plugdo.collector("mysqlGetMPrice", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSelectMprice",
  parameter: ["json:integration"]
})
/* know which one has a promotion */
plugdo.collector("mysqlGetpromotion", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSelectPromotion"
})

//  get hours of establishment
plugdo.collector("mysqlGethorario", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spHorarioestablecimiento",
  parameter: ["json:post.id"]
})

// get recomedate establishment 
plugdo.collector("mysqlGetrecomendate", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spRecomedate"
})



/*  ##############################################################################
               INSERT INTO DATABSE     USERS 
    #############################################################################
*/
plugdo.collector("mysqlGetuser", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call validateUser",
  parameter: ["json:post.name", "json:post.lastName", "json:post.email", "json:post.password", "json:post.option", "json:header.token", "json:header.host"]
})

plugdo.collector("mysqlCloseSesion", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spCloseSesion",
  parameter: ["json:post.id"]
})
plugdo.collector("mysqlUserExist", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUserExist",
  parameter: ["json:post.id"]
})
/*  ##############################################################################
               INSERT INTO DATABSE     ONE  NEW SERVICE 
    #############################################################################
*/

plugdo.collector("mysqlSendLocal", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spInsertEstablecimiento",
  parameter: ["json:post.direction", "json:post.imagenPrincipal", "json:post.name", "json:post.email" ,"json:post.idPerfil",,"json:post.price", "json:post.tel", "json:post.mapa"]
})

plugdo.collector("mysqlSendService", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spInsertNewservice",
  parameter: ["json:post.subService", "json:post.service", "json:post.id"]
})

plugdo.collector("mysqlSendImages", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spInsertImages",
  parameter: ["json:post.imgOne", "json:post.imgTwo", "json:post.id"]
})

plugdo.collector("mysqlSendHour", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call SP_insertHour",
  parameter:  [
    "json:post.lunes",
    "json:post.lunesCierre",
    "json:post.martes",
    "json:post.martesCierre",
    "json:post.miercoles",
    "json:post.miercolesCierre",
    "json:post.jueves",
    "json:post.juevesCierre",
    "json:post.viernes",
    "json:post.viernesCierre",
    "json:post.sabado",
    "json:post.sabadoCierre",
    "json:post.domingo",
    "json:post.domingoCierre",
    "json:post.id",
  ]
})

plugdo.collector("mysqlSendMethodPay", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spInsertMethodPay",
  parameter: ["json:post.pay", "json:post.id"]
})

plugdo.collector("mysqlGetZonas", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spselectZonas",
  parameter: ["json:post.zonas"]
})

plugdo.collector("mysqlSearch", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSearchAdvanced",
  parameter: ["json:post.search"]
})

/*  ##############################################################################
               UPDATE INTO DATABSE     ONE  NEW SERVICE
    #############################################################################
*/

plugdo.collector("selectDataUpdate", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call SP_selectDataUpdate",
  parameter: ["json:post.id"]
})


plugdo.collector("mysqlEsatablishmentUpdate", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateEstablishment",
  parameter: ["json:post.id", "json:post.direction", "json:post.imagenPrincipal", "json:post.name", "json:post.price", "json:post.tel", "json:post.mapa", "json:post.promociones"]
})


plugdo.collector("mysqlUpdateHour", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateHour",
  parameter: [
    "json:post.LunesApertura",
    "json:post.LunesCierre",
    "json:post.MartesApertura",
    "json:post.MartesCierre",
    "json:post.MiercolesApertura",
    "json:post.MiercolesCierre",
    "json:post.JuevesApertura",
    "json:post.JuevesCierre",
    "json:post.ViernesApertura",
    "json:post.ViernesCierre",
    "json:post.SabadoApertura",
    "json:post.SabadoCierre",
    "json:post.DomingoApertura",
    "json:post.DomingoCierre",
    "json:post.id",
  ]
})


plugdo.collector("mysqlUpdateServices", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateServices",
  parameter: ["json:post.servicePrincipal", "json:post.services", "json:post.id"]
})

plugdo.collector("mysqlUpdateMethodPay", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateMethodPay",
  parameter: ["json:post.methodPay", "json:post.id"]
})


plugdo.collector("mysqlGetallServicesUpdate", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spSelecServicesUpdate"
});

plugdo.collector("mysqlUpdateProduction", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateProduction",
  parameter: ["json:post.prod", "json:post.id"]
})

plugdo.collector("mysqlUpdateQuitProduction", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateQuitProduction",
  parameter: ["json:post.prod", "json:post.id"]
})


plugdo.collector("mysqlUpdateImages", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spUpdateImages",
  parameter: ["json:post.id"]
})

plugdo.collector("mysqlUpdateImagesEstablishment", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call UpdateImagesEstablishment",
  parameter: ["json:post.imagesOne", "json:post.imagesTwo", "json:post.idOne", "json:post.idTwo"]
})
/*  ##############################################################################
              DELETE  INTO DATABSE     ONE   ESTABLISHMENT 
    #############################################################################
*/

plugdo.collector("mysqlDeleteEstablishment", {
  type: "db",
  action: "mysql",
  server: objConnect,
  queryType: "stored-procedure",
  query: "call spDeleteEstablishment",
  parameter: ["json:post.id"]
})
