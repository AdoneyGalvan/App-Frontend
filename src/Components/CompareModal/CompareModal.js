import React from "react";
import ReactDOM from "react-dom";
import "./CompareModal.css";
import CompareItem from "../CompareItem/CompareItem"
import { Col, Row, Form, Container, Card, ListGroup, ListGroupItem, Image, Badge, Button} from 'react-bootstrap';

const CompareModal = ({ itemsCompared, show}) =>
{
    var id = 0;
    const handleShowCompareModal = async () =>
    {
      show(false);
    }

    return (
            <Row>
                <Row>
                    <Button className="compare-button-hide" onClick={handleShowCompareModal}>Compare Items</Button>
                </Row>
                <Row className="compare-modal">
                    {itemsCompared.map((data) => (
                    <Col xxl="2" xl="2" lg="2" md="6" sm="12" xs="12" key={id++}>
                        <CompareItem compareItemData={data} compareItemId={id++}/>
                    </Col>
                    ))}
                </Row>
            </Row>
            );
}

export default CompareModal;