import Image from "next/image";
import Type from "./componentes/Type";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import MySlider from "./componentes/Slider";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.type}>
          <h2 className={styles.text}>
            Eu sou Flavio Gama <br />
            Desenvolvedor Full Stack
          </h2>
          <Type />
        </div>
        <div className={styles.ContainerImg}>
        <Image
          className={styles.image} 
          src="/assets/portifolio.jpg" // Caminho relativo à pasta public
          width={350}
          height={350}
          alt="Picture of the author"
        />
        </div>
      </div>
      <section className={styles.boardSessao}>
        <div className={styles.boardText}>
          <p>
            Sou um apaixonado por tecnologia. Estudante de ciências da
            tecnologia. Na página de projetos estou usando uma API do GitHub, lá
            vão estar alguns projetos meus.
          </p>
        </div>
        <div className={styles.boardTecn}>
          <p>Principais tecnologias que uso no momento</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
          </ul>
        </div>
      </section>
      <div>
          <MySlider /> 
      </div>
    
    </div>
  );
}
