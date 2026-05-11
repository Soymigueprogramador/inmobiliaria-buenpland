import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../public/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Buenpland" />
      </div>

      <ul className={`${styles.links} ${open ? styles.active : ""}`}>
        <li>Inicio</li>
        <li>Comprar</li>
        <li>Alquilar</li>
        <li>Contacto</li>
      </ul>

      <div className={styles.actions}>
        <button>Publicar</button>
      </div>

      <div
        className={styles.menuToggle}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </nav>
  );
}