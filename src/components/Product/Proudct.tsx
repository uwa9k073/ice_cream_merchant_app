import { Button, Column, Island, Text } from "@adev/ui-kit";
import styles from "./Product.module.scss"
import { IProduct } from "../../pages/Products/Products";

interface IProductProps {
    product: IProduct;
    onClick: (product: IProduct) => void;
}

const Product = ({ product, onClick }: IProductProps) => (<Column width={{
    mobile: 6, tablet: 6, desktop: 4
}}>
    <Island className={styles.island} onClick={() => { onClick(product) }}>
        <img src={product.img_src} alt={product.img_alt}></img>
        <Text typography="body-long-md">Мороженое: {product.name}</Text>
        <Text>Цена: {product.price} руб.</Text>
    </Island>
</Column>)

export { Product };