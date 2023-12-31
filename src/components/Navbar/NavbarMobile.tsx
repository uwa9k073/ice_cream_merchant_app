import { Link } from "react-router-dom";
import { INavbarProps } from "./index";
import styles from "./NavbarMobile.module.scss"
import logo from "../../../public/logo.svg"
import { Avatar, Button, Text } from "@adev/ui-kit";
import { useState } from "react";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import useAuthStore from "../../stores/auth";

const NavbarMobile = ({ items }: INavbarProps) => {
    const [open, setOpen] = useState(false);
    const { currentUser } = useAuthStore()

    return (<div className={styles.wrapper}>
        <Link to={"/"}><img src={logo} style={{ width: 48, height: 48, color: "var(--ep-color-primary)" }}></img></Link>
        <div>
            <Button view="clear" onClick={() => {
                setOpen(!open)
            }} contentLeft={<span className="material-symbols-outlined">
                menu
            </span>}></Button>
            <Backdrop duration={500} open={open} onClick={() => { setOpen(false) }}></Backdrop>
            <div className={clsx(styles.navbarMobile, open && styles.navbarMobileOpen)}>
                <Link to='/signin'><Avatar text={currentUser ? currentUser.fullName : "Anonim"}></Avatar></Link>
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