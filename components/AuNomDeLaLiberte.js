import Layout from "./layout";
import Image from "next/image";
import styles from '../styles/auNomDeLaLiberte.module.css';

const AuNomDeLaLiberte = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Au nom de la liberté</h1>
                
                <div className={styles.imageContainer}>
                    <Image 
                        src="/gallery/colombe/colombe.JPG"
                        alt="Au nom de la liberté - Œuvre de Ouidad-Khi"
                        width={800}
                        height={600}
                        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                <div className={styles.textContainer}>
                    <p>
                        Ouidad-Khi est une artiste et autrice indépendante dont l&apos;œuvre &quot;Au nom de la liberté&quot;, alliant poésie et peinture, est exposée en collection permanente à la Maison du Citoyen et de la Vie Associative (MDCVA) de Fontenay-sous-Bois.<br/>
                        Cette institution municipale, soutient et dynamise la vie associative local en favorisant les échanges culturels.
                    </p>
                    <p>
                        L&apos;exposition permanente de son œuvre, est d&apos;utilité publique et fait partie intégrante du patrimoine culturel de Fontenay-sous-Bois depuis avril 2022.<br/>
                        Elle est présentée aux côtés d&apos;œuvres d&apos;artistes renommés tels que Chagall, Kijno et Subira-Puig, contribuant ainsi à enrichir l&apos;offre culturelle de la ville.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default AuNomDeLaLiberte;

