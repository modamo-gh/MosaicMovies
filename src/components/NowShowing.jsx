import MoviePoster from "./MoviePoster.jsx";
import nowShowingStyles from "../styles/NowShowing.module.css";
import posters from "../images/posters.js";
const NowShowing = () => {
	return (
		<div className={nowShowingStyles.nowShowing}>
			<MoviePoster imageSource={posters.her} />
			<MoviePoster imageSource={posters.meetTheRobinsons} />
			<MoviePoster imageSource={posters.intoTheWild} />
			<MoviePoster imageSource={posters.atlantis} />
			<MoviePoster imageSource={posters.riseOfThePlanetOfTheApes} />
		</div>
	);
};

export default NowShowing;
