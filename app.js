/* import express from "express"; */  //nueva notacion ES6

const express = require("express")
const app = express()
const conexion = require("./db")



app.use(express.urlencoded({extended:true}))
app.use(express.json())

const usuarios = require("./rutas/usuarios")
const proyectos = require("./rutas/proyectos")
const avances = require("./rutas/avances")
app.use(usuarios)
app.use(proyectos)
app.use(avances)

app.get("/",(req,res)=>{
res.send("hola este es el backend de InsertName  🐱‍👤 http://www.algo.com")
})

app.listen(3000 ,()=>{
console.log("asdf")
})