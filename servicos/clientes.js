const express = require ('express')
const bodyparser = require ('body-parser')

const app  =  new  express ()
const faker  =  require ('faker')

app.use  (bodyparser())

app.get ( '/:cpf' ,  ( req ,  res )  =>  {
    const  { cpf }  =  req . params

    res.status ( 200 ).json ( {
        cpf ,
        nome : faker.nome.findName ( ) ,
        dataDeNascimento : faker.data.passado ( )
    } )
} )

app.ouvir ( 8082, ()  =>  console.log ( 'Api rodando' ) )