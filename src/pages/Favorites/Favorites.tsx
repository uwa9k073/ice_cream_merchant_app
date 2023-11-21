import { BottomDrawer, Dialog, Row } from "@adev/ui-kit";
import Page from "../../components/Page";
import { BrowserView, MobileView } from "react-device-detect";
import ProductView from "../../components/ProductView";
import styles from "./Favorites.module.scss"
import { useState } from "react";
import { IProduct } from "../Products";
import FavoriteProduct from "../../components/FavoriteProduct";
import useProductsStore from "../../stores/products";


const Favorites = () => {
    const products = useProductsStore(state => state.products);
    const [product, setProduct] = useState<IProduct | undefined>(undefined);
    const reviews = [{ userName: "Clown Buggy", text: "Best of the bests" }, { userName: "Donqihuote Doflamingo", text: "I spend all my money on that" }, { userName: "Dracule Mihawk", text: "unbelievable" }];
    return (<><Page>
        <Row justify="left">
            {products.map((product) => product.isFavorite ? (<FavoriteProduct product={product} onClick={(currentProduct) => { setProduct(currentProduct) }}></FavoriteProduct>) : (<></>))}
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

export { Favorites };