import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/nota">Registrar Notas</Link>
            <Link to="/lista">Lista de Notas</Link>
            <Link to="/masinfo">Mas Informacion</Link>
        </nav>
    );
}
export default Navbar