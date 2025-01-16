
"use client"
import React,{useEffect, useState} from 'react'
import styles from "./page.module.scss";
//import Projetos from "../Projetos/page";

import Link from "next/link";

export function Header() {
    const [top,setTop] = useState(true);
    const scrolHandler = (()=>{
        window.scrollY > 10 ? setTop(false) : setTop(true)
    })
     
    useEffect(()=>{
        window.addEventListener('scroll', scrolHandler);

        return ()=> window.removeEventListener('scroll', scrolHandler)

    },[])

    return (
        <header className={`${styles.header} ${top ? styles.background : styles.fixed}`}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                   <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/Projetos">Projetos</Link>
                    </li>
                  
                   
                   </ul>
                </nav>
            </section>
        </header>
    )
}