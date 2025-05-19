  "use client";

  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/autoplay'
  import 'swiper/css/navigation'
  import Image from "next/image";
  import styles from './MySlider.module.scss'
  
  

 // interface Props {
  //  you: any
 // }
  
        // Leia os arquivos da pasta
    const images = [
  { src: "/assets/Financas-App.GIF", alt: 'Foto 1' },
  { src: "/assets/Games-App.png", alt: 'Foto 2' },
  { src: "/assets/Pizzaria.jpg", alt: 'Foto 3' },
  { src: "/assets/WhatsApp-Web-Clone.GIF", alt: 'Foto 4' },
  { src: "/assets/Site-de-filme-react.png", alt: 'Foto 5' },
  {src: "/assets/Repositorio-github.png", alt: 'Foto 6'},
   {src: "/assets/filabarber8.JPG", alt: 'Foto 6'}
 
]

  const MySlider = () => {
    return(     
        <div className={styles.Container}>
         <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
          <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={350}
              style={{ objectFit: 'cover' }}
             
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

    )
}
export  default MySlider;
//www.linkedin.com/in/flávio-gama-955474262
//'https://www.facebook.com/flavio.gama.31