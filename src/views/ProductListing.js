import Banner from "../components/banner"
import ProductsSorting from "../components/products-sorting"
import SortBy from "../components/sortby"
import { useState } from 'react'
const ProductListing = ({ data }) => {
    const [value, setValue] = useState()

    const [sortByValue, setSortByValue] = useState()

    const handleOnChange = (selectedValue) => {
        setValue(selectedValue)
        console.log('selectedValue', selectedValue)
    }
    const handleFilteringValue = (value) => {
        setSortByValue(value)
    }
    return (
        <div>
            <Banner sortByValue={sortByValue} />
            <SortBy sortByValue={sortByValue} handleOnChange={handleOnChange} />
            <ProductsSorting handleFilteringValue={handleFilteringValue} value={value} data={data} />
        </div>
    )
}

export default ProductListing