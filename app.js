/* import express from "express"; */  //nueva notacion ES6

const express = require("express")
const app = express()
const conexion = require("./db")



app.use(express.urlencoded({extended:true}))
app.use(express.json())

const usuarios = require("./rutas/usuarios")
const proyectos = require("./rutas/proyectos")
app.use(usuarios)
app.use(proyectos)

app.get("/",(req,res)=>{
res.send("hola andrés  : )")
})

app.listen(3000 ,()=>{
console.log("asdf")
})