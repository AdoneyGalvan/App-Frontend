import React from "react";
import ReactDom from "react-dom";
import "./Item.css";
import {Card, Badge, Button, CardImg, Container, ListGroup, ListGroupItem, CardGroup, Image, Col, Form} from 'react-bootstrap';
import FredMeyerLogo from './Fred Meyer-Logo.png';
import WalmartLogo from './Walmart-Logo.png';
import WincoLogo from './Winco-Logo.png';
import SafewayLogo from './Safeway-Logo.png';

const Item = ({ itemdata, itemid, getid}) =>
{
    const handleClick = (event) => 
    {
        getid(event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id'));
    }

    return (
        <>
        {itemdata.store == "Fred Meyer" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={FredMeyerLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Header className="card-header">{itemdata.name}</Card.Header>
            </a>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                        <Form.Check type="checkbox" label="Compare" className="price" onClick={handleClick}/>
                    </ListGroupItem>
                    <ListGroup.Item className="d-flex">
                        <span className="price">Regular Price</span><Badge pill className="badge-fredmeyer">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="price">Promotion Price</span><Badge pill className="badge-fredmeyer">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-fredmeyer">Add to Cart</Button>
            </ListGroup>
        </Card>}

        {itemdata.store == "Walmart" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={WalmartLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Header className="card-header">{itemdata.name}</Card.Header>
            </a>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                        <Form.Check type="checkbox" label="Compare" className="price" onClick={handleClick}/>
                    </ListGroupItem>
                    <ListGroup.Item className="d-flex">
                        <span className="price">Regular Price</span><Badge pill className="badge-walmart">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="price">Promotion Price</span><Badge pill className="badge-walmart">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-walmart">Add to Cart</Button>
            </ListGroup>
        </Card>}

        {itemdata.store == "Winco" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={WincoLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Header className="card-header">{itemdata.name}</Card.Header>
            </a>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                        <Form.Check type="checkbox" label="Compare" className="price" onClick={handleClick}/>
                    </ListGroupItem>
                    <ListGroup.Item className="d-flex">
                        <span className="price">Regular Price</span><Badge pill className="badge-winco">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="price">Promotion Price</span><Badge pill className="badge-winco">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-winco">Add to Cart</Button>
            </ListGroup>
        </Card>}

        {itemdata.store == "Safeway" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={SafewayLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Header className="card-header">{itemdata.name}</Card.Header>
            </a>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                        <Form.Check type="checkbox" label="Compare" className="price" onClick={handleClick}/>
                    </ListGroupItem>
                    <ListGroup.Item className="d-flex">
                        <span className="price">Regular Price</span><Badge pill className="badge-safeway">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="price">Promotion Price</span><Badge pill className="badge-safeway">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-safeway">Add to Cart</Button>
            </ListGroup>
        </Card>}
        </>
    )
}

export default Item;