import { BrowserView, MobileView } from "react-device-detect";
import styles from "./Navbar.module.scss"
import { NavbarBrowser } from "./NavbarBrowser";
import { NavbarMobile } from "./NavbarMobile";


export interface INavbarItemProps {
    path: string,
    name: string
    icon: string
}

export interface INavbarProps {
    items: INavbarItemProps[];
}


export default function NavBar() {

    const items = [{ path: "/cart", name: "Корзина", icon: "shopping_cart" }, { path: "/reviews", name: "Отзывы", icon: "reviews" }, { path: "/about", name: "О нас", icon: "contacts" }]

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