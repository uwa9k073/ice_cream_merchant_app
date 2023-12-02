import { BrowserView, MobileView } from "react-device-detect";
import styles from "./Navbar.module.scss"
import { NavbarBrowser } from "./NavbarBrowser";
import { NavbarMobile } from "./NavbarMobile";


export default function NavBar() {

    const items = [{ path: "/cart", name: "Корзина", icon: "shopping_cart" }, { path: "/favorites", name: "Избранное", icon: "favorite" }, { path: "/about", name: "О нас", icon: "contacts" }]

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