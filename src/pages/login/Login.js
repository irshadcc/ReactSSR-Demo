import React, {useState, useEffect} from 'react'
// import styles from './Login.module.css'
import {Redirect} from 'react-router-dom' ;




import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title :{
        'text-align' : 'center'
    },
    avatar: {
      margin: '0 auto',
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function Login(props){

    let data = props.staticContext===undefined ? window.__INITIAL_DATA__ : props.staticContext 

    let [email,setEmail] = useState('irshadcc135@gmail.com') 
    let [password,setPassword] = useState('password')
    let [isAuthenticated,setIsAuthenticated] = useState(false)

    const classes = useStyles() ;


    const handleSubmit = (event)=>{
        event.preventDefault();        

        fetch('/login',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }).then((res)=>{
            if(res.status == 200 && res.redirected == true){
                window.location.pathname = '/dashboard' ;
                setIsAuthenticated(true)   
            }

            console.log(res)

        }).catch((err)=>{
            console.log(err) ;
        })

    }

    return (
        
        <Container>  
            <CssBaseline></CssBaseline>
            <Grid container justify="center">
                <Grid item xs={12} lg={6}>
                    <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" className={classes.title}>
                            Sign in
                        </Typography>
                        <form 
                            className={classes.form} 
                            onSubmit={handleSubmit}
                            noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e)=>{setEmail(e.target.value)}}
                                value={email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                                value={password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            > Sign In </Button>
                            <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                            </Grid>
                        </form>
                </Grid>
            </Grid>
        </Container>
    )

}


export default Login ;