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
                <h1 className={styles.title}>Life in blue / La vie en bleu</h1>
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
