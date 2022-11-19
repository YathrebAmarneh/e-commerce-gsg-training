import style from './style.module.css'

const Banner = ({ sortByValue }) => {
    return (
        <div className={style.container}>
            <div className={style.desc}>
                <h1 className={style.title}>{`${sortByValue ? (sortByValue === 'reset' ? '' : sortByValue) : 'Apparels'}`}</h1>
                <p className='description'>
                    White Gold began gaining popularity in the early 1900’s as an alternative to platinum.
                </p>
            </div>

            <img alt='banner' className={style.image} src="assets/images/8402c0f4f134ac3da6567d064219651be69fb559.png" />
        </div>
    )
}

export default Banner