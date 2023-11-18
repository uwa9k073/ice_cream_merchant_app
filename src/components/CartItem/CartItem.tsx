import { Button, Column, Row, Text, Island } from "@adev/ui-kit";
import { ICartProduct } from "../../pages/Cart";
import styles from "./CartItem.module.scss"
import { useState } from "react";
import useCartStore from "../../stores/cart";







const CartItem = (item: ICartProduct) => {
    const decrementItemCount = useCartStore(state => state.decreaseProductCount);
    const incrementItemCount = useCartStore(state => state.increaseProductCount);
    const removeProduct = useCartStore(state => state.removeProduct);
    return (
        <>
            <Row className={styles.row}>
                <Column width={{ mobile: 12, tablet: 12, desktop: 4 }}>
                    <Island className={styles.wrapper}>
                        <img src={item.product.img_src} alt={item.product.img_alt} />
                        <div className={styles.box}>
                            <Text typography="headline-lg" weight="bold">{item.product.name}</Text>
                            <Text typography="headline-md">{item.product.price * item.count} ₽</Text>
                        </div>
                    </Island>
                </Column>
                <Column width={{ mobile: 12, tablet: 12, desktop: 4 }} className={styles.buttons}>
                    <Island className={styles.buttons}>
                        <Button contentLeft="-" size="md" onClick={() => decrementItemCount(item.product.name)} disabled={item.count > 1 ? false : true}></Button>
                        <Text typography="headline-md">{item.count}</Text>
                        <Button contentLeft="+" size="md" onClick={() => incrementItemCount(item.product.name)}></Button>
                    </Island>
                </Column>
                <Column width={{ mobile: 12, tablet: 12, desktop: 4 }}>
                    <Island className={styles.delete_wrapper}>
                        <Button onClick={() => removeProduct(item.product.name)}><span className="material-symbols-outlined">delete</span></Button>
                    </Island>
                </Column>
            </Row >
        </>)
}

export { CartItem };