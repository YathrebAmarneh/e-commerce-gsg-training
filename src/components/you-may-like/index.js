import style from "./style.module.css"
import MainTitle from "../shared-components/main-title"

const YouMayLike = () => {
    const images = [
        "57b25a954dd33a3587278bc87740a355f0c5bf8e",
        "88c6c728579097bb456b8880636063dd6d65bd1f",
        "53f89d0d982a9979caf057f322b2751f7c81f661",
        "e7f01adacb21c7ff8202323857b9f33998d4d934"
    ]
    return (
        <div className={style.container}>
            <MainTitle content="You May Also Like" />
            <div className={style.images}>
                {images.map(
                    (src) => { return (<img src={`assets/images/${src}.png`} />) }
                )}
            </div>
        </div>
    )
}

export default YouMayLike