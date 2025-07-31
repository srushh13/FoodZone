import { createBrowserRouter } from "react-router";
import App from "../App";
import Body from "../Components/Body"
import About from "../Components/About";
import Contact from "../Components/Contact";
import Cart from "../Components/Cart"
import Menu from "../Components/Menu"

const appRouter = createBrowserRouter([
{
    path : "/",
    Component : App,
    children : [
        {
            path: "/",
            Component : Body
        },
        {
            path: "/about",
            Component: About
        },
        {
            path : "/contact",
            Component: Contact
        },

        {
            path : "/cart",
            Component : Cart
        },
        {
            path : "/restaurant/:title",
            Component: Menu
        }
    ]
},

])

export default appRouter 