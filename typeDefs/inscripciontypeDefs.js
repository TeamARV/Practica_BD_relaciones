
const { gql } = require('apollo-server-express');
const Inscripcion = require("../modelos/Inscripcion.js")


module.exports.inscripciontypeDefs = gql`
type Inscripcion{
    proyecto:Proyecto,
    estudiante: Usuario,
    estado: String,
    fechaIngreso: String,
    fechaEgreso: String 
}
type Query {
  "A simple type for getting started!"
  testi: String
  Inscripciones: [Inscripcion]
}
`;

