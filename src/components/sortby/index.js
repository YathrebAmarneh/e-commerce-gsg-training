import style from './style.module.css'

const SortBy = ({ handleOnChange, sortByValue }) => {
    console.log('sortByValue', sortByValue)
    return (
        <div className={style.container}>
            <div className={style.filterationType}>{sortByValue ? (sortByValue === 'reset' ? '' : sortByValue) : 'category Name'}</div>
            <div className={style.sort}>
                <label>Sort by</label>
                <select onChange={(e) => handleOnChange(e.target.value)}>
                    <option>price</option>
                    <option>rating</option>
                    <option>name</option>
                </select>
            </div>

        </div>
    )
}

export default SortBy