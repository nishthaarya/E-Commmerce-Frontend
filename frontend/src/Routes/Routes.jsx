import React, { useState } from "react";
import {Route, Switch} from "react-router-dom"
import { Cart } from "../Components/Cart/Cart";
import { Home } from "../Components/Home/Home";
import {NavBar} from "../Components/NavBar/NavBar"
import { BackDrop } from "../Components/BackDrop/BackDrop";
import { SideBar } from "../Components/SideBar/SideBar";
import { ViewProduct } from "../Components/ViewProduct/ViewProduct";
import { Contact } from "../Components/Contact/Contact";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Profile from "../Components/Profile/Profile";
import { Confirm } from "../Components/Cart/Confirm/Confirm";
import { Checkout } from "../Components/Checkout/Checkout";

export const Routes = () => {

    const [side, setSide] = useState(false)

    return (
        <div>
            <NavBar click = {() => setSide(true)} />
            <BackDrop show = {side} click = {() => setSide(false)}  />
            <SideBar show = {side} click = {() => setSide(false)}/>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/products/:id" component = {ViewProduct} />
                <Route exact path = "/contact" component = {Contact}/>
                <Route exact path = "/cart" component = {Cart} />
                <Route exact path = "/login" component = {Login}/>
                <Route exact path = "/register" component = {Register}/>
                <Route exact path = "/profile" component = {Profile} />
                <Route exact path = "/confirm" component = {Confirm} />
                <Route exact path = "/checkout" component = {Checkout} />
            </Switch>
        </div>
    )
}