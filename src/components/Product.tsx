
// material ui core
import { Button } from "@material-ui/core"

//styles
import { ProductWrapper } from "../App.styles"

// interface
import { ProductInterface } from "../utils/interfaces/ProductInterface"

type Props = {
    product: ProductInterface;
    handleAddToCart: (clickedItem: ProductInterface) => void;
}

export const Product: React.FC<Props> = ({product, handleAddToCart}) => {
    return (
        <ProductWrapper>
            <img src={product.image} alt={product.title} />
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(product)}>
                Add To Cart
            </Button>
        </ProductWrapper>
    )
}