import React from "react";
import express from 'express' ;
import ReactDOMServer from "react-dom/server" ;
import html from '../../lib/html' ;
import { generateToken } from '../../lib/auth' ;

import App from './../App'
import { StaticRouter} from 'react-router-dom'

const path = '/login'

let router = express.Router()

router.get('/',(req,res)=>{

    let context = {a : 1} 
    const jsx = ReactDOMServer.renderToString(
        <StaticRouter location={path+req.url} context={context}>
            <App></App>
        </StaticRouter>
    )
    res.send(html(jsx,context))

})

router.post('/',(req,res)=>{

    if(req.body.email == 'demo@gmail.com' && req.body.password == 'password'){
        
        let token = generateToken(req.body) ;
        
        res.cookie('token',token,{httpOnly : true}) 
        res.redirect('/dashboard')
    } else {
        
        res.status(401)
        .json("Authentication failure")
    }
})



export default [{
    path : path,
    router : router
}] ;