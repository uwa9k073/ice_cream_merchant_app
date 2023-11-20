import styles from './Contacts.module.scss'
import { Button, Text } from '@adev/ui-kit'
import { Phone, Email } from '@mui/icons-material'
const Contacts = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <Text typography="headline-md" weight='light' >
                        <Phone></Phone> +7 (999) 999-99-99
                    </Text>
                    <br />
                    <Text typography="headline-md" weight='light' >
                        <Email></Email> yynm@gmail.com
                    </Text>
                </div>
                <div className={styles.social_networks}>
                    <Button><span className={'fab fa-youtube'}></span></Button>
                    <Button><span className='fab fa-telegram'></span></Button>
                    <Button><span className='fab fa-vk'></span></Button>
                </div>
            </div >
        </>
    );
};

export { Contacts };