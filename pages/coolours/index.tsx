import React, {FC, useRef} from 'react'
import styles from '@/styles/coolours/coolours.module.scss'
import MainLayout from '@/layots/MainLayout'
import Head from 'next/head'

const Coolours: FC = () => {

    const generateRandomColor = () => {
        const hexCodes = '0123456789ABCDEF'

        let color = ''
        for(let i =0; i<6; i++){
            color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
        }
        return '#' + color
    }


    // что бы работал querySelectorAll нужно обернуть в провайдер
    if (process.browser) {
        const colAll = document.querySelectorAll<HTMLElement>(`.${styles.col}`)
        const setRandomColors = () => {
            colAll.forEach(col => {
                console.log(col)
                col.style.background = generateRandomColor()
            })
        }
        setRandomColors()
    }
    


    
    return (
        <MainLayout title={ 'Color' }>
            <Head>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
                      crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </Head>
            <div className={ `color ${ styles.color }` } >
                <div className={ styles.col }>
                    <h2>Text</h2>
                    <button><i className={'fa-solid fa-lock'} /></button>
                    {/*<button><i className={'fa-solid fa-lock-open'} /></button>*/}
                </div>
                <div className={ styles.col }>
                    <h2>Text</h2>
                    <button><i className={'fa-solid fa-lock'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2>Text</h2>
                    <button><i className={'fa-solid fa-lock'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2>Text</h2>
                    <button><i className={'fa-solid fa-lock'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2>Text</h2>
                    <button><i className={'fa-solid fa-lock'} /></button>
                </div>
            </div>
        </MainLayout>
    )
}

export default Coolours
