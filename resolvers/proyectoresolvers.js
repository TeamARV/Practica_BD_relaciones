const Proyecto = require("../modelos/Proyecto.js")




module.exports.proyectoresolvers = {
    Query: {
      testp: () => 'hola desde proyecto',
      Proyectos: async (parent, args) => {
        const proyectos = await Proyecto.find().populate("inscritos").populate("lider");
        return proyectos;
      },
      
    },
  };