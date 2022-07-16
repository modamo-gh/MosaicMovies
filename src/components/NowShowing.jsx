import posters from "../images/posters.js"
import styles from "../styles/NowShowing.module.css";

const NowShowing = () => {
    return (
        <div className={styles.nowShowing}>
            <img src={posters.her} />
            <img src={posters.meetTheRobinsons} />
            <img src={posters.intoTheWild} />
            <img src={posters.atlantis} />
            <img src={posters.riseOfThePlanetOfTheApesPoster} />
        </div>
    )
}

export default NowShowing;