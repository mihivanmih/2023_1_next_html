import React, {useRef} from 'react';
import MainLayout from "@/layots/MainLayout";
import Head from "next/head";
import styles from '@/styles/auth/auth.module.scss'


const Auth = () => {

    const Auth = useRef(null);
    const Register = useRef(null);
    const boX = useRef(null);

    const login = (e) => {
        Auth.current.classList.toggle(`${styles.active}`)
        Register.current.classList.toggle(`${styles.active}`)
        boX.current.classList.toggle(`${styles.active}`)
    }

    return (
        <MainLayout title={'Auth'} className={`${styles.auth}`}>
            <Head>
                <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"/>
                <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
            </Head>
            <div className={`${styles.formBox}`} ref={boX}>
                <div className={`${styles.authBox}`} ref={Auth}>
                    <form action="">
                        <h2>Login</h2>
                        <div className={`${styles.inputbox}`}>
                            <ion-icon name={'mail-outline'}/>
                            <input type="email" required/>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={`${styles.inputbox}`}>
                            <ion-icon name={'lock-closed-outline'}/>
                            <input type="password" required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={`${styles.forget}`}>
                            <label htmlFor="">
                                <input type="checkbox"/> agree to the terms & conditions
                            </label>
                        </div>
                        <button>Log in</button>
                        <div className={`${styles.register}`}>
                            <p>
                                Don't have a account <a href="#" onClick={login}>Register</a>
                            </p>
                        </div>
                    </form>
                </div>

                <div className={`${styles.Register}`} ref={Register}>
                    <form action="">
                        <h2>Registration</h2>
                        <div className={`${styles.inputbox}`}>
                            <ion-icon name={'mail-outline'}/>
                            <input type="email" required/>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={`${styles.inputbox}`}>
                            <ion-icon name={'person-outline'}/>
                            <input type="text" required/>
                            <label htmlFor="">Username</label>
                        </div>
                        <div className={`${styles.inputbox}`}>
                            <ion-icon name={'lock-closed-outline'}/>
                            <input type="password" required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={`${styles.forget}`}>
                            <label htmlFor="">
                                <input type="checkbox"/> Remember me <a href="#">Forget Password</a>
                            </label>
                        </div>
                        <button>Register</button>
                        <div className={`${styles.register}`}>
                            <p>
                                Already have a account <a href="#" className='login-link' onClick={login}>Login</a>
                            </p>
                        </div>
                    </form>
                </div>

            </div>


            {/*<div className={`${styles.formBox} ${styles.register}`}>*/}

            {/*</div>*/}
        </MainLayout>
    );
};

export default Auth;
