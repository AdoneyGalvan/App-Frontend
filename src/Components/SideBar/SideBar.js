import React from "react";
import ReactDOM from "react-dom";
import "./SideBar.css";
import { Col, Row, Form} from 'react-bootstrap';

const SideBar = ({ itemsModified, itemsBaseline, sortBy, filterBy }) =>
{
    const GetStringSortOrder = (prop) =>
    {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 

    const GetStringReverseSortOrder = (prop) =>
    {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return -1;    
            } else if (a[prop] < b[prop]) {    
                return 1;    
            }    
            return 0;    
        }    
    } 

    const GetSortPriceLowtoHighOrder = (prop) =>
    {
        return function (a, b)
        {return a[prop]-b[prop]} 
    } 

    const GetSortPriceHightoLowOrder = (prop) =>
    {
        return function (a, b)
        {return b[prop]-a[prop]} 
    } 

    const filterWalmart = (item) =>
    {
        return item.store.includes("Walmart");
    }
    const filterSafway = (item) =>
    {
        return item.store.includes("Safeway");
    }
    const filterWinco = (item) =>
    {
        return item.store.includes("Winco");
    }
    const filterFredMeyer = (item) =>
    {
        return item.store.includes("Fred Meyer");
    }

    const handleSortSelection = (event) =>
    {
        const itemsModifiedCopy = [...itemsModified];
        if(event.target.value == "1")
        {
            console.log("Price Low to High");
            sortBy(itemsModifiedCopy.sort(GetSortPriceLowtoHighOrder("price")));
            return;
        }
        if(event.target.value == "2")
        {
            console.log("Price High to Low");
            sortBy(itemsModifiedCopy.sort(GetSortPriceHightoLowOrder("price")));
            return;
        }
        if(event.target.value == "4")
        {
            console.log("Alphabetically A - Z");
            sortBy(itemsModifiedCopy.sort(GetStringSortOrder("name")));
            return;
        }
        if(event.target.value == "5")
        {
            console.log("Alphabetically Z - A");
            sortBy(itemsModifiedCopy.sort(GetStringReverseSortOrder("name")));
            return;
        }
    }

    const handleBrandSelection = (event) => 
    {
        const itemsModifiedCopy = [...itemsBaseline];
        if(event.target.value == "1")
        {
            console.log("Filter by None");
            filterBy(itemsBaseline);
            return;
        }
        if(event.target.value == "2")
        {
            console.log("Filter by Walmart");
            filterBy(itemsModifiedCopy.filter(filterWalmart));
            return;
        }
        if(event.target.value == "3")
        {
            console.log("Filter by Fred Meyer");
            filterBy(itemsModifiedCopy.filter(filterFredMeyer));
            return;
        }
        if(event.target.value == "4")
        {
            console.log("Filter by WinCo");
            filterBy(itemsModifiedCopy.filter(filterWinco));
            return;
        }
        if(event.target.value == "5")
        {
            console.log("Filter by Safeway");
            filterBy(itemsModifiedCopy.filter(filterSafway));
            return;
        }
    }

    return (
            <Form.Group className="mb-3 form-filter">
                <Form.Label>Sort</Form.Label>
                <Form.Select enabled onChange={handleSortSelection}>
                    <option value="1">Price Low to High</option>
                    <option value="2">Price High to Low</option>
                    {/* <option value="3">Distance</option> */}
                    <option value="4">Alphabetically A - Z</option>
                    <option value="5">Alphabetically Z - A</option>
                </Form.Select>

                <Form.Label>Fiter by Brand</Form.Label>
                <Form.Select enabled onChange={handleBrandSelection}>
                    <option value="1">None</option>
                    <option value="2">Walmart</option>
                    <option value="3">Fred Meyer</option>
                    <option value="4">WinCo</option>
                    <option value="5">Safeway</option>
                </Form.Select>
            </Form.Group>
    )
}

export default SideBar;