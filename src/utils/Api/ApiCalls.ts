import axios from 'axios';

// interface
import { ProductInterface } from '../interfaces/ProductInterface';

// GET: products
export const getProducts = async (): Promise<ProductInterface[]> => {
    const {data} = await axios('https://fakestoreapi.com/products')
    return data
}
    