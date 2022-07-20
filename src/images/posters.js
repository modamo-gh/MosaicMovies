import atlantisPoster from "./2001-atlantis_the_lost_empire-2-1.jpg";
import herPoster from "./her-poster-joaquin-phoenix-1.jpg";
import intoTheWildPoster from "./into-the-wild-poster-1.jpg";
import meetTheRobinsonsPoster from "./2007-meet_the_robinsons-1-1.jpg";
import riseOfThePlanetOfTheApesPoster from "./rise-of-the-apes-uk-poster-1.jpg";

const posters = {
	atlantis: {
		imageSource: atlantisPoster,
		runtime: "1hr 35m",
		title: "Atlantis: The Lost Empire",
	},
	her: {
		imageSource: herPoster,
		runtime: "2hr 6m",
		title: "Her",
	},
	intoTheWild: {
		imageSource: intoTheWildPoster,
		runtime: "2hr 28m",
		title: "Into the Wild",
	},
	meetTheRobinsons: {
		imageSource: meetTheRobinsonsPoster,
		runtime: "1hr 35m",
		title: "Meet the Robinsons",
	},
	riseOfThePlanetOfTheApes: {
		imageSource: riseOfThePlanetOfTheApesPoster,
		runtime: "1hr 45m",
		title: "Rise of the Planet of the Apes"
	}
};

export default posters;