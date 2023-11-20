import Page from "../../components/Page";
import { Text } from "@adev/ui-kit";
import styles from "./AboutUs.module.scss"
import Contacts from "../../components/Contacts";

const AboutUs = () => {
    return (
        <>
            <Page>
                <div className={styles.wrapper}>
                    <div className={styles.aboutUs}>
                        <Text typography="display-lg" weight="light">Yummi Yummi No Mi</Text>
                        <Text typography="body-long-xl" weight="light">
                            Добро пожаловать в наш магазин мороженого! У нас широкий выбор вкусов и марок со всего мира. Сотрудничаем с проверенными производителями для достижения отличного качества и неповторимого вкуса. У нас есть мороженое разных видов, включая классические, экзотические, безлактозное, сорбеты, замороженные йогурты, без сахара и низкокалорийное. Заказывайте просто - выберите вкусы, добавьте в корзину и оформите заказ. Доставляем свежее и замороженное мороженое. Наслаждайтесь вкусом!
                        </Text>
                    </div>
                    <div className={styles.contactsContainer}>
                        <Text typography="headline-lg" weight="light">Контакты</Text>
                        <div className={styles.contacts}>
                            <Contacts></Contacts>
                        </div>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd47ff74053e96ff871b1e886c26ed47e6747fddd365e4656cb10dbdfba810a5&amp;source=constructor" className={styles.map}></iframe>

                    </div>
                </div>
            </Page>
        </>)
}

export { AboutUs };