function LunesVienes() {
  objHorarioSelect.push({
    Lunes: {
      "dia": "Lunes",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Martes: {
      "dia": "Martes",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Miercoles: {
      "dia": "Miercoles",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Jueves: {
      "dia": "Jueves",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Viernes: {
      "dia": "Viernes",
      "horaEntrada": open,
      "horaCierre": close,
    }
  })

  horario.push({
    "Lunes": objHorarioSelect[0].Lunes.dia,
    "L_apertura": objHorarioSelect[0].Lunes.horaEntrada + ":00",
    "L_cierre": objHorarioSelect[0].Lunes.horaCierre + ":00",
    "Martes": objHorarioSelect[0].Martes.dia,
    "M_apertura": objHorarioSelect[0].Martes.horaEntrada + ":00",
    "M_cierre": objHorarioSelect[0].Martes.horaCierre + ":00",
    "Miercoles": objHorarioSelect[0].Miercoles.dia,
    "Mi_apertura": objHorarioSelect[0].Miercoles.horaEntrada + ":00",
    "Mi_cierre": objHorarioSelect[0].Miercoles.horaCierre + ":00",
    "Jueves": objHorarioSelect[0].Jueves.dia,
    "J_apertura": objHorarioSelect[0].Jueves.horaEntrada + ":00",
    "J_cierre": objHorarioSelect[0].Jueves.horaCierre + ":00",
    "Viernes": objHorarioSelect[0].Viernes.dia,
    "V_apertura": objHorarioSelect[0].Viernes.horaEntrada + ":00",
    "V_cierre": objHorarioSelect[0].Viernes.horaCierre + ":00",
    "Sabado": "",
    "S_apertura": "",
    "S_cierre": "",
    "Domingo": "",
    "D_apertura": "",
    "D_cierre": "",
    id: id[0].id
  })
}

function LunesSabado() {
  objHorarioSelect.push({
    Lunes: {
      "dia": "Lunes",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Martes: {
      "dia": "Martes",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Miercoles: {
      "dia": "Miercoles",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Jueves: {
      "dia": "Jueves",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Viernes: {
      "dia": "Viernes",
      "horaEntrada": open,
      "horaCierre": close,
    },
    Sabado: {
      "dia": "Sabado",
      "horaEntrada": open,
      "horaCierre": close,
    }
  })

  horario.push({
    "Lunes": objHorarioSelect[0].Lunes.dia,
    "L_apertura": objHorarioSelect[0].Lunes.horaEntrada + ":00",
    "L_cierre": objHorarioSelect[0].Lunes.horaCierre + ":00",
    "Martes": objHorarioSelect[0].Martes.dia,
    "M_apertura": objHorarioSelect[0].Martes.horaEntrada + ":00",
    "M_cierre": objHorarioSelect[0].Martes.horaCierre + ":00",
    "Miercoles": objHorarioSelect[0].Miercoles.dia,
    "Mi_apertura": objHorarioSelect[0].Miercoles.horaEntrada + ":00",
    "Mi_cierre": objHorarioSelect[0].Miercoles.horaCierre + ":00",
    "Jueves": objHorarioSelect[0].Jueves.dia,
    "J_apertura": objHorarioSelect[0].Jueves.horaEntrada + ":00",
    "J_cierre": objHorarioSelect[0].Jueves.horaCierre + ":00",
    "Viernes": objHorarioSelect[0].Viernes.dia,
    "V_apertura": objHorarioSelect[0].Viernes.horaEntrada + ":00",
    "V_cierre": objHorarioSelect[0].Viernes.horaCierre + ":00",
    "Sabado": objHorarioSelect[0].Sabado.dia,
    "S_apertura": objHorarioSelect[0].Sabado.horaEntrada + ":00",
    "S_cierre": objHorarioSelect[0].Sabado.horaCierre + ":00",
    "Domingo": "",
    "D_apertura": "",
    "D_cierre": "",
    id: id[0].id
  })

}
