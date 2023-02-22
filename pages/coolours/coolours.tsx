import React, {FC, useEffect, useRef, useState} from 'react'
import styles from '@/styles/coolours/coolours.module.scss'
import MainLayout from '@/layots/MainLayout'
import Head from 'next/head'
import { Cookies } from 'next/headers'

const Coolours: FC = () => {

    // const generateRandomColor = () => {
    //     const hexCodes = '0123456789ABCDEF'
    //
    //     let color = ''
    //     for(let i =0; i<6; i++){
    //         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    //     }
    //     return '#' + color
    // }


    // что бы работал querySelectorAll нужно обернуть в провайдер
   // if (process.browser) {
    const setRandomColors = () => {
        const colAll = document.querySelectorAll<HTMLElement>(`.${styles.col}`)
        colAll.forEach(col => {
            const isLocked = col.querySelector('button i').classList.contains('fa-lock')
            const text = col.querySelector('h2')
            const button = col.querySelector('button')
            // const color = generateRandomColor()

            if(isLocked) {
                return
            }

            const color = chroma.random()
            col.style.background = color
            text.textContent = color

            setTextColor(text, color)
            setTextColor(button, color)

        })
    }

    const setTextColor = (text, color) => {
        const luminance = chroma(color).luminance()
        text.style.color = luminance > 0.5 ? '#000' : '#fff'
    }

    useEffect(() => {
        setRandomColors()
    }, [])

    document.addEventListener('keydown', (e) => {
        e.preventDefault()
        if (e.keyCode === 32) { //space
            setRandomColors()
        }
    })

    const lock = (e) => {
        if(e.target.childElementCount > 0) {
            // значит кнопка
            e.target.childNodes[0].classList.toggle("fa-lock-open")
            e.target.childNodes[0].classList.toggle("fa-lock")

        } else {
            e.target.classList.toggle("fa-lock-open")
            e.target.classList.toggle("fa-lock")
        }
    }

    const copyToClickBoard = (e) => {
        return navigator.clipboard.writeText(e.target.innerText)
    }

    return (
        <div title={ 'Color' } >
            <div className={ `color ${ styles.color }` } >
                <div className={ styles.col } >
                    <h2 onClick={copyToClickBoard}/>
                    <button onClick={ lock }><i className={'fa-solid fa-lock-open'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2 onClick={copyToClickBoard}/>
                    <button onClick={ lock }><i className={'fa-solid fa-lock-open'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2 onClick={copyToClickBoard}/>
                    <button onClick={ lock }><i className={'fa-solid fa-lock-open'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2 onClick={copyToClickBoard}/>
                    <button onClick={ lock }><i className={'fa-solid fa-lock-open'} /></button>
                </div>
                <div className={ styles.col }>
                    <h2 onClick={copyToClickBoard}/>
                    <button onClick={ lock }><i className={'fa-solid fa-lock-open'} /></button>
                </div>
            </div>
        </div>
    )
}

export default Coolours