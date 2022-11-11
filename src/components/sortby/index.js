import style from './style.module.css'

const SortBy = () => {
    return (
        <div>
            <label>Sort by</label>
            <select>
                <option>price</option>
                <option>rate</option>
                <option>name</option>
            </select>
        </div>
    )
}

export default SortBy