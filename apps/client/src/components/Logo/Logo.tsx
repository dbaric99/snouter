import logo from '../../assets/logo.svg';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div>
        <img src={logo} className={styles.logoImage} />
    </div>
  )
}

export {Logo}