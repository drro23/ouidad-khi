import ImageGallery from 'react-image-gallery';
import Layout from "../../components/layout";

import styles from "../../styles/gallery.module.css";

const lifeInBlueLength = 15;
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
                    Chacun est libre de ressentir et d’interpréter mon travail.<br/>
                    La vie en bleu est une série à découvrir.<br/>
                    <br/>
                    <br/>
                    La sensibilité, la perception est différente dans le regard des uns et des autres. <br/>
                    La vision varie et laisse une liberté t’interprétation.<br/>
                    <br/>
                    Mes toiles sont des photos abstraites de mon objectif intérieur imaginaire.<br/>
                    Elles se sont crées les unes après les autres dans le silence de mes nuits blanches.<br/>
                    <br/>
                    C’est une volonté que de signer à l’envers de mes toiles.<br/>
                    Je laisse ainsi mes peintures "être"<br/>
                    Je les veux libre afin qu’elles vous transportent dans les moindres recoins.<br/>
                    <br/>
                    Essayez de vous défaire des codes, entrez à l’intérieur de mon univers vous êtes invités, prenez un billet pour ce voyage je vous accompagne en galaxie bleu.<br/>

                    Ouidad-Khi
                </p>
                <div className={styles.gallery}>
                    <ImageGallery items={lifeInBlue} />
                </div>

                <h2 className={styles.title}>Autres réalisations artistiques</h2>
                <div className={styles.gallery}>
                    <ImageGallery items={others} />
                </div>
            </div>
        </Layout>
    )
}

export default Gallery;
