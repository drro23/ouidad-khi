import Layout from "./layout";
import Image from "next/image";
import styles from '../styles/contact.module.css';

const Contact = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Restons en contact</h1>
                <p className={styles.message}>
                    Pour suivre mes dernières créations, découvrir les coulisses de mon atelier et échanger avec moi, rejoignez-moi sur Instagram.
                </p>
                <a 
                    href="https://www.instagram.com/ouidadkhi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                >
                    <Image 
                        src="/gallery/instagram.webp" 
                        alt="Suivez Ouidad Khi sur Instagram" 
                        width={100} 
                        height={100}
                        className={styles.instagramLogo}
                    />
                    <span className={styles.ctaText}>Suivez-moi sur Instagram</span>
                </a>
            </div>
        </Layout>
    )
}

export default Contact;
