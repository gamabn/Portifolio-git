"use client"
import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";
import styles from './page.module.scss'

function Type() {
  return (

    <div className={styles.type}>
      <span className={styles.typeSpan}>
        <Typewriter
          words={['Desenvolvedor de software', 'Freelancher', 'Html','Css','Javascript','Nodejs','React','React-Native','Nextjs']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        //autoStart={true}
        //onType={handleType}
        />
      </span>
    </div>
  );
}

export default Type;