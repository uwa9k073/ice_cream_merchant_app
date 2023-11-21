import { Button, Column, Island, Text } from "@adev/ui-kit";
import styles from "./Product.module.scss"
import { IProduct } from "../../pages/Products/index.ts";
import useCartStore from "../../stores/cart.ts";
import useProductsStore from "../../stores/products.ts";

interface IProductProps {
    product: IProduct;
    onClick: (product: IProduct) => void;
}

const Product = ({ product, onClick }: IProductProps) => {
    const addToCart = useCartStore(state => state.addProduct);
    const toggleFavorite = useProductsStore(state => state.toggleFavorite);
    return (
        <Column width={{
            mobile: 12, tablet: 6, desktop: 3
        }}>
            <Island className={styles.island}>
                <div className={styles.wrapper} onClick={() => { onClick(product) }}>
                    <img src={product.img_src} alt={product.img_alt}></img>
                    <Text typography="headline-md" overflow="ellipsis">{product.name}</Text>
                </div>
                <Button onClick={() => addToCart(product)}>
                    <span className="material-symbols-outlined">
                        add_shopping_cart
                    </span>{product.price}₽</Button>
                <Button onClick={() => toggleFavorite(product.name)}>
                    <span className="material-symbols-outlined">
                        heart_minus
                    </span></Button>
            </Island>
        </Column>)
}

export { Product };