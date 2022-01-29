import Layout from "../../components/layout";

import styles from '../../styles/presentation.module.css';

const Presentation = () => {
    return (
        <Layout>
            <div className="container">
                <h1 className={styles.presentationTitle}>Présentation</h1>
                <p className={styles.description}>
                    La peinture et la poésie ont toujours été mes domaines d’épanouissement<br/>
                    artistique depuis mon adolescence.<br/><br/>

                    J’ai traversé un temps de mon existence en ayant fait d’autres choix.<br/>
                    Et il arrive un jour où des épreuves donnent naissance à des réflexions profondes qui se sont imposées à
                    moi en bouleversant le cours de ma vie.<br/><br/>

                    J’ai retrouvé le chemin de la peinture et de l’écriture comme moyen d’expression.<br/>
                    Je suis retournée instinctivement vers ce qui ne m’a jamais quitté, enfoui à l’intérieur, ne réclamant
                    qu’à s’exprimer et extérioriser cette partie de moi.<br/>
                    Ce cheminement est le reflet d’un parcours silencieux où le chemin fut sincère à chaque instant, où le
                    temps trop court ou trop long a fini par avoir raison et me mener à vous.<br/><br />

                    L’art est un trésor enfuit en nous, il est le reflet de notre personnalité indéfinissable.
                    Les matières, les couleurs sont mes récits poétiques<br/><br/> je vous invite à vous défaire et venir découvrir
                    mon univers.<br /><br />

                    Ouidad-Khi
                </p>
            </div>
        </Layout>
    )
}

export default Presentation;
