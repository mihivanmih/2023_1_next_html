import React from 'react';
import MainLayout from "@/layots/MainLayout";
import Head from "next/head";
import styles from '@/styles/auth/auth.module.scss'


const Auth = () => {
    return (
        <MainLayout title={'Auth'} className={`${styles.auth}`}>
            <Head>
                <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"/>
                <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
            </Head>
            <div className={`${styles.formBox}`}>
                <div className="form-value">
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
                                <input type="checkbox"/> Remember me <a href="#">Forget Password</a>
                            </label>
                        </div>
                        <button>Log in</button>
                        <div className={`${styles.register}`}>
                            <p>
                                Don't have a account <a href="#">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Auth;
