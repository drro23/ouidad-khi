import Navigation from './navigation'
import Footer from './footer'

import styles from '../styles/layout.module.css'

const Layout = ({children}) => {
    return (<>
        <Navigation/>
        <main className="fadeIn">
            {children}
        </main>
        {/*<Footer/>*/}
    </>);
}

export default Layout;
