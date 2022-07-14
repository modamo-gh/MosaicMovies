import styles from "../styles/WelcomeBanner.module.css";

const WelcomeBanner = () => {
	return (
		<div className={styles.welcomeBanner}>
			<h1 className={styles.header}>WELCOME TO MOSAIC MOVIES</h1>
			<h3 className={styles.subHeader}>See the world through a different lens.</h3>
		</div>
	);
};

export default WelcomeBanner;
