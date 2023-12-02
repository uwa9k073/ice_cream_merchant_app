import { BottomDrawer, Dialog, Row, Text } from "@adev/ui-kit";
import Page from "../../components/Page";
import { BrowserView, MobileView } from "react-device-detect";
import ProductView from "../../components/ProductView";
import styles from "./Favorites.module.scss"
import { useState } from "react";
import { IProduct } from "../Products";
import FavoriteProduct from "../../components/FavoriteProduct";
import useProductsStore from "../../stores/products";


const Favorites = () => {
    const { products } = useProductsStore();
    const favProducts = products.filter(item => item.isFavorite);
    const [product, setProduct] = useState<IProduct | undefined>(undefined);
    const reviews = [{ userName: "Clown Buggy", text: "Best of the bests" }, { userName: "Donqihuote Doflamingo", text: "I spend all my money on that" }, { userName: "Dracule Mihawk", text: "unbelievable" }];
    if (favProducts && favProducts.length != 0) {
        return (<><Page>
            <Row justify="left">
                {favProducts.map((product) => <FavoriteProduct product={product} onClick={(currentProduct) => { setProduct(currentProduct) }}></FavoriteProduct>)}
            </Row>
        </Page>
            <BrowserView>
                <Dialog rootClassName={styles.wrapper} open={product != undefined} onClose={() => { setProduct(undefined) }} noHeader>
                    <ProductView product={product} reviews={reviews} />
                </Dialog>
            </BrowserView>
            <MobileView>
                <BottomDrawer className={styles.wrapper} open={product != undefined} onClose={() => { setProduct(undefined) }}>
                    <ProductView product={product} reviews={reviews} />
                </BottomDrawer>
            </MobileView>
        </>);
    }

    return (<><Page>
        <div className={styles.empty}>
            <Text typography="headline-xl" weight="light">У вас нет избранных товаров</Text>
        </div>
    </Page></>)
}

export { Favorites };