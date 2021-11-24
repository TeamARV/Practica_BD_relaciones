const Usuario = require("../modelos/Usuario.js")

module.exports.usuarioresolvers = {
 
    Query: {
      test: () => 'hola desde usuario',

      Usuarios: async (parent, args) => {
        const usuarios = await Usuario.find();
        return usuarios;
      },
      

    },


  };