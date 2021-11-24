const Avance = require("../modelos/Avance.js")


module.exports.avanceresolvers = {
    Query: {
      testA: () => 'hola desde avance',
      Avances: async (parent, args) => {
        const avance = await Avance.find().populate("proyecto")
        return avance;
      },


    },
  };