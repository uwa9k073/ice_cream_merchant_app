import { BrowserView, MobileView } from "react-device-detect";
import styles from "./Navbar.module.scss"
import { NavbarBrowser } from "./NavbarBrowser";
import { NavbarMobile } from "./NavbarMobile";


export default function NavBar() {

    const items = [{ path: "/ice_cream_merchant_app/cart", name: "Корзина", icon: "shopping_cart" }, { path: "/ice_cream_merchant_app/favorites", name: "Избранное", icon: "favorite" }, { path: "/ice_cream_merchant_app/about", name: "О нас", icon: "contacts" }]

    return (
        <header className={styles.header}>
            <BrowserView>
                <NavbarBrowser items={items}></NavbarBrowser>
            </BrowserView>
            <MobileView>
                <NavbarMobile items={items}></NavbarMobile>
            </MobileView>

        </header>
    );
}