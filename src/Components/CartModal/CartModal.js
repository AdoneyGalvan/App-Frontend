import React from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import { Col, Row, Form, Container, Card, ListGroup, ListGroupItem, Image, Badge, Button} from 'react-bootstrap';
import CartItem from "../CartItem/CartItem"

const CartModal = ({ itemsCart}) =>
{
    return (
        <>
        {itemsCart.map((data) => (
            <CartItem cartItemData={data} cartItemId={data.id}/>
        ))}
    </>
    )
}

export default CartModal;