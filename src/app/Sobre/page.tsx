import Image from "next/image";
import  potifolioNext from "../../../public/assets/portifolio.jpg";
import tecnologias from "../../../public/assets/tecnologias.jpg"
import styles from "./Sobre.module.scss";
import Footer from "../componentes/Footer";

export default function About() {
  return (

    <div className={styles.container}>
      <div className={styles.profile}>
        <Image src={ potifolioNext} alt="Profile Picture" className={styles.profilePic} /> 
        <div className={styles.text}>
          <h1>Sobre Mim</h1>
          <p>Olá! Eu sou Flávio Gama Santos, um desenvolvedor apaixonado por tecnologia e design.</p>
          <p>Atualmente estou estudando Ciências da Computação e trabalhando com tecnologias modernas para criar aplicações incríveis.</p>
        </div>
      </div>
      <div className={styles.skills}>
        <h2>Principais Tecnologias</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className={styles.ImgFotos}>
        <Image
        src={tecnologias}
         alt="tecnologia"
        height={350}
        width={350}
       
        />
      </div>

     
    </div>
    
  );
}
