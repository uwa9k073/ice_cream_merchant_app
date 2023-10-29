import { BottomDrawer, Row, Dialog } from "@adev/ui-kit";
import Page from "../../components/Page";
import Product from "../../components/Product";
import { useState } from "react";
import { IProduct } from ".";
import styles from "./Products.module.scss"
import { BrowserView, MobileView } from "react-device-detect";
import ProductView from "../../components/ProductView";

const Products = () => {
    const [product, setProduct] = useState<IProduct | undefined>(undefined);
    const products = [{ name: "Черничное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/blackberry-ice-cream_ch1l3e.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Банановое мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/banana-ice-cream_jb939j.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Малиновое мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/raspberry-ice-cream_vqynkp.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Клубничное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/strawberry-ice-cream_wl1lly.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Ванильное мороженое", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/kandinsky-download-1696791439312_tg13oy.png", img_alt: "Черничное мороженое", description: "", price: 149.99 }]
    return (<>
        <Page>
            <Row justify="left">
                {products.map((product) => (<Product product={product} onClick={(currentProduct) => { setProduct(currentProduct) }}></Product>))}
            </Row>
        </Page>
        <BrowserView>
            <Dialog rootClassName={styles.wrapper} open={product != undefined} onClose={() => { setProduct(undefined) }} noHeader>
                <ProductView product={product} />
            </Dialog>
        </BrowserView>
        <MobileView>
            <BottomDrawer className={styles.wrapper} open={product != undefined} onClose={() => { setProduct(undefined) }}>
                <ProductView product={product} />
            </BottomDrawer>
        </MobileView>
    </>)
}


export { Products }
