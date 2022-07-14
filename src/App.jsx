import Navbar from "./Navbar.jsx";
import NowShowing from "./NowShowing";
import WelcomeBanner from "./WelcomeBanner.jsx";
const App = () => {
    return (
		<>
			<Navbar />
            <WelcomeBanner />
            <NowShowing />
		</>
	);
}

export default App;