// object price 
var objPrice = [{
  Price: 8,
  id: "Price1",
  de: "Desde $8 "
},
{
  Price: 10,
  id: "Price2",
  de: "De 8.00 a $15.00 "
},
{
  Price: 20,
  id: "Price3",
  de: "De 15,00 a $20.00 "
},
{
  Price: 25,
  id: "Price4",
  de: "Más de $20.00 "
}
]

var methodPay = [{
  method: 'Efectivo',
  id: 'Efectivo',
},
{
  method: "Tarjeta Debiro",
  id: "Tarjeta Debiro",
},
{
  method: "Tarjeta creadito",
  id: "Tarjeta credito",
},
{
  method: "Visa",
  id: "Visa",
},
{
  method: "mastercard ",
  id: "mastercard",
}
]


//   object services checkbox 
var objServices = [{
  Service: "Salones",
  id: "Salones"
},
{
  Service: "Barberias",
  id: "Barberias"
},
{
  Service: "Estética",
  id: "Estética"
},
{
  Service: "Clínicas Dentales",
  id: "Clínicas Dentales"
},
{
  Service: "Functional Training",
  id: "Functional Training"
},
{
  Service: "Cejas y Pestañas",
  id: "Cejas y Pestañas"
},
{
  Service: "Uñas",
  id: "Unas"
},
{
  Service: "Depilación",
  id: "Depilación"
},
{
  Service: "Masajes y Spa",
  id: "Masajes y Spa"
}
];

//   object sub services checkbox 
var objsubServicesSalones = [{
  Service: "Corte de cabello",
  id: "Corte de cabello"
},
{
  Service: "Lavado",
  id: "Lavado"
},
{
  Service: "Planchado",
  id: "Planchado"
},
{
  Service: "Alizados",
  id: "Alizados"
},
{
  Service: "Peinados",
  id: "Peinados"
},
{
  Service: "Maquillaje",
  id: "Maquillaje"
},
{
  Service: "Uñas",
  id: "Uñas"
},
{
  Service: "Masajes",
  id: "Masajes"
}
];

var objsubServiceBarberia = [{
  Service: "Corte de cabello",
  id: "Corte de cabello"
},
{
  Service: "Lavado",
  id: "Lavado"
},
{
  Service: "Alizados",
  id: "Alizados"
},
{
  Service: "Barba",
  id: "Barba"
},
{
  Service: "Tinte",
  id: "Tinte"
},
{
  Service: "Manicure",
  id: "Manicure"
}
];

var objsubServiceEstetica = [{
  Service: "Reducción de medidas",
  id: "Reducción de medidas"
},
{
  Service: "Tratamientos corporales",
  id: "Tratamientos corporales"
},
{
  Service: "Masajes",
  id: "Masajes"
},
{
  Service: "Depilación",
  id: "Depilación"
},
{
  Service: "Faciales",
  id: "Faciales"
},
{
  Service: "Tratamientos de la piel",
  id: "Tratamientos de la piel"
}
];

var objsubServiceCejasPesta = [{
  Service: "Diseño de cejas",
  id: "Diseño de cejas"
},
{
  Service: "Micropigmentación",
  id: "Micropigmentación"
},
{
  Service: "Pestañas Postizas",
  id: "Pestañas Postizas"
},
{
  Service: "Pestañas punto por punto",
  id: "Pestañas punto por punto"
},
{
  Service: "Microblanding",
  id: "Microblanding"
}
];

var objsubServiceUñas = [{
  Service: "Manicure",
  id: "Manicure"
},
{
  Service: "Pedicure",
  id: "Pedicure"
},
{
  Service: "Shellac",
  id: "Shellac"
},
{
  Service: "Uñas Esculpidas",
  id: "Uñas Esculpidas"
},
{
  Service: "Podología",
  id: "Podología"
}
];


var objsubServiceClinicas = [{
  Service: "Limpieza",
  id: "Limpieza "
},
{
  Service: "Diseño de sonrisa",
  id: "Diseño de sonrisa"
},
{
  Service: "Blanqueamiento",
  id: "Blanqueamiento"
},
{
  Service: "Tratamiento Odontológico",
  id: "Tratamiento Odontológico"
},
{
  Service: "Ortodoncia",
  id: "Ortodoncia"
},
{
  Service: "Odontología Cosmética",
  id: "Odontología Cosmética"
},
{
  Service: "Cirugía Maxilofacial",
  id: "Cirugía Maxilofacial"
},
{
  Service: "Implantología",
  id: "Implantología"
}
];


var objsubServiceFunctional = [{
  Service: "TRX",
  id: "TRX"
},
{
  Service: "Crossfit",
  id: "Crossfit "
},
{
  Service: "Bootcamp",
  id: "Bootcamp "
},
{
  Service: "Entrenamiento",
  id: "Entrenamiento"
},
{
  Service: "Personalizado",
  id: "Personalizado"
},
{
  Service: "Suplementos",
  id: "Suplementos"
},
{
  Service: "Gimnasio",
  id: "Gimnasio"
},
{
  Service: "Rutinas",
  id: "Rutinas"
}
];



var objsubServiceDepilacion = [{
  Service: "Depilación Láser",
  id: "Depilación Láser"
},
{
  Service: "Depilación Hilo",
  id: "Depilación Hilo"
},
{
  Service: "Depilación Cera",
  id: "Depilación Cera"
},
{
  Service: "Depilación Bikini",
  id: "Depilación Bikini"
}
];
var objsubServiceMasajesEspa = [{
  Service: "Masajes relajantes",
  id: "Masajes relajantes"
},
{
  Service: "Masajes reductores",
  id: "Masajes reductores"
},
{
  Service: "Masajes Terapéuticos",
  id: "Masajes Terapéuticos"
},
{
  Service: "Aromaterapia",
  id: "Aromaterapia"
},
{
  Service: "Musicoterapia",
  id: "Musicoterapia"
},
{
  Service: "Cromoterapia",
  id: "Cromoterapia"
}
];
//   object services select 
{
  var objservicesOptions = {
    availableOptions: [{
      id: 'Orden',
      name: 'Ordenar Por'
    },
    {
      id: 'Salones',
      name: 'Salones'
    },
    {
      id: 'Barberias',
      name: 'Barberias'
    },
    {
      id: 'Estética',
      name: 'Estética'
    },
    {
      id: 'Clínicas Dentales',
      name: 'Clínicas Dentales'
    },
    {
      id: 'Functional Training',
      name: 'Functional Training'
    }
      // {
      //   id: 'MP',
      //   name: 'Menor Precio'
      // }
      // ,
      // {
      //   id: 'Popularidad',
      //   name: 'Popularidad'
      // }
      // ,
      // {
      //   id: 'Promociones',
      //   name: 'Promociones'
      // }
    ],
    selectedOption: {
      id: 'Orden',
      name: 'Ordenar Por'
    } //This sets the default value of the select in the ui
  }
};
// object ubication 
var objectUbication = {
  Panama: [{
    id: 'Ubication',
    name: 'Ubicación del local'
  },
  {
    id: 1,
    name: "24 de Diciembre",

  },
  {
    id: 2,
    name: "Alcalde Díaz"
  },
  {
    id: 3,
    name: "Ancón"
  },
  {
    id: 4,
    name: "Betania"
  },
  {
    id: 5,
    name: "Bella Vista"
  },
  {
    id: 6,
    name: "Calidonia"
  },
  {
    id: 7,
    name: "Caimitillo"
  },
  {
    id: 8,
    name: "Chilibre"
  },
  {
    id: 9,
    name: "El Chorrillo"
  },
  {
    id: 10,
    name: "Curundú"
  }, {
    id: 1345,
    name: "Via Argentina"
  }, {
    id: 9980,
    name: "Multiplaza"
  },
  {
    id: 11,
    name: "Ernesto Córdoba Campos"
  },
  {
    id: 12,
    name: "Juan Díaz"
  },
  {
    id: 13,
    name: "24 de Diciembre"
  },
  {
    id: 14,
    name: "Las Cumbres"
  },
  {
    id: 15,
    name: "Las Mañanitas"
  },
  {
    id: 16,
    name: "Pacora"
  },
  {
    id: 16,
    name: "Panamá"
  },
  {
    id: 40,
    name: "Punta Pacifica"
  },
  {
    id: 17,
    name: "Parque Lefevre"
  },
  {
    id: 18,
    name: "Pedregal"
  },
  {
    id: 19,
    name: "Pueblo Nuevo"
  },
  {
    id: 20,
    name: "Río Abajo"
  },
  {
    id: 21,
    name: "San Felipe"
  },
  {
    id: 22,
    name: "San Francisco"
  },
  {
    id: 23,
    name: "San Martín"
  },
  {
    id: 24,
    name: "Santa Ana"
  },
  {
    id: 25,
    name: "Tocumen"
  }

  ],
  selectedOption: {
    id: 'Ubication',
    name: 'Ubicación del local'
  }
}

var objectweekdays = {
  week: [{
    id: "week",
    name: "Dias"
  }, {
    id: "Lunes",
    name: "Lunes"
  }, {
    id: "Martes",
    name: "Martes"
  }, {
    id: "Miercoles",
    name: "Miercoles"
  }, {
    id: "Jueves",
    name: "Jueves"
  }, {
    id: "Viernes",
    name: "Viernes"
  }, {
    id: "Sabado",
    name: "Sabado"
  }, {
    id: "Domingo",
    name: "Domingo"
  }

  ],
  selectedOption: {
    id: 'week',
    name: 'Dias'
  }

}

var daysweek = [{
  weekdays: "Lunes",
  id: "Lunes",
  id_HoursA: "input_lunesA",
  id_HoursC: "input_lunesC"
}, {
  weekdays: "Martes",
  id: "Martes",
  id_HoursA: "input_martesA",
  id_HoursC: "input_martesC"

}, {
  weekdays: "Miercoles",
  id: "Miercoles",
  id_HoursA: "input_miercolesA",
  id_HoursC: "input_miercolesC"
}, {
  weekdays: "Jueves",
  id: "Jueves",
  id_HoursA: "input_juevesA",
  id_HoursC: "input_juevesC"
}, {
  weekdays: "Viernes",
  id: "Viernes",
  id_HoursA: "input_viernesA",
  id_HoursC: "input_viernesC"

}, {
  weekdays: "Sabado",
  id: "Sabado",
  id_HoursA: "input_sabadoA",
  id_HoursC: "input_sabadoC"

}, {
  weekdays: "Domingo",
  id: "Domingo",
  id_HoursA: "input_domingoA",
  id_HoursC: "input_domingoC"
}]

var objfind = {
  avaliableFind: [{
    id: 0,
    name: "Cómo nos conoció"
  }, {
    id: 1,
    name: "Facebook"
  }, {
    id: 2,
    name: "Instagram"
  },
  {
    id: 3,
    name: "Recomendado"
  },
  {
    id: 4,
    name: "Solicitado"
  }

  ],
  selectedOption: {
    id: 0,
    name: "Cómo nos conoció"
  }
}