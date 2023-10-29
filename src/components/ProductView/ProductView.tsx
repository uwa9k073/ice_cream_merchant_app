import { Button, Text } from "@adev/ui-kit"
import styles from "./ProductView.module.scss"
import { IProduct } from "../../pages/Products"
import { IProductViewProps } from ".";
import Review from "../Review";
import { ICartProduct } from "../../pages/Cart";


const ProductView = ({ product, reviews }: IProductViewProps) => {
    const addToCard = (product: IProduct) => {
        let existingItems: ICartProduct[] = JSON.parse(localStorage.getItem("products") || "[]");
        let flag = false;
        existingItems.forEach((cartProduct) => {
            if (cartProduct.product = product) {
                cartProduct.count += 1;
                flag = true;
            }
        });
        if (!flag) {
            const updatedList: ICartProduct[] = [...existingItems, { product: product, count: 1 }];
            localStorage.setItem("products", JSON.stringify(updatedList));
        } else {
            localStorage.setItem("products", JSON.stringify(existingItems));
        }
    }
    console.log(reviews);
    return (<>
        <div className={styles.wrapper}>
            <img src={product?.img_src} alt={product?.img_alt}></img>
            <div className={styles.box}>
                <Text typography="headline-xl" weight="bold">{product?.name}</Text>
                <Text typography="body-long-md">{product?.description}</Text>
                <Button onClick={() => addToCard}><span className="material-symbols-outlined">
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