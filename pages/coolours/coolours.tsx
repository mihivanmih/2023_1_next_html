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
    const setRandomColors = (isInitial) => {
        const colors = isInitial ? getColorsFromHash() : []

        const colAll = document.querySelectorAll<HTMLElement>(`.${styles.col}`)
        colAll.forEach((col, index) => {
            const isLocked = col.querySelector('button i').classList.contains('fa-lock')
            const text = col.querySelector('h2')
            const button = col.querySelector('button')
            // const color = generateRandomColor()

            if(isLocked) {
                colors.push(text.textContent)
                return
            }

            const color = isInitial
                ? colors[index]
                     ? colors[index]
                     : chroma.random()
                : chroma.random()

            if(!isInitial) {
                colors.push(color)
            }

            col.style.background = color
            text.textContent = color

            setTextColor(text, color)
            setTextColor(button, color)
        })
        console.log("colors", colors)
        updateColorsHash(colors)
    }

    const setTextColor = (text, color) => {
        const luminance = chroma(color).luminance()
        text.style.color = luminance > 0.5 ? '#000' : '#fff'
    }


    document.addEventListener('keydown', (e) => {
        e.preventDefault()
        if (e.keyCode === 32) { //space
            setRandomColors(null)
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

    const updateColorsHash = (colors = []) => {
        document.location.hash = colors.map(col => {
            return col.toString().substring(1)
        }).join('-') 
    }

    const getColorsFromHash = () => {
      if(document.location.hash.length > 1) {
         return document.location.hash.substring(1).split('-').map(color => '#' + color)
      }
      return []
    }

    useEffect(() => {
        setRandomColors(true)
    }, [])
    
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