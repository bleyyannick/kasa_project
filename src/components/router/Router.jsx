import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Location from '../../pages/Location/Location';

import { createBrowserRouter } from 'react-router-dom'; 


const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home />, 
        errorElement: <ErrorPage />
    },
    {
        path:"/location/:id", 
        element: <Location />, 
        errorElement: <ErrorPage />
    },
    {
        path:"/about", 
        element: <About />, 
        errorElement: <ErrorPage />
    },
]); 


export default router; 