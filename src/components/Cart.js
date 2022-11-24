import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";
import CartMovieItem from "./CartMovieItem";

function Cart({ data, removeMovie }) {
  const [showCart, setShowCart] = useState(false);

  
   const handleShow = () => {
    setShowCart(true)
  };

  const handleClose = () => {
    setShowCart(false)
  };
  
  

    return (
      <>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ float: "right", marginTop: 65, marginRight: 40}}

        >
          <FontAwesomeIcon icon={faShoppingCart} size='xl' style={{ color: 'white'}} />
        </Button>

        <Offcanvas
          placement={"end"}
          show={showCart}
          onHide={handleClose}
          style={{minWidth: '550px'}}
          
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="cart-title" >
              Your Shopping Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="cart-container">
            <ul>
              {data.map((movie,index) => (
                <li>
                  <CartMovieItem key={index} title={movie.title} price={movie.price} index={index} removeMovie={() => removeMovie(index)} />
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: £ {data.reduce((total, item) => total+(item.price),0)}</p>
            <button className="cart-button">Checkout</button>
        
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
export default Cart;