import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from "react"
import ReactDom from "react-dom";
import './App.css'
import ItemList from "./Components/ItemList/ItemList"
import Header from "./Components/Header/Header"
import { Container, Row, Col, Button} from 'react-bootstrap'
/* import items from './data.json' */
import SideBar from './Components/SideBar/SideBar'
import data from './data.json'
import LoadModal from './Components/LoadModal/LoadModal';
import CompareModal from './Components/CompareModal/CompareModal';

const App = () =>
{
  // Used to upd
 const [searchBarValue, setsearchBarValue] = useState();
 const [itemsModified, setitemsModified] = useState([]);
 const [itemsBaseline, setitemsBaseline] = useState([]);
 const [showLoadModal, setshowLoadModal] = useState(false);
 const [filterValue, setfilterValue] = useState("None");
 const [showCompareModal, setCompareModal] = useState(false);
 const [itemsCompared, setItemsCompared] = useState([]);
 const [itemComparedEvents, setItemComparedEvents] = useState([]);

 useEffect(async () =>  {
  await setitemsModified(data);
  await setitemsBaseline(data);
 }, []);

const fetchSearch = async (search, searchpage) => 
{
  try {
      console.log(`https://frugalstoreapi.azurewebsites.net/search?search=${search}&searchpage=${searchpage}`);
      const response = await fetch(`https://frugalstoreapi.azurewebsites.net/search?search=${search}&searchpage=${searchpage}`);
      const arr = await response.json();
      console.log(arr);
      return arr;
  } catch (error) {
      console.error(error);
  }
}

 const searchBarCallback = async (searchBarCallBackValue) =>
  {
    if(searchBarCallBackValue != "")
    {
  
      await setsearchBarValue(searchBarCallBackValue);
      await setshowLoadModal(true);
      await setItemsCompared([]);
      await setItemComparedEvents([]);
      const arr = await fetchSearch(searchBarCallBackValue, "1");
      await setitemsModified(arr);
      await setitemsBaseline(arr);
      await setshowLoadModal(false);

      return;
    }
    console.log("Empty");
  }

  const sortCallback = async (sortCallback) => 
  {
        await setitemsModified(sortCallback);
  }

  const filterCallback = async (filterCallback) => 
  {
      await setitemsModified(filterCallback);
  }

  const handleShowCompareModal = async () =>
  {
    if (showCompareModal == false)
    {
      await setCompareModal(true);
    }
    else 
    {
      await setCompareModal(false);
    }
  }

  const compareModalCallBack = async (compareModalCallBack) =>
  {
      await setCompareModal(compareModalCallBack);
  }

  const compareEventCallBack = async (compareEventCallBack) =>
  {
    
    let id = compareEventCallBack.parentElement.parentElement.parentElement.getAttribute('id');
    var isAlreadyInCompareList = false;
    var isAlreadyInCompareListIndex = 0;

    for (var i = 0; i < itemsCompared.length; i++)
    {
        if (itemsCompared[i].id == id)
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
          let itemsCompareCopy = [...itemsCompared];
          itemsCompareCopy.push(itemsModified[id]);
          await setItemsCompared(itemsCompareCopy);

          let itemsComparedEventCopy = [...itemComparedEvents];
          itemsComparedEventCopy.push(compareEventCallBack);
          await setItemComparedEvents(itemsComparedEventCopy);
        }
        else
        {
            alert("Only can compare up to six items");
        }
    }
    else 
    {
        let itemsCompareCopy = [...itemsCompared];
        itemsCompareCopy.splice(isAlreadyInCompareListIndex, 1);
        await setItemsCompared(itemsCompareCopy);

        let itemsComparedEventCopy = [...itemComparedEvents];
        itemsComparedEventCopy.splice(isAlreadyInCompareListIndex, 1);
        await setItemComparedEvents(itemsComparedEventCopy);
    }
    
  }
  const compareEventClearCallback = async () =>
  {
    for (var i = 0; i < itemComparedEvents.length; i++)
    {
      await itemComparedEvents[i].click();
    }
    await setItemComparedEvents([]);
    await setItemsCompared([]);
  }

  return (
    <>
    {showLoadModal == false &&
        <>
          <Container>
              <Row>
                <Header searchBarCallback={searchBarCallback}/>
              </Row>
            </Container>

            <Container className='main-section'>
              <Row>
                <Col xxl="2" xl="2" lg="2" md="0" sm="12" xs="12">
                  <SideBar itemsModified={itemsModified} itemsBaseline={itemsBaseline} sortBy={sortCallback} filterBy={filterCallback}/>
                </Col>
                <Col className='item-section' xxl="9" xl="9" lg="9" md="12" sm="12" xs="12">
                  <ItemList itemsModified={itemsModified} compare={compareEventCallBack}/>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="0" sm="12" xs="12">

                </Col>
            </Row>
          </Container>

          <Container className='compare-section'>
          {showCompareModal == false &&
              <Button className='compare-button' onClick={handleShowCompareModal}>Compare Items</Button>
              }
              {showCompareModal == true &&
              <CompareModal show={compareModalCallBack} itemsCompared={itemsCompared} clear={compareEventClearCallback}></CompareModal>
              }
          </Container>
        </>
      }
      {showLoadModal == true &&
        <LoadModal itemSearchName={searchBarValue}></LoadModal>
      }
    </>
  );
}

export default App;