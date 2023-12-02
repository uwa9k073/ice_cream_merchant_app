import React, { useState } from 'react';
import useAuthStore, { isDefine } from '../../stores/auth';
import { Button } from '@adev/ui-kit'
import styles from './SignIn.module.scss'
import { Link } from 'react-router-dom';
import Page from '../../components/Page';



const SignIn: React.FC = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { signIn } = useAuthStore();

    const handleSubmit = () => {
        if (isDefine(password) && isDefine(email)) {
            signIn(email, password);
        }
    };

    return (
        <Page>
            <div className={styles.container}>
                <div className={styles.login_box}>
                    <form className={styles.form} method="post">
                        <div>
                            <h2 className={styles.login}>Login</h2>
                        </div>
                        <div>
                            <div className={styles.input}>
                                <input placeholder="jonhdoe@mail.ru" type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className={styles.input}>
                                <input placeholder=" " type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                        <div className={styles.button_container}>
                            <Link to={'/'}>
                                <Button className="submit" onClick={handleSubmit}>Отправить</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button className="signup">Пройти регистрацию</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Page>
    );
};

export default SignIn;