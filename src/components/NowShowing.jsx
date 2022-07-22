import MoviePoster from "./MoviePoster.jsx";
import nowShowingStyles from "../styles/NowShowing.module.css";
import posters from "../images/posters.js";

const NowShowing = () => {
	return (
		<div className={nowShowingStyles.nowShowing}>
			{posters.map((poster) => {
				return (
					<MoviePoster
						imageSource={poster.imageSource}
						title={poster.title}
						runtime={poster.runtime}
						key={poster.title}
					/>
				);
			})}
		</div>
	);
};

export default NowShowing;
