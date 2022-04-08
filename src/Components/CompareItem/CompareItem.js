import React from "react";
import ReactDOM from "react-dom";
import "./CompareItem.css";
import { Col, Row, Form, Container, Card, ListGroup, ListGroupItem, Image, Badge, Button} from 'react-bootstrap';
import FredMeyerLogo from './Fred Meyer-Logo.png';
import WalmartLogo from './Walmart-Logo.png';
import WincoLogo from './Winco-Logo.png';
import SafewayLogo from './Safeway-Logo.png';

const CompareItem = ({ compareItemData, compareItemId }) =>
{
    return (
        <>
        {compareItemData.store == "Fred Meyer" &&
        <Card className="card-style" id={compareItemId}>
            <Image className="card-img-top compare-img" src={FredMeyerLogo}/>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Header className="compare-card-header">{compareItemData.name}</Card.Header>
            </a>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Img variant="top" src={compareItemData.imgurl == undefined ? "" : compareItemData.imgurl} href={compareItemData.url == undefined ? "" : compareItemData.url}/>
            </a>
            <ListGroup>
                    <ListGroup.Item className="d-flex">
                        <span className="compare-price">Regular Price</span><Badge pill className="compare-badge-fredmeyer">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="compare-price">Promotion Price</span><Badge pill className="compare-badge-fredmeyer">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-fredmeyer-compare">Add to Cart</Button>
            </ListGroup>
        </Card>}

        {compareItemData.store == "Walmart" &&
        <Card className="card-style" id={compareItemId}>
            <Image className="card-img-top compare-img" src={WalmartLogo}/>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Header className="compare-card-header">{compareItemData.name}</Card.Header>
            </a>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Img variant="top" src={compareItemData.imgurl == undefined ? "" : compareItemData.imgurl} href={compareItemData.url == undefined ? "" : compareItemData.url}/>
            </a>
            <ListGroup>
                    <ListGroup.Item className="d-flex">
                        <span className="compare-price">Regular Price</span><Badge pill className="compare-badge-walmart">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="compare-price">Promotion Price</span><Badge pill className="compare-badge-walmart">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-walmart-compare">Add to Cart</Button>
            </ListGroup>
        </Card>}

        {compareItemData.store == "Winco" &&
        <Card className="card-style" id={compareItemId}>
            <Image className="card-img-top compare-img" src={WincoLogo}/>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Header className="compare-card-header">{compareItemData.name}</Card.Header>
            </a>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Img variant="top" src={compareItemData.imgurl == undefined ? "" : compareItemData.imgurl} href={compareItemData.url == undefined ? "" : compareItemData.url}/>
            </a>
            <ListGroup>
                    <ListGroup.Item className="d-flex">
                        <span className="compare-price">Regular Price</span><Badge pill className="compare-badge-winco">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="compare-price">Promotion Price</span><Badge pill className="compare-badge-winco">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-winco-compare">Add to Cart</Button>
            </ListGroup>
        </Card>}

        {compareItemData.store == "Safeway" &&
        <Card className="card-style" id={compareItemId}>
            <Image className="card-img-top compare-img" src={SafewayLogo}/>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Header className="compare-card-header">{compareItemData.name}</Card.Header>
            </a>
            <a href={compareItemData.url == undefined ? "" : compareItemData.url} target="_blank">
                <Card.Img variant="top" src={compareItemData.imgurl == undefined ? "" : compareItemData.imgurl} href={compareItemData.url == undefined ? "" : compareItemData.url}/>
            </a>
            <ListGroup>
                    <ListGroup.Item className="d-flex">
                        <span className="compare-price">Regular Price</span><Badge pill className="compare-badge-safeway">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroup.Item>
                    <ListGroupItem className="d-flex">
                        <span className="compare-price">Promotion Price</span><Badge pill className="compare-badge-safeway">${compareItemData.price == undefined ? " -" : compareItemData.price}</Badge>
                    </ListGroupItem>
                    <Button className="item-button-safeway-compare">Add to Cart</Button>
            </ListGroup>
        </Card>}
        </>
    );
}

export default CompareItem;