import Navbar from "./components/Navbar.jsx";
import NowShowing from "./components/NowShowing";
import WelcomeBanner from "./components/WelcomeBanner.jsx";
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