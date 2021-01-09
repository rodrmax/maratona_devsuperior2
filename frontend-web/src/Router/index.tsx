import { BrowserRouter, Switch, Route } from "react-router-dom"
import Order from "../Order"
import Home from "../Home"
import Navbar from "../Navbar"

function Routes(){
    return(
        <BrowserRouter>
         <Navbar />
            <Switch>
                <Route path="/order">
                    <Order />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
