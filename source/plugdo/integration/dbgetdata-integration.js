plugdo.integration("get-services", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetallServices").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});

plugdo.integration("get-price", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetprice").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});

plugdo.integration("get-forservices", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetservice").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});

plugdo.integration("get-hours", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGethour").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});

plugdo.integration("get-info", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetinfo").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("get-mprice", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetMPrice").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("get-promotion", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetpromotion").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("get-user", (message, send) => {
  let response = {};
  var token = Math.random().toString(36).substr(2)
  // console.log(message)
  plugdo.collect("mysqlGetuser").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
      var dataUser = response.result.Database[0].Table.Row[0]

    }
  });
})

plugdo.integration("get-horario", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGethorario").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("get-recomendate", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetrecomendate").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

// insert  User in database
plugdo.integration("get-insert", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetinsert").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("close-sesion", (message, send) => {
  let response = {};
  plugdo.collect("mysqlCloseSesion").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

/*  ##############################################################################
               INSERT INTO DATABSE     ONE  NEW SERVICE 
    #############################################################################
*/
plugdo.integration("send-local", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlSendLocal").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("send-services", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlSendService").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("send-images", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlSendImages").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("insert-hour", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlSendHour").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})


plugdo.integration("user-exist", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlUserExist").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})



plugdo.integration("insert-pay", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlSendMethodPay").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("get-ubication", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlGetZonas").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})

plugdo.integration("search-advanced", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlSearch").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})


/*  ##############################################################################
               UPDATE INTO DATABSE     ONE  NEW SERVICE
    ############################################################################# */
    plugdo.integration("getdata-update", (message, send) => {
      let response = {};
      // console.log(message)
      plugdo.collect("selectDataUpdate").get(message, (data, err) => {
        if (err) {
          send({}, err);
        } else {
          response.result = data;
          send(response);
        }
      });
    })
plugdo.integration("update-establecimiento", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlEsatablishmentUpdate").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})


plugdo.integration("update-hour", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlUpdateHour").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})


plugdo.integration("update-services", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlUpdateServices").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})


plugdo.integration("update-methodPay", (message, send) => {
  let response = {};
  // console.log(message)
  plugdo.collect("mysqlUpdateMethodPay").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
})


plugdo.integration("get-dataUpdate", (message, send) => {
  let response = {};
  plugdo.collect("mysqlGetallServicesUpdate").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});


plugdo.integration("update-production", (message, send) => {
  let response = {};
  plugdo.collect("mysqlUpdateProduction").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});


plugdo.integration("update-QuitProduction", (message, send) => {
  let response = {};
  plugdo.collect("mysqlUpdateQuitProduction").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});


plugdo.integration("update-images", (message, send) => {
  let response = {};
  plugdo.collect("mysqlUpdateImages").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});

plugdo.integration("update-imagesEstablishment", (message, send) => {
  let response = {};
  plugdo.collect("mysqlUpdateImagesEstablishment").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});

/*  ##############################################################################
                                      DELETE INTO DATABSE    
    #############################################################################
*/


plugdo.integration("delete-establishment", (message, send) => {
  let response = {};
  plugdo.collect("mysqlDeleteEstablishment").get(message, (data, err) => {
    if (err) {
      send({}, err);
    } else {
      response.result = data;
      send(response);
    }
  });
});