import Page from "../../components/Page";
import CartItem from "../../components/CartItem";
import styles from "./Cart.module.scss"
import { Button, Text } from "@adev/ui-kit";
import useCartStore from "../../stores/cart";

const Cart = () => {
    const { cart, totalPrice, clearCart } =
        useCartStore()

    if (cart && cart.length != 0) {
        return (
            <>
                <Page>
                    <div className={styles.wrapper}>
                        <div className={styles.productsContainer}>
                            {cart?.map((item) => (<CartItem product={item.product} count={item.count}></CartItem>))}
                        </div>
                        <div className={styles.rsb}>
                            <Text typography="headline-xl">Итоговая стоимость: {totalPrice}₽</Text>
                            <Button size="lg">Оформить заказ</Button>
                            <Button size="md" onClick={() => clearCart()}>Очистить корзину</Button>
                        </div>
                    </div>
                </Page >
            </>
        );
    }

    return (<><Page>
        <div className={styles.empty}>
            <Text typography="headline-xl" weight="light"> Ваша корзина пуста</Text>
        </div>
    </Page></>)
}

export { Cart };