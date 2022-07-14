import atlantisPoster from "../images/2001-atlantis_the_lost_empire-2-1.jpg";
import herPoster from "../images/her-poster-joaquin-phoenix-1.jpg";
import intoTheWildPoster from "../images/into-the-wild-poster-1.jpg";
import meetTheRobinsonsPoster from "../images/2007-meet_the_robinsons-1-1.jpg";
import riseOfThePlanetOfTheApesPoster from "../images/rise-of-the-apes-uk-poster-1.jpg"
import styles from "../styles/NowShowing.module.css";

const NowShowing = () => {
    return (
        <div className={styles.nowShowing}>
            <img src={herPoster} />
            <img src={meetTheRobinsonsPoster} />
            <img src={intoTheWildPoster} />
            <img src={atlantisPoster} />
            <img src={riseOfThePlanetOfTheApesPoster} />
        </div>
    )
}

export default NowShowing;