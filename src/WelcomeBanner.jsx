import styles from "./styles/WelcomeBanner.module.css";

const WelcomeBanner = () => {
	return (
		<div className={styles.welcomeBanner}>
			<h1>WELCOME TO MOSAIC MOVIES</h1>
			<h3>See the world through a different lens.</h3>
		</div>
	);
};

export default WelcomeBanner;
