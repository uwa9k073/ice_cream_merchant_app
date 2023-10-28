import { BottomDrawer, Row } from "@adev/ui-kit";
import Page from "../../components/Page";
import Product from "../../components/Product";
import { useState } from "react";
import styles from "./Products.module.scss"


export interface IProduct {
    name: string;
    img_src: string;
    img_alt: string;
    description: string;
    price: number;
}

export default function Products() {
    const [product, setProduct] = useState<IProduct | undefined>(undefined);
    const products = [{ name: "Черничное", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/blackberry-ice-cream_ch1l3e.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Черничное", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806311/banana-ice-cream_jb939j.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Черничное", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/raspberry-ice-cream_vqynkp.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Черничное", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/strawberry-ice-cream_wl1lly.png", img_alt: "Черничное мороженое", description: "", price: 149.99 },
    { name: "Черничное", img_src: "https://res.cloudinary.com/dixvycrtj/image/upload/v1696806310/kandinsky-download-1696791439312_tg13oy.png", img_alt: "Черничное мороженое", description: "", price: 149.99 }]
    return (<><Page>
        <Row justify="left">
            {products.map((product) => (<Product product={product} onClick={(currentProduct) => { setProduct(currentProduct) }}></Product>))}
        </Row>

    </Page>
        <BottomDrawer className={styles.bottomDrawer} open={product != undefined} onClose={() => { setProduct(undefined) }}>
            <div className={styles.image}><img src={product?.img_src} alt={product?.img_alt}></img></div>
        </BottomDrawer></>)
}

