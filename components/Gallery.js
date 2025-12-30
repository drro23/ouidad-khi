import ImageGallery from 'react-image-gallery';
import Layout from "./layout";
import styles from "../styles/gallery.module.css";

const lifeInBlueLength = 18;
const lifeInBlue = [];
const othersLength = 10;
const others = [];

for (let i = 0; i < lifeInBlueLength; i++) {
    lifeInBlue.push(
        {
            original: `/gallery/lifeInBlue/${i}.JPG`,
            thumbnail: `/gallery/lifeInBlue/${i}.JPG`,
        }
    )
}

for (let i = 0; i < othersLength; i++) {
    others.push({
        original: `/gallery/others/${i}.JPG`,
        thumbnail: `/gallery/others/${i}.JPG`
    })
}

const Gallery = () => {
    return (
        <Layout>
            <div className="container">
                <h1 className={styles.title}>La vie en bleu</h1>
                <p className={styles.description}>
                    Dans <em>La vie en bleu</em>, l&apos;émotion circule comme une lumière subtile, changeant de forme selon celui qui la regarde.<br/>
                    Chaque toile naît d&apos;une sensibilité de nuances et d&apos;un désir d&apos;offrir un espace où la perception peut se déployer librement.<br/><br/>

                    Je choisis de signer mes œuvres à l&apos;envers pour qu&apos;elles échappent à toute attente de reconnaissance.<br/>
                    Cette inversion est un geste volontaire.<br/>
                    Elle permet à chaque peinture d&apos;exister par elle-même, sans cadre autre que celui que votre regard décidera de poser.<br/>
                    Ce renversement ouvre l&apos;œuvre et la rend vivante dans son mouvement abstrait.
                </p>
                <div className={styles.gallery}>
                    <ImageGallery items={lifeInBlue}/>
                </div>

                <h2 className={styles.title}>Exposition 2022</h2>
                <div className={styles.gallery}>
                    <ImageGallery items={others}/>
                </div>
            </div>
        </Layout>
    )
}

export default Gallery;

