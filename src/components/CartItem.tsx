// interface
import {ProductInterface} from '../utils/interfaces/ProductInterface'
// style
import { CartItemWrapper } from '../App.styles'

import {Button} from '@material-ui/core'

type Props = {
    item: ProductInterface
    removeFromCart: (clickedItemId: number) => void
    addToCart: (clickedItem: ProductInterface) => void
}

export const CartItem: React.FC<Props> = ({item, removeFromCart, addToCart}) => {
    return (
        <CartItemWrapper>
            <img src={item.image} alt={item.title}/>
            <div>
                <h4>{item.title}</h4>
                <div>
                    <p>Price: <b>${item.price}</b></p>
                    <p>Quantity: <b>{item.amount}</b></p>
                    <p>Total Amount: <b>${item.price*item.amount}</b></p>
                </div>
                <div>
                    <Button variant='outlined' onClick={() => removeFromCart(item.id)}>-</Button>
                    <Button variant='outlined' onClick={() => addToCart(item)}>+</Button>
                </div>
            </div>
        </CartItemWrapper>
    )
}