import Layout from "./layout";

import styles from '../styles/presentation.module.css';

const Presentation = () => {
    return (
        <Layout>
            <div className="container">
                <h1 className={styles.presentationTitle}>Présentation</h1>
                <p className={styles.description}>
                    L&apos;artiste, Ouidad-Khi cherche à éveiller les consciences à travers son art multidimensionnel.<br/><br/>
                    En fusionnant la poésie avec la peinture, elle crée un dialogue puissant entre les formes et les mots, offrant une réflexion sur les enjeux contemporains tout en inscrivant son œuvre dans l&apos;histoire de l&apos;art.<br/><br/>
                    Sa présence au sein de la MDCVA de Fontenay-sous-Bois, aux côtés de maîtres comme Chagall, témoigne de la reconnaissance croissante de son impact sur le paysage culturel.<br/><br/>
                    Son engagement, symbolisé par son travail &quot;Au nom de la liberté&quot;, incarne son rôle essentiel en tant que voix d&apos;artiste, ancrée dans le patrimoine culturel et humaniste de la ville.
                </p>
            </div>
        </Layout>
    )
}

export default Presentation;

