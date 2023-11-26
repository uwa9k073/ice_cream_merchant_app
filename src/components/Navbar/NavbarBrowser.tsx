import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss"
import logo from "../../../public/logo.svg"
import { INavbarProps } from "./index";
import { Avatar, Text } from "@adev/ui-kit";
import useAuthStore from "../../stores/auth";



const NavbarBrowser = ({ items }: INavbarProps) => {
    const user = useAuthStore(state => state.currentUser);
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
                <Link to='/ice_cream_merchant_app/signin'><Avatar text={user ? user.fullName : "Anonim"}></Avatar></Link>
            </div>
        </div>
    </div>);
}


export { NavbarBrowser };