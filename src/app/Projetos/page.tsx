
async function getData() {
    const response = await fetch("https://api.github.com/users/gamabn/repos",{next: {revalidate: 60}})
    return response.json()
  }
  
  interface HomeProps {
    name: string;
    id: number
    description: string;
    full_name: string;
    html_url: string;
   image_url: string
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      url: string;
    
  
    }
  }

  import styles from './page.module.scss'
  import Image from 'next/image';
  import fs from 'fs';
  import path from 'path';
  
  
  export default async function Projetos() {
  
  
    const data: HomeProps[] = await getData();
    console.log(data)
   
    const imagesDirectory = path.join(process.cwd(), 'public/assets')

      // Leia os arquivos da pasta
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map((filename) =>  {
    const name = path.basename(filename, path.extname(filename)); // Retira a extensão
    return {
      src: `assets/${filename}`,
      name: name
    };
  });
    console.log('A',filenames)
  
    return (
      <main className={styles.container}>
        <h1>Meus repositorios</h1>
        
 
       
        {data.map((item) => (
          <div key={item.id} className={styles.itemRepos}>
           
  
            <p>{item.name}</p>
            <div className={styles.imageList}>
            <img src={item.owner.avatar_url} alt="imagem github"/>
            <a href={item.html_url}> <span>{item.owner.url}</span></a>
            </div>
           
           
  
           

            {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
         
         {image.name === item.name &&
        
          <img  src={image.src} alt={`Imagem ${image.name}`} /> }
          
         </div>
         
      ))}

            <span>{item.description}</span>

  
          </div>
  
        ))}
      </main>
    )
  }