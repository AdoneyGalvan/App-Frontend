import React, { useState } from "react";
import ReactDom from "react-dom";
import "./Header.css";
import shoppingcart from "./shoppingcart.png";
import { Image, Row, Navbar, NavLink, NavDropdown, Nav, Container, Form, FormControl, Button, Col, Badge } from 'react-bootstrap';
import logo from "./logo.png";

const Header = ({ searchBarCallback, cartCallBack, cartTotal, cartCount}) => {
    // Used to update the UI with the new values
    const [searchBarValue, setsearchBarValue] = useState("");

    const handleInputChange = (event) => {
        // Upon the onchange event for the input update the input box with new text
        setsearchBarValue(event.target.value);
    }

    const handleSearchClick = (event) => {
        searchBarCallback(searchBarValue);
    }

    const handleClearClick = (event) => {
        setsearchBarValue("");
        searchBarCallback("");
    }

    const handleKeyPress = (event) => {
        const code = event.keycode || event.which;
        if (code === 13)
        {
            searchBarCallback(searchBarValue);
        }
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    const handleCartClick = (event) => {
        cartCallBack();
    }


    return (
        <>
            <Col Col xxl="2" xl="2" lg="2" md="0" sm="0" xs="0">
            <Image fluid="true" src={logo} className="image">
            </Image>
            </Col>
            <Col Col xxl="10" xl="10" lg="10" md="12" sm="12" xs="12">            
                <Form className="form" onSubmit={handleOnSubmit}>
                    <i class="fa-solid fa-magnifying-glass fa-2x icon-glass" onClick={handleSearchClick}></i>
                    <FormControl type="text" placeholder="Search for Item" value={searchBarValue} onChange={handleInputChange} onKeyUp={handleKeyPress}/>
                    <i class="fas fa-times fa-2x icon-clear" onClick={handleClearClick}></i>
                    <i class="fas fa-shopping-cart fa-2x icon-cart" onClick={handleCartClick}><Badge className="item-counter">{cartCount}</Badge></i>
                    <Badge className="item-total">$ {(Math.round(cartTotal * 100) / 100).toFixed(2)}</Badge>
                </Form>
            </Col>
            </>
    )
}

export default Header;