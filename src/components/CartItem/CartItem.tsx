import { Button, Text } from "@adev/ui-kit";
import { ICartProduct } from "../../pages/Cart";
import styles from "./CartItem.module.scss"
import useCartStore from "../../stores/cart";

const CartItem = (item: ICartProduct) => {
    const decrementItemCount = useCartStore(state => state.decreaseProductCount);
    const incrementItemCount = useCartStore(state => state.increaseProductCount);
    const removeProduct = useCartStore(state => state.removeProduct);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img src={item.product.img_src} alt={item.product.img_alt} />
                    <div className={styles.content}>
                        <Text typography="headline-md">{item.product.name}</Text>
                        <div className={styles.box}>
                            <Button onClick={() => removeProduct(item.product.name)} size="xs"><span className="material-symbols-outlined">delete</span></Button>
                            <Button size="xs"><span className="material-symbols-outlined">favorite</span></Button>
                        </div>
                    </div>
                    <div className={styles.priceBox}>
                        <Text typography="headline-md">Цена: {item.product.price * item.count}₽</Text></div>
                </div>
                <div className={styles.buttons}>
                    <Button contentLeft="-" size="md" onClick={() => decrementItemCount(item.product.name)} disabled={item.count > 1 ? false : true}></Button>
                    <Text typography="headline-lg">{item.count}</Text>
                    <Button contentLeft="+" size="md" onClick={() => incrementItemCount(item.product.name)}></Button>
                </div>
            </div>
        </>)
}

export { CartItem };