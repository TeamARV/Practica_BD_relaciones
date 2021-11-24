
const { gql } = require('apollo-server-express');


module.exports.proyectotypeDefs = gql`
type Proyecto{
    nombre: String,                 
    presupuesto: Float,
    objetivosGenerales: [String],
    objetivosEspecificos: [String],
    fechaInicio: String,
    fechaFin: String,
    estado: String,
    faseProyecto: String,
    inscritos: [Usuario],        
    avances: [String],         
    lider: Usuario
}
type Query {
  "A simple type for getting started!"
  testp: String
  Proyectos: [Proyecto]
}
`;

