import React from "react";
import ReactDom from "react-dom";
import "./Item.css";
import {Card, Badge, Button, CardImg, Container, ListGroup, ListGroupItem, CardGroup, Image, Col, Form} from 'react-bootstrap';
import FredMeyerLogo from './Fred Meyer-Logo.png';
import WalmartLogo from './Walmart-Logo.png';
import WincoLogo from './Winco-Logo.png';
import SafewayLogo from './Safeway-Logo.png';

const Item = ({ itemdata, itemid, getCompareEvent}) =>
{
    const handleComapareClick = (event) => 
    {
        if(event.target.classList[1] == "compare-badge" || event.target.classList[3] == "compare-badge")
        {
            event.target.classList.remove("compare-badge");
            event.target.classList.add("compare-badge-selected");
            getCompareEvent(event.target);
            return;
        }

        if (event.target.classList[3] == "compare-badge-selected")
        {
            event.target.classList.add("compare-badge");
            event.target.classList.remove("compare-badge-selected");
            getCompareEvent(event.target);
            return;
        }
    }

    const handleAddClick = (event) => 
    {
/*         if(event.target.classList[1] == "compare-badge" || event.target.classList[3] == "compare-badge")
        {
            event.target.classList.remove("compare-badge");
            event.target.classList.add("compare-badge-selected");
            getCompareEvent(event.target);
            return;
        }

        if (event.target.classList[3] == "compare-badge-selected")
        {
            event.target.classList.add("compare-badge");
            event.target.classList.remove("compare-badge-selected");
            getCompareEvent(event.target);
            return;
        } */
    }

    /* event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('id') */
    return (
        <>
        {itemdata.store == "Fred Meyer" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={FredMeyerLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                
                    <ListGroup.Item className="d-flex">
                        <Badge className="rounded-circle compare-badge" title="Compare Item" onClick={handleComapareClick}><i class="fa-solid fa-c icon-c"></i></Badge>
                        <Badge pill className="badge-fredmeyer" title="Price">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                        <Badge className="rounded-circle add-badge" title="Add Item to Cart" onClick={handleAddClick}><i class="fa-solid fa-plus icons-plus"></i></Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                            <Card.Header className="card-header">{itemdata.name}</Card.Header>
                        </a>
                    </ListGroupItem>
            </ListGroup>
        </Card>}

        {itemdata.store == "Walmart" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={WalmartLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                    <Badge className="rounded-circle compare-badge" title="Compare Item" onClick={handleComapareClick}><i class="fa-solid fa-c icon-c"></i></Badge>
                        <Badge pill className="badge-walmart" title="Price">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                        <Badge className="rounded-circle add-badge" title="Add Item to Cart" onClick={handleAddClick}><i class="fa-solid fa-plus icons-plus"></i></Badge>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex">
                        <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                            <Card.Header className="card-header">{itemdata.name}</Card.Header>
                        </a>
                    </ListGroupItem>
            </ListGroup>
        </Card>}

        {itemdata.store == "Winco" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={WincoLogo}/>
            <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
            </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                    <Badge className="rounded-circle compare-badge" title="Compare Item" onClick={handleComapareClick}><i class="fa-solid fa-c icon-c"></i></Badge>
                        <Badge pill className="badge-winco" title="Price">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                        <Badge className="rounded-circle add-badge" title="Add Item to Cart" onClick={handleAddClick}><i class="fa-solid fa-plus icons-plus"></i></Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                            <Card.Header className="card-header">{itemdata.name}</Card.Header>
                        </a>
                    </ListGroupItem>
            </ListGroup>
        </Card>}

        {itemdata.store == "Safeway" &&
        <Card className="card-style" id={itemid}>
            <Image className="card-img-top" src={SafewayLogo}/>
                <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                    <Card.Img variant="top" src={itemdata.imgurl == undefined ? "" : itemdata.imgurl} href={itemdata.url == undefined ? "" : itemdata.url}/>
                </a>
            <ListGroup>
                    <ListGroupItem className="d-flex">
                    <Badge className="rounded-circle compare-badge" title="Compare Item" onClick={handleComapareClick}><i class="fa-solid fa-c icon-c"></i></Badge>
                        <Badge pill className="badge-safeway" title="Price">${itemdata.price == undefined ? " -" : itemdata.price}</Badge>
                        <Badge className="rounded-circle add-badge" title="Add Item to Cart" onClick={handleAddClick}><i class="fa-solid fa-plus icons-plus"></i></Badge>
                    </ListGroupItem>
                    <ListGroupItem>
                        <a href={itemdata.url == undefined ? "" : itemdata.url} target="_blank">
                            <Card.Header className="card-header">{itemdata.name}</Card.Header>
                        </a>
                    </ListGroupItem>
            </ListGroup>
        </Card>}
        </>
    )
}

export default Item;