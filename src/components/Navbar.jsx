import avatar from "../images/download20210405212609.png";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<ul className={styles.links}>
					<a href="#">
						Home
					</a>
					<a href="#">
						Now Showing
					</a>
					<a href="#">
						Coming Soon
					</a>
					<a href="#">
						Concessions
					</a>
					<a href="#">
						Contact Us
					</a>
					<img src={avatar} className={styles.avatar} />
				</ul>
			</div>

		</nav>
	);
}

export default Navbar;