import React, {useState, useContext} from 'react';

const CartContext= React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

const [cart, setCart] = useState([])
 
const addProduct = (item, quantity) => {
   if (IsInCart(item.id)) {
    setCart(cart.map(product => {
        return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
    }))
   } else {
   setCart([...cart, {...item, quantity}])
}
}

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
}

const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

const clearCart = () => setCart([])


const IsInCart = (id) => { return cart.find (product=> product.id === id)? true : false }

const removeCart = (id) => setCart(cart.filter(product => product.id !== id))



    return (
        <div>
            <CartContext.Provider value={{
                addProduct,
                clearCart,
                IsInCart,
                removeCart,
                totalPrice,
                totalProducts,
                cart
            }}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;