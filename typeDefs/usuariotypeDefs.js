
const { gql } = require('apollo-server-express');


module.exports.usuariotypeDefs = gql`
 type Usuario {
    _id: ID!
    correo: String
    identificacion: String
    nombreCompleto: String
    clave: String
    tipoUsuario: String
    estado: String
  }
type Query {
  "A simple type for getting started!"
  test: String
  Usuarios: [Usuario]
}
`;

