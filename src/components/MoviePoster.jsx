import styles from "../styles/MoviePoster.module.css";

const MoviePoster = (props) => {
	return (
		<div className={styles.moviePoster}>
			<img src={props.imageSource} className={styles.image} />
		</div>
	);
};

export default MoviePoster;
