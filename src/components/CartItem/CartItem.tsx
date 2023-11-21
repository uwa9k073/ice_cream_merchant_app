import { Button, Text } from "@adev/ui-kit";
import { ICartProduct } from "../../pages/Cart";
import styles from "./CartItem.module.scss"
import useCartStore from "../../stores/cart";

const CartItem = ({ product, count }: ICartProduct) => {
    const [decrementItemCount, incrementItemCount, removeProduct] =
        useCartStore(state => [state.decreaseProductCount,
        state.increaseProductCount, state.removeProduct]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <img src={product.img_src} alt={product.img_alt} />
                    </div>
                    <div className={styles.content}>
                        <Text typography="headline-md">{product.name}</Text>
                        <div className={styles.box}>
                            <Button onClick={() => removeProduct(product.name)} size="sm"><span className="material-symbols-outlined">delete</span></Button>
                        </div>
                    </div>
                    <div className={styles.priceBox}>
                        <Text typography="headline-md">Цена: {product.price * count}₽</Text>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button contentLeft="-" size="md" onClick={() => decrementItemCount(product.name)} disabled={count > 1 ? false : true}></Button>
                    <Text typography="headline-lg">{count}</Text>
                    <Button contentLeft="+" size="md" onClick={() => incrementItemCount(product.name)}></Button>
                </div>
            </div>
        </>)
}

export { CartItem };