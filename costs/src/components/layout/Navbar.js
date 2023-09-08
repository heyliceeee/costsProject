import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

import Container from './Container';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs"/>
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projects</Link></li>
                    {/* <li className={styles.item}><Link to="/company">Company</Link></li>
                    <li className={styles.item}><Link to="/contactus">Contact Us</Link></li> */}
                    {/* <li className={styles.item}><Link to="/newproject">New Project</Link></li> */}
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;