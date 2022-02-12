// library
import { useState } from "react";
import { useQuery } from "react-query";

// material ui components
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";

// material ui icons
import { AddShoppingCart } from "@material-ui/icons";

// styles (styled components)
import { MainWrapper, ErrorDiv, CartIconWrapper } from "./App.styles";

// interface
import { ProductInterface } from "./utils/interfaces/ProductInterface";

// Api calls
import { getProducts } from "./utils/Api/ApiCalls";

// re-usable component
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductInterface[])

  const {data, isLoading, error} = useQuery<ProductInterface[]>('products', getProducts)
  
  // loding
  if(isLoading) return <LinearProgress />
  

  // fallback ui
  if(error) return <ErrorDiv>Something went wrong...!</ErrorDiv>

  const getTotalAmount = (items: ProductInterface[]) => {
    return +items.reduce((total: number, item) => total + item.amount * item.price, 0).toFixed(2);
  };

  const handleAddToCart = (clickedItem: ProductInterface) => {
    setCartItems(prev => {
      //1. check the item is present or not 
      const isItemPresent = prev.find(item => item.id === clickedItem.id)

      if(isItemPresent){
        return prev.map(item => (
          item.id === clickedItem.id?
            {...item, amount: item.amount + 1}
            : item
        ))
      }

      //2. do this if item already present
      return [...prev, {...clickedItem, amount: 1}]
    })
  };

  const handleRemoveFromCart = (clickeItemId: number) => {
    const items = [...cartItems]
    items.forEach((item, index) => {
      if(item.id === clickeItemId){
        if(item.amount === 1){
          items.splice(index, 1);
          setCartItems(items);
        }else if(item.amount !== 1){
          item.amount -= 1;
          items.splice(index,1, item);
          setCartItems(items);
        }
      }
    })

  };

  // console.log(cartItems);
  return (
    <MainWrapper>
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart cartItems={cartItems} getTotalAmount={getTotalAmount} removeFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}/>
      </Drawer>
      <CartIconWrapper onClick={() => setIsCartOpen(true)}>
            <Badge badgeContent={cartItems.length} color='primary'>
              <AddShoppingCart />
            </Badge>
      </CartIconWrapper>
      <Grid container spacing={3}>
        {
          data?.map(item => (
            <Grid item xs={12} sm={4} key={item.id}>
              <Product  product={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))
        }
      </Grid>
    </MainWrapper>
  );
}

export default App;
