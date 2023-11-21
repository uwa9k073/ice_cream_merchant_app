import { Products } from "./Products";

export interface IProduct {
    name: string;
    img_src: string;
    img_alt: string;
    description: string;
    price: number;
    isFavorite: boolean
}

export default Products;