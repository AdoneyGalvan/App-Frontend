import React from "react";
import ReactDOM from "react-dom";
import "./CartItem.css";
import { Col, Row, Form, Container, Card, ListGroup, ListGroupItem, Image, Badge, Button} from 'react-bootstrap';
import FredMeyerLogo from './Fred Meyer-Logo.png';
import WalmartLogo from './Walmart-Logo.png';
import WincoLogo from './Winco-Logo.png';
import SafewayLogo from './Safeway-Logo.png';

const CartItem = ({ cartItemData, cartItemId }) =>
{
    return (
        <>
            {cartItemData.store == "Fred Meyer" &&
            <Row className="cart-item-row">
                <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                    <img className="cart-store-logo" src={FredMeyerLogo}/>
                        <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                            <img className="cart-item-img" variant="top" src={cartItemData.imgurl == undefined ? "" : cartItemData.imgurl} href={cartItemData.url == undefined ? "" : cartItemData.url}/>
                        </a>
                </Col>
                <Col xxl="8" xl="8" lg="8" md="8" sm="8" xs="8">
                    <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                        <h1 className="cart-item-description">{cartItemData.name}</h1>
                    </a>
                </Col>
                <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                    <Badge pill className="cart-item-price cart-item-fredmeyer">${cartItemData.price == undefined ? " -" : cartItemData.price}</Badge>
                </Col>
            </Row>
            }

            {cartItemData.store == "Walmart" &&
            <Row className="cart-item-row">
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <img className="cart-store-logo" src={WalmartLogo}/>
                    <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                        <img className="cart-item-img" variant="top" src={cartItemData.imgurl == undefined ? "" : cartItemData.imgurl} href={cartItemData.url == undefined ? "" : cartItemData.url}/>
                    </a>
            </Col>
            <Col xxl="8" xl="8" lg="8" md="8" sm="8" xs="8">
                <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                    <h1 className="cart-item-description">{cartItemData.name}</h1>
                </a>
            </Col>
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <Badge pill className="cart-item-price cart-item-walmart">${cartItemData.price == undefined ? " -" : cartItemData.price}</Badge>
            </Col>
            </Row>
            }

            {cartItemData.store == "Winco" &&
            <Row className="cart-item-row">
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <img className="cart-store-logo" src={WincoLogo}/>
                    <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                        <img className="cart-item-img" variant="top" src={cartItemData.imgurl == undefined ? "" : cartItemData.imgurl} href={cartItemData.url == undefined ? "" : cartItemData.url}/>
                    </a>
            </Col>
            <Col xxl="8" xl="8" lg="8" md="8" sm="8" xs="8">
                <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                    <h1 className="cart-item-description">{cartItemData.name}</h1>
                </a>
            </Col>
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <Badge pill className="cart-item-price cart-item-winco">${cartItemData.price == undefined ? " -" : cartItemData.price}</Badge>
            </Col>
            </Row>
            }

            {cartItemData.store == "Safeway" &&
            <Row className="cart-item-row">
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
            <img className="cart-store-logo" src={SafewayLogo}/>
                <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                    <img className="cart-item-img" variant="top" src={cartItemData.imgurl == undefined ? "" : cartItemData.imgurl} href={cartItemData.url == undefined ? "" : cartItemData.url}/>
                </a>
            </Col>
            <Col xxl="8" xl="8" lg="8" md="8" sm="8" xs="8">
                <a href={cartItemData.url == undefined ? "" : cartItemData.url} target="_blank">
                    <h1 className="cart-item-description">{cartItemData.name}</h1>
                </a>
            </Col>
            <Col xxl="2" xl="2" lg="2" md="2" sm="2" xs="2">
                <Badge pill className="cart-item-price cart-item-safeway">${cartItemData.price == undefined ? " -" : cartItemData.price}</Badge>
            </Col>
            </Row>
            }
        </>
    )
}

export default CartItem;