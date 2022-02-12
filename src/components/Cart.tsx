
// interface
import {ProductInterface} from '../utils/interfaces/ProductInterface'
// style
import { CartWrapper } from '../App.styles'
import { CartItem } from './CartItem'
import { Button } from '@material-ui/core'

type Props = {
    cartItems: ProductInterface[]
    removeFromCart: (clickedItemId: number) => void
    handleAddToCart: (clickedItem: ProductInterface) => void
    getTotalAmount: (items: ProductInterface[]) => number
}

export const Cart: React.FC<Props> = ({cartItems, removeFromCart, getTotalAmount, handleAddToCart}) => {
    return (
        <CartWrapper>
            <h2>Your Shopping Cart</h2>
            {   
                cartItems.length === 0? <h3>Cart Is Empty</h3>: cartItems?.map(item =>
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} addToCart={handleAddToCart}/>
                )
            }
            <Button variant='contained' color='primary' disabled={cartItems.length ===0}>Total Amount {getTotalAmount(cartItems)}</Button>
        </CartWrapper>
    )
}