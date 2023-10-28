import React from "react";
import NavBar from "../Navbar/Navbar";
import styles from "./Page.module.scss"

interface IPageProps {
    children: React.ReactNode;
}

const Page = ({ children }: IPageProps) => {
    return (<><NavBar></NavBar><main className={styles.main}>{children}</main></>);
}

export { Page };