const Inscripcion = require("../modelos/Inscripcion.js")


module.exports.inscripcionresolvers = {
    Query: {
      testi: () => 'hola desde inscripcion',
      Inscripciones: async (parent, args) => {
        const inscripcion = await Inscripcion.find().populate("proyecto").populate("estudiante");
        return inscripcion;
      },


    },
  };