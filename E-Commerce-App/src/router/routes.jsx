import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/user/Home"
import Product from "../pages/user/Product"
import AboutUs from "../pages/user/AboutUs"
import ContactUs from "../pages/user/ContactUs"
import UserLayout from "../layouts/UserLayout"



const router = createBrowserRouter([

    { path: "/", element: <UserLayout/>,
        children:[
            {path:"/", element: <Home/>},
            {path:"/products", element: <Product/>},
            {path:"/about-us", element: <AboutUs/>},
            {path:"/contact-us", element: <ContactUs/>},
        ]
    },
    




])

export default router