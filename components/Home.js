import Link from "next/link";
import Image from "next/image";
import Layout from "./layout";
import styles from '../styles/home.module.css';

const Home = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Artiste-peintre</h1>
                <div className={styles.homePainting}>
                    <Image width={640} height={480} src='/home.jpg' alt="artwork" style={{ width: '100%', height: 'auto', display: 'block' }} priority />
                </div>
                <Link href="/gallery" className={styles.galleryLink}>
                    Accès à la galerie
                </Link>
            </div>
        </Layout>
    );
}

export default Home;

