import './itemcart.css';
import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({product}) => {
    const {removeCart} = useCartContext()
    return (
        <div className='itemcart'>
            <img src={product.img} alt={product.title} />
            <p>Titulo: {product.title} </p>
            <p>Cantidad: {product.quantity} </p>
            <p>Precio: {product.price} </p>
            <p>Subtotal: ${product.quantity * product.price} </p>
            <button onClick={() => removeCart(product.id)}>Eliminar</button>
        </div>
    );
};

export default ItemCart;