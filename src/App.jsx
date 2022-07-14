import Navbar from "./Navbar.jsx";
import NowShowing from "./NowShowing";
import WelcomeBanner from "./WelcomeBanner.jsx";
import styles from "./styles/App.module.css"

const App = () => {
    return (
		<div className={styles.app}>
			<Navbar />
            <WelcomeBanner />
            <NowShowing />
		</div>
	);
}

export default App;