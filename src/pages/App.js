import React from 'react'  ;
import routes from './client_routes' ;
import {Route,Switch} from 'react-router-dom' ;

function App(props){



    return (

        

        <Switch>
            {
                routes.map(({ path, exact, component: C, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={(props) => (
                        <C {...props} {...rest} />
                        )}
                    />
                    ))
            }
        </Switch>
    );




}

export default App ;