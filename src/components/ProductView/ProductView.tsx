import { Button, Text } from "@adev/ui-kit"
import styles from "./ProductView.module.scss"
import { IProduct } from "../../pages/Products"
import { IProductViewProps } from ".";


const ProductView = ({ product }: IProductViewProps) => {
    const addToCard = (product: IProduct) => {
        const existingItems: IProduct[] = JSON.parse(localStorage.getItem("products") || "[]");
        const updatedList: IProduct[] = [...existingItems, product];
        localStorage.setItem("products", JSON.stringify(updatedList));
    }
    return (<>
        <div className={styles.wrapper}>
            <img src={product?.img_src} alt={product?.img_alt}></img>
            <div className={styles.box}>
                <Text typography="headline-md">{product?.name}</Text>
                <Text typography="body-long-md">{product?.description}</Text>
                <Button onClick={() => addToCard}><span className="material-symbols-outlined">
                        add_shopping_cart
                </span>{product?.price}₽</Button>
            </div>
        </div>
    </>)
};

export { ProductView };