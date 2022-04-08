import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import "./ItemList.css"
import Item from "../Item/Item"
import { Alert, Col, Row } from 'react-bootstrap'

const ItemList = ({ itemsModified , itemsCompared, Compare}) =>
{
    const [compareID, setcompareID] = useState();

    const compareIDCallback = async (compareIDCallback) =>
    {
        var isAlreadyInCompareList = false;
        var isAlreadyInCompareListIndex = 0;

        for (var i = 0; i < itemsCompared.length; i++)
        {
            if (itemsCompared[i].id == compareIDCallback)
            {
                isAlreadyInCompareList = true;
                isAlreadyInCompareListIndex = i;
                break;
            }
        }

        if (isAlreadyInCompareList == false)
        {
            if (itemsCompared.length < 6)
            {
                await setcompareID(compareIDCallback);

                const itemsCompareCopy = [...itemsCompared];
                itemsCompareCopy.push(itemsModified[compareIDCallback]);

                await Compare(itemsCompareCopy);
            }
            else
            {
                alert("Only can compare up to six items");
            }
        }
        else 
        {
            const itemsCompareCopy = [...itemsCompared];
            itemsCompareCopy.splice(i, 1);

            await Compare(itemsCompareCopy);
        }
    }

    return (
        <Row gx-10>
        {itemsModified.map((data) => (
            <Col xxl="3" xl="3" lg="4" md="6" sm="12" xs="12" key={data.id}>
                <Item itemdata={data} itemid={data.id} getid={compareIDCallback}/>
            </Col>
        ))}
    </Row>
    )
}

export default ItemList;