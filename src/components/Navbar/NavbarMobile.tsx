import { Link } from "react-router-dom";
import { INavbarProps } from "./index";
import styles from "./NavbarMobile.module.scss"
import logo from "../../../public/logo.svg"
import { Avatar, Button, Text } from "@adev/ui-kit";
import { useState } from "react";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";

const NavbarMobile = ({ items }: INavbarProps) => {
    const [open, setOpen] = useState(false);

    return (<div className={styles.wrapper}>
        <Link to={"/ice_cream_merchant_app"}><img src={logo} style={{ width: 48, height: 48, color: "var(--ep-color-primary)" }}></img></Link>
        <div>
            <Button view="clear" onClick={() => {
                setOpen(!open)
            }} contentLeft={<span className="material-symbols-outlined">
                menu
            </span>}></Button>
            <Backdrop duration={500} open={open} onClick={() => { setOpen(false) }}></Backdrop>
            <div className={clsx(styles.navbarMobile, open && styles.navbarMobileOpen)}>
                <Avatar text={"John Doe"}></Avatar>
                {items.map((item) => (
                    <Link className={styles.navbarMobileItem} to={item.path}>
                        <span className="material-symbols-outlined">
                            {item.icon}
                        </span>
                        <Text typography="headline-sm">{item.name}</Text></Link>
                ))}</div>

        </div>
    </div>);
}

export { NavbarMobile };