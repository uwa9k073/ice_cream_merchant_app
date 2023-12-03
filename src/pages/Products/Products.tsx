import { BottomDrawer, Row, Dialog } from "@adev/ui-kit";
import Page from "../../components/Page";
import Product from "../../components/Product";
import { useState } from "react";
import { IProduct } from ".";
import styles from "./Products.module.scss"
import { BrowserView, MobileView } from "react-device-detect";
import ProductView from "../../components/ProductView";
import useProductsStore from "../../stores/products";

const Products = () => {
    const [product, setProduct] = useState<IProduct | undefined>(undefined);

    const { products } = useProductsStore();

    const reviews = [{ userName: "Clown Buggy", text: "Best of the bests" },
    { userName: "Donqihuote Doflamingo", text: "I spend all my money on that" },
    { userName: "Dracule Mihawk", text: "unbelievable" }];

    return (<>
        <Page>
            <Row justify="left">
                {products.map((product) => (<Product product={product} onClick={(currentProduct) => { setProduct(currentProduct) }}></Product>))}
            </Row>
        </Page>
        <BrowserView>
            <Dialog rootClassName={styles.wrapper} open={product != undefined} onClose={() => { setProduct(undefined) }} noHeader verticalAlign="center">
                <ProductView product={product} reviews={reviews} />
            </Dialog>
        </BrowserView>
        <MobileView>
            <BottomDrawer className={styles.wrapper} open={product != undefined} onClose={() => { setProduct(undefined) }}>
                <ProductView product={product} reviews={reviews} />
            </BottomDrawer>
        </MobileView>
    </>)
}


export { Products }
