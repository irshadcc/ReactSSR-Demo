import React from "react";
import express from 'express' ;
import ReactDOMServer from "react-dom/server" ;
import html from '../../lib/html'
import authLib, { authMiddleWare } from '../../lib/auth' ;

import App from './../App'
import { StaticRouter} from 'react-router-dom'

const path = '/dashboard'

let router = express.Router()

router.use(authMiddleWare) ;

router.get('/',(req,res)=>{



    let context = {} 
    const jsx = ReactDOMServer.renderToString(
        <StaticRouter location={path+req.url} context={context}>
            <App></App>
        </StaticRouter>
    )
    console.log(jsx)
    res.send(html(jsx,context))

})

export default [{
    path : path,
    router : router 
}]