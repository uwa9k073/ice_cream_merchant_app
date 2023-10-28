import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss"
import logo from "../../../public/logo.svg"
import { INavbarProps } from "./Navbar";



const NavbarBrowser = ({ items }: INavbarProps) => {
    return (<div className={styles.wrapper}>
        <Link to={"/"}><img src={logo} style={{ width: 48, height: 48, color: "var(--ep-color-primary)" }}></img></Link>
        <div>
            <div className={styles.navbar}>
                {items.map((item) => (<Link to={item.path}>{item.name}</Link>))}
            </div>
        </div>
    </div>);
}


export { NavbarBrowser };