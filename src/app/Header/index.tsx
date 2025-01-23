
"use client"
import React,{useEffect, useState} from 'react'
import styles from "./page.module.scss";
//import Projetos from "../Projetos/page";

import Link from "next/link";

export function Header() {
    const [top,setTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const scrolHandler = (()=>{
        window.scrollY > 10 ? setTop(false) : setTop(true)
    })
     
    useEffect(()=>{
        window.addEventListener('scroll', scrolHandler);

        return ()=> window.removeEventListener('scroll', scrolHandler)

    },[]);

   // const toggleMenu = () => {
       // setMenuOpen((prev) => !prev);
     // };
     function toggleMenu(){
      setMenuOpen((prev)=> !prev)
     }

    return (
        <>
      <header className={`${styles.header} ${top ? styles.background : styles.fixed}`}>
        <section className={styles.content}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            ☰
          </button>
          <nav>
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

      {/* Menu Lateral */}
      <aside className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        <nav onClick={toggleMenu}>
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
      </aside>

      {/* Background overlay quando o menu está aberto */}
      {menuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </>
        
    )
}