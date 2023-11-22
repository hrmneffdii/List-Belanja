import shoppingCart from '../../assets/shopping-cart.svg'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
    <nav className={styles.nav}>
        <img className={styles.navIcon} src={shoppingCart} alt="shopping-cart" />
        <h2 className={styles.navTitle}>Keranjang Belanja</h2>
    </nav>
    )
}

export default NavBar