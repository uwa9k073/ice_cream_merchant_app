import { IProduct } from "../../pages/Products";
import { IReview } from "../Review";
import { ProductView } from "./ProductView";

export interface IProductViewProps {
    product?: IProduct,
    reviews?: IReview[]
}

export default ProductView;