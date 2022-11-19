import Btn from '../shared-components/button'
import style from './style.module.css'
const Filteration = ({ handleOnClick }) => {
    const categories = [
        'smartphones',
        'laptops',
        'fragrances',
        'skincare',
        'groceries',
        'home-decoration']
    return (
        <div className={style.container}>
            <div className={style.filtersReset}>
                <span className={style.filters}>FILTERS</span>
                <Btn buttonContent='reset' className='resetBtn' onClick={(e) => { handleOnClick('reset') }} />
            </div>

            <ul>
                {categories.map(((category, index) => { return (<li key={index} onClick={(e) => { handleOnClick(category) }}>{category}</li>) }))}
            </ul>

        </div>
    )
}

export default Filteration