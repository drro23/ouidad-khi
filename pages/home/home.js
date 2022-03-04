import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

import styles from '../../styles/home.module.css'

const Home = () => {
    return (
        <Layout>
            <div className="container">
                <h1 className={styles.title}>Artiste-peintre</h1>
                <div className={styles.homePainting}>
                    <Image layout="intrinsic" width={640} height={480} src='/home.jpg' alt="artwork"/>
                </div>
                <Link href="/gallery">
                    <button className={styles.galleryLink}>
                        Accéder à la galerie
                    </button>
                </Link>
            </div>
        </Layout>
    );
}

export default Home;
