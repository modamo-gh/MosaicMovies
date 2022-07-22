import avatar from "../images/download20210405212609.png";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
    return (
		<nav className={styles.navbar}>
			<ul className={styles.links}>
				<a href="#">
					<li>Home</li>
				</a>
				<a href="#">
					<li>Now Showing</li>
				</a>
				<a href="#">
					<li>Coming Soon</li>
				</a>
				<a href="#">
					<li>Concessions</li>
				</a>
				<a href="#">
					<li>Contact Us</li>
				</a>
				<a href="#">
					<img src={avatar} className={styles.avatar} />
				</a>
			</ul>
		</nav>
	);
}

export default Navbar;