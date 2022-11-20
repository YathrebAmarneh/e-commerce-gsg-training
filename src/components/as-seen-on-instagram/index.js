import style from "./style.module.css"
import MainTitle from "../shared-components/main-title"

const AsSeenOnInstagram = () => {
    const images = [
        "bd561c2928429cbbcc3ae1c05f4b3138d9c46ece",
        "2adfd97352ef04d94e3076312fb0685a1b75e4a3",
        "00e6e77e6b9fa4e24e5a54ab9a474af83255439c",
        "1523bc6c3cf207c9a5d906e9a55ac79db27d0716"
    ]
    return (
        <div className={style.container}>
            <MainTitle content="As Seen On Instagram" />
            <div className={style.images}>
                {images.map(
                    (src) => { return (<img src={`assets/images/${src}.png`} />) }
                )}
            </div>
        </div>
    )
}

export default AsSeenOnInstagram