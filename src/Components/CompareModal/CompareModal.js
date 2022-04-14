import React from "react";
import ReactDOM from "react-dom";
import "./CompareModal.css";
import CompareItem from "../CompareItem/CompareItem"
import { Col, Row, Form, Container, Card, ListGroup, ListGroupItem, Image, Badge, Button} from 'react-bootstrap';

const CompareModal = ({show, itemsCompared, clear}) =>
{
    const handleShowCompareModal = async () =>
    {
      await show(false);
    }

    const clearCompareModal = async () =>
    {
        await clear();
        await show(false);
    }

    return (
            <Row>
                <Row>
                    <Button className="compare-button-hide" onClick={handleShowCompareModal}>Compare Items</Button>
                    <i class="fas fa-times fa-4x icons compare-button-clear" onClick={clearCompareModal}></i>
                </Row>
                <Row className="compare-modal">
                    {itemsCompared.map((data) => (
                    <Col xxl="2" xl="2" lg="2" md="6" sm="12" xs="12" key={data.id}>
                        <CompareItem compareItemData={data} compareItemId={data.id}/>
                    </Col>
                    ))}
                </Row>
            </Row>
            );
}

export default CompareModal;