import './detail.css'

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)

const {addProduct} = useCartContext()

    function onAdd(quantity) {
        setGoToCart(true)
        addProduct(data, quantity)
    }

    return (
       <div className="container">
        <div className="detail">
            <img className='image_detail' src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                {
                    goToCart
                    ? <Link to='/CartWidget'>Terminar compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
       </div>
    );
};

export default ItemDetail;