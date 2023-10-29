import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss"
import logo from "../../../public/logo.svg"
import { INavbarProps } from "./index";
import { Text } from "@adev/ui-kit";



const NavbarBrowser = ({ items }: INavbarProps) => {
    return (<div className={styles.wrapper}>
        <Link to={"/ice_cream_merchant_app"}><img src={logo} style={{ width: 48, height: 48, color: "var(--ep-color-primary)" }}></img></Link>
        <div>
            <div className={styles.navbar}>
                {items.map((item) => (<Link to={item.path}>
                    <div className={styles.item}>
                        <span className="material-symbols-outlined">
                            {item.icon}
                        </span>
                        <Text typography="headline-sm">{item.name}</Text>
                    </div>
                </Link>))}
            </div>
        </div>
    </div>);
}


export { NavbarBrowser };