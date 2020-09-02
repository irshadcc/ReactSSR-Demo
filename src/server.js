import path from "path";
import express from "express";
import routes from './pages/server_routes' ;
import bodyParser from 'body-parser' ;
import cookieParser from 'cookie-parser' ;

const app = express();

const colors = {
 Reset: "\x1b[0m",
 Bright: "\x1b[1m",
 Dim: "\x1b[2m",
 Underscore: "\x1b[4m",
 Blink: "\x1b[5m",
 Reverse: "\x1b[7m",
 Hidden: "\x1b[8m",
 fg: {
  Black: "\x1b[30m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
  Magenta: "\x1b[35m",
  Cyan: "\x1b[36m",
  White: "\x1b[37m",
  Crimson: "\x1b[38m" //القرمزي
 },
 bg: {
  Black: "\x1b[40m",
  Red: "\x1b[41m",
  Green: "\x1b[42m",
  Yellow: "\x1b[43m",
  Blue: "\x1b[44m",
  Magenta: "\x1b[45m",
  Cyan: "\x1b[46m",
  White: "\x1b[47m",
  Crimson: "\x1b[48m"
 }
};


app.use(cookieParser())
app.use(bodyParser.json({ type: 'application/json' }))

app.use('/static',express.static(path.resolve('dist')))



routes.forEach((route)=>{

    console.log(colors.fg.Blue,"Mounting Router : ",colors.fg.Green,route.path,colors.Reset);
    app.use(route.path,route.router) ;
})



app.listen( 3000 );
