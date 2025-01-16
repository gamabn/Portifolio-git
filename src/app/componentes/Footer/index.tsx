import styles from './page.module.scss'
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    

    return(
        <footer className={styles.container}>
            <div >
               <ul>
                <li>
                <a
                href="https://github.com/gamabn"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              ><FaGithub size={28} color='#fff'/></a>

                </li>
                <li>
                <a
                href="https://www.facebook.com/flavio.gama.31"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"><FaFacebook size={28} color='#fff'/></a>
                </li>

               
                <li>
                <a
                href="https://www.linkedin.com/in/fl%C3%A1vio-gama-955474262/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"><FaLinkedin size={28} color='#fff'/></a>
                </li>

            

               </ul>
            </div>
            <div className={styles.footerT}> 
                <p><span>Contato-</span>lanbinhohouse@gmail.com</p>
                <span>@{year}</span>

            </div>
          

        </footer>

    )
}

//www.linkedin.com/in/flávio-gama-955474262
//'https://www.facebook.com/flavio.gama.31