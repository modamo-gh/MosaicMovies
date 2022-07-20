import MoviePoster from "./MoviePoster.jsx";
import nowShowingStyles from "../styles/NowShowing.module.css";
import posters from "../images/posters.js";
const NowShowing = () => {
	return (
		<div className={nowShowingStyles.nowShowing}>
			<MoviePoster
				imageSource={posters.her.imageSource}
				title={posters.her.title}
				runtime={posters.her.runtime}
			/>
			<MoviePoster
				imageSource={posters.meetTheRobinsons.imageSource}
				title={posters.meetTheRobinsons.title}
				runtime={posters.meetTheRobinsons.runtime}
			/>
			<MoviePoster
				imageSource={posters.intoTheWild.imageSource}
				title={posters.intoTheWild.title}
				runtime={posters.intoTheWild.runtime}
			/>
			<MoviePoster
				imageSource={posters.atlantis.imageSource}
				title={posters.atlantis.title}
				runtime={posters.atlantis.runtime}
			/>
			<MoviePoster
				imageSource={posters.riseOfThePlanetOfTheApes.imageSource}
				title={posters.riseOfThePlanetOfTheApes.title}
				runtime={posters.riseOfThePlanetOfTheApes.runtime}
			/>
		</div>
	);
};

export default NowShowing;
