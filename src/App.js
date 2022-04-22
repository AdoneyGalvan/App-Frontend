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
import CartModal from './Components/CartModal/CartModal';

const App = () =>
{
  // Used to upd
 const [searchBarValue, setsearchBarValue] = useState();
 const [itemsModified, setitemsModified] = useState([]);
 const [itemsBaseline, setitemsBaseline] = useState([]);
 const [showLoadModal, setshowLoadModal] = useState(false);
 const [showCartModal, setshowCartModal] = useState(false);
 const [filterValue, setfilterValue] = useState("None");
 const [showCompareModal, setCompareModal] = useState(false);
 const [itemsCompared, setItemsCompared] = useState([]);
 const [itemComparedEvents, setItemComparedEvents] = useState([]);
 const [itemsCart, setItemsCart] = useState([]);
 const [itemCartEvents, setItemCartEvents] = useState([]);
 const [cartTotal, setCartTotal] = useState(0);
 const [cartCount, setCartCount] = useState(0);

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
      await setItemsCart([]);
      await setItemCartEvents([]);
      await setCartTotal(0);
      await setCartCount(0);
      const arr = await fetchSearch(searchBarCallBackValue, "1");
      await setitemsModified(arr);
      await setitemsBaseline(arr);
      await setshowLoadModal(false);

      return;
    }
    console.log("Empty");
  }

  const cartCallBack = async () =>
  {
    await setshowCartModal(!showCartModal);
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

  const addEventCallBack = async (addEventCallBack) => 
  {
    let id = addEventCallBack.parentElement.parentElement.parentElement.getAttribute('id');
    var isAlreadyInCartList = false;
    var isAlreadyInCartListIndex = 0;

    for (var i = 0; i < itemsCart.length; i++)
    {
        if (itemsCart[i].id == id)
        {
            isAlreadyInCartList = true;
            isAlreadyInCartListIndex = i;
            break;
        }
    }

    if (isAlreadyInCartList == false)
    {
        let itemsCartCopy = [...itemsCart];
        itemsCartCopy.push(itemsModified[id]);
        let cartTotalCopy = cartTotal;
        cartTotalCopy = cartTotalCopy + itemsModified[id].price;
        let cartCountCopy = cartCount;
        cartCountCopy = cartCountCopy + 1;
        await setItemsCart(itemsCartCopy);
        await setCartTotal(cartTotalCopy);
        await setCartCount(cartCountCopy);

        let itemsCartEventCopy = [...itemCartEvents];
        itemsCartEventCopy.push(addEventCallBack);
        await setItemCartEvents(itemsCartEventCopy);
    }
    else 
    {
        let itemsCartCopy = [...itemsCart];
        itemsCartCopy.splice(isAlreadyInCartListIndex, 1);
        let cartTotalCopy = cartTotal;
        cartTotalCopy = cartTotalCopy - itemsModified[id].price;
        let cartCountCopy = cartCount;
        cartCountCopy = cartCountCopy - 1;
        await setItemsCart(itemsCartCopy);
        await setCartTotal(cartTotalCopy);
        await setCartCount(cartCountCopy);

        let itemsCartEventCopy = [...itemCartEvents];
        itemsCartEventCopy.splice(isAlreadyInCartListIndex, 1);
        await setItemCartEvents(itemsCartEventCopy);
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
        {showCartModal == false &&
        <>
          <Container>
              <Row>
                <Header searchBarCallback={searchBarCallback} cartCallBack={cartCallBack} cartTotal={cartTotal} cartCount={cartCount}/>
              </Row>
            </Container>

            <Container className='main-section'>
              <Row>
                <Col xxl="2" xl="2" lg="2" md="0" sm="12" xs="12">
                  <SideBar itemsModified={itemsModified} itemsBaseline={itemsBaseline} sortBy={sortCallback} filterBy={filterCallback}/>
                </Col>
                <Col className='item-section' xxl="10" xl="10" lg="10" md="12" sm="12" xs="12">
                  <ItemList itemsModified={itemsModified} compare={compareEventCallBack} add={addEventCallBack}/>
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
        {showCartModal == true &&
        <>
          <Container>
            <Row>
              <Header searchBarCallback={searchBarCallback} cartCallBack={cartCallBack} cartTotal={cartTotal} cartCount={cartCount}/>
            </Row>
          </Container>
          <Container className='main-section'>
          <Col className='cart-section' xxl="10" xl="10" lg="10" md="12" sm="12" xs="12">
            <CartModal itemsCart={itemsCart}></CartModal>
            </Col>
            <Col xxl="2" xl="2" lg="2" md="12" sm="12" xs="12">

            </Col>
          </Container>
          </>
        }
        </>
      }
      {showLoadModal == true &&
        <LoadModal itemSearchName={searchBarValue}></LoadModal>
      }
    </>
  );
}

export default App;