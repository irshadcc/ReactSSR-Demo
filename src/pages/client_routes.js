import Login from './login/Login' 
import Dashboard from './dashboard/Dashboard'


var routes = [

    {
        path : '/login',
        exact : true ,
        component : Login,
    },
    {
        path : '/dashboard',
        exact : true,
        component : Dashboard,
    }
]




export default routes