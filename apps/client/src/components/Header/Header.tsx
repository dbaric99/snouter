import { Logo } from "../Logo";
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.wrapper}>
        <Logo/>
        <span>Snouter</span>        
    </div>
  )
}

export {Header}