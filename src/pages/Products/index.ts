import { ICartProduct } from "../Cart";
import { Products } from "./Products";

export interface IProduct {
    name: string;
    img_src: string;
    img_alt: string;
    description: string;
    price: number;
}

export default Products;