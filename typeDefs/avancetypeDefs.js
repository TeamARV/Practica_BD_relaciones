
const { gql } = require('apollo-server-express');


module.exports.avancetypeDefs = gql`
type Avance{
    proyecto:Proyecto,
    fechaAvance: String,
    descripcion: String,
    observacionesLider: String,
              
}
type Query {
  "A simple type for getting started!"
  testA: String
  Avances: [Avance]
}
`;

