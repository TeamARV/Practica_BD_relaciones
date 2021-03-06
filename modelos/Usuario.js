const  mongoose  = require("mongoose")


const Shema = mongoose.Schema


const usuarioShema = new Shema ({

    correo: 
    {
        type: String,
        required: true,
        unique: true
    },
    identificacion: String,
    nombreCompleto: String,
    clave: String,
    tipoUsuario: String,
    estado: {
        type: String,
        default:"Pendiente",
    }

},  {versionKey:false})

/* usuarioShema.virtual('algo', {
    ref: 'proyecto',
    localField: '_id',
    foreignField: 'presupuesto',
  });
   */

module.exports = mongoose.model("usuarios" ,usuarioShema )

