import React from "react";
import "./CartMovieItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartMovieItem ({ title, price, removeMovie }) {

    return (
        <div className="cart-movie-item">
            <p>{title}</p>
            <p>{price}</p>
            <button className="del-btn" onClick={removeMovie}>
                <FontAwesomeIcon icon={faTrash} size='sm' ></FontAwesomeIcon>
            </button>
        </div>
    );
}

export default CartMovieItem;