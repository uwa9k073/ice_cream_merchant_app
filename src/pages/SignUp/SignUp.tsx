import React, { useState } from 'react';
import useAuthStore, { IUser, isUserDefined } from '../../stores/auth';
import { Button } from '@adev/ui-kit'
import styles from './SignUp.module.scss'
import Page from '../../components/Page';


const SignUp: React.FC = () => {
    const [user, setUser] = useState<IUser>({ fullName: '', email: '', password: '', phoneNumber: '' })
    const { signUp } = useAuthStore();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    };
    const handleSubmit = () => {
        if (isUserDefined(user)) {
            console.log('ok')
            signUp(user);
        }
    };

    return (
        <Page>
            <div className={styles.container}>
                <div className={styles.login_box}>
                    <form className={styles.form} method="post">
                        <div>
                            <h2 className={styles.login}>SignUp</h2>
                        </div>
                        <div>
                            <div className={styles.input}>
                                <input placeholder="Jonh Doe" type="text" name="fullName" required onChange={handleChange} />
                                <label htmlFor="name">FullName</label>
                            </div>
                            <div className={styles.input}>
                                <input placeholder="jonhdoe@mail.ru" type="email" name="email" required onChange={handleChange} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className={styles.input}>
                                <input placeholder="+7(999)999-99-99" type="tel" name="email" onChange={handleChange} />
                                <label htmlFor="email">PhoneNumber</label>
                            </div>
                            <div className={styles.input}>
                                <input placeholder="1111" type="password" name="password" required onChange={handleChange} />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                        <div className={styles.button_container}>
                            <Button className="submit" onClick={handleSubmit}>Отправить</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Page>
    );
};

export default SignUp;