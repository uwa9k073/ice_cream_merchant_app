import { Button, Text } from "@adev/ui-kit"
import styles from "./ProductView.module.scss"
import { IProductViewProps } from ".";
import Review from "../Review";
import { addToCart } from "../../pages/Products";


const ProductView = ({ product, reviews }: IProductViewProps) => {
    return (<>
        <div className={styles.wrapper}>
            <img src={product?.img_src} alt={product?.img_alt}></img>
            <div className={styles.box}>
                <Text typography="headline-xl" weight="bold">{product?.name}</Text>
                <Text typography="body-long-md">{product?.description}</Text>
                <Button onClick={() => addToCart(product)}><span className="material-symbols-outlined">
                    add_shopping_cart
                </span>{product?.price}₽</Button>
                <div>
                    <Text typography="headline-lg" weight="bold">Отзывы</Text>
                    <div>
                        {reviews?.map((review) => (<Review review={review}></Review>))}
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export { ProductView };