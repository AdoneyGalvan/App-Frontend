import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import "./ItemList.css"
import Item from "../Item/Item"
import { Alert, Col, Row } from 'react-bootstrap'

const ItemList = ({ itemsModified , compare, add}) =>
{
    const compareEventCallback = async (compareEventCallback) =>
    {
        await compare(compareEventCallback);
    }

    const addEventCallback = async (addEventCallback) =>
    {
        await add(addEventCallback);
    }

    return (
        <Row gx-10>
        {itemsModified.map((data) => (
            <Col xxl="3" xl="3" lg="4" md="6" sm="12" xs="12" key={data.id}>
                <Item itemdata={data} itemid={data.id} getCompareEvent={compareEventCallback} getAddEvent={addEventCallback}/>
            </Col>
        ))}
    </Row>
    )
}

export default ItemList;