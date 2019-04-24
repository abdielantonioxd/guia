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
  parameter: ["json:post.email", "json:post.password", "json:header.token", "json:header.host"]
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
  parameter: ["json:post.direction", "json:post.imagenPrincipal", "json:post.name", "json:post.price", "json:post.tel"]
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
  query: "call spInsertHour",
  parameter: [
    "json:post.Lunes",
    "json:post.L_apertura",
    "json:post.L_cierre",
    "json:post.Martes",
    "json:post.M_apertura",
    "json:post.M_cierre",
    "json:post.Miercoles",
    "json:post.Mi_apertura",
    "json:post.Mi_cierre",
    "json:post.Jueves",
    "json:post.J_apertura",
    "json:post.J_cierre",
    "json:post.Viernes",
    "json:post.V_apertura",
    "json:post.V_cierre",
    "json:post.Sabado",
    "json:post.S_apertura",
    "json:post.S_cierre",
    "json:post.Domingo",
    "json:post.D_apertura",
    "json:post.D_cierre",
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