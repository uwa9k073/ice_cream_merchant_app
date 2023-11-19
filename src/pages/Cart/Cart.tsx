import Page from "../../components/Page";
import CartItem from "../../components/CartItem";
import styles from "./Cart.module.scss"
import { Button, Text } from "@adev/ui-kit";
import useCartStore from "../../stores/cart";

const Cart = () => {
    const cart = useCartStore(state => state.cart);
    const totalPrice = useCartStore(state => state.totalPrice);
    const clearCart = useCartStore(state => state.clearCart);
    const sortAsc = useCartStore(state => state.sortAsc);
    const sortDesc = useCartStore(state => state.sortDesc);

    if (cart && cart.length != 0) {
        return (
            <>
                <Page>
                    <div className={styles.wrapper}>
                        <div className={styles.sidebar}>
                            <Button onClick={() => sortAsc()}>Отсортировать по возрастанию</Button>
                            <Button onClick={() => sortDesc()}>Отсортировать по убыванию</Button>
                        </div>
                        <div className={styles.productsContainer}>
                            {cart?.map((item) => (<CartItem product={item.product} count={item.count}></CartItem>))}
                        </div>
                        <div className={styles.aside}>
                            <Text typography="headline-xl">Итоговая стоимость: {totalPrice}₽</Text>
                            <Button size="xl">Оформить заказ</Button>
                            <Button size="xl" onClick={() => clearCart()}>Очистить корзину</Button>
                        </div>
                    </div>
                </Page >
            </>
        );
    }

    return (<><Page>
        <Text typography="headline-xl"> Ваша корзина пуста</Text>
    </Page></>)
}

export { Cart };