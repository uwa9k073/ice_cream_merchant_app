import { Button, Column, Island, Text } from "@adev/ui-kit";
import styles from "./Product.module.scss"
import { IProduct } from "../../pages/Products/index.ts";

interface IProductProps {
    product: IProduct;
    onClick: (product: IProduct) => void;
}

const Product = ({ product, onClick }: IProductProps) => {
    const addToCard = (product: IProduct) => {
        const existingItems: IProduct[] = JSON.parse(localStorage.getItem("products") || "[]");
        // Add new item to existing items array
        const updatedList: IProduct[] = [...existingItems, product];

        // Save updated items back to local storage
        localStorage.setItem("products", JSON.stringify(updatedList));
    }
    return (
        <Column width={{
            mobile: 6, tablet: 6, desktop: 4
        }}>
            <Island className={styles.island}>
                <div className={styles.wrapper} onClick={() => { onClick(product) }}>
                    <img src={product.img_src} alt={product.img_alt}></img>
                    <Text typography="headline-md" overflow="ellipsis">{product.name}</Text>
                </div>
                <Button onClick={() => addToCard(product)}>
                    <span className="material-symbols-outlined">
                        add_shopping_cart
                    </span>{product.price}₽</Button>
            </Island>
        </Column>)
}

export { Product };