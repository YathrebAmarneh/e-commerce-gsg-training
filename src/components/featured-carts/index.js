import FeaturedCart from "../featured-cart";
import { useMemo } from "react";
import Btn from "../shared-components/button";
import style from "./style.module.css";
import { useState } from 'react'

const FeaturedCarts = ({ data, className, categoryName, value }) => {
    const [classNname, setClassNname] = useState('featuredImages')

    function getFilteredList() {

        if (!categoryName || categoryName === 'reset') {

            return data?.products
        }

        return data?.products.filter((product) => product.category === categoryName);
    }

    var filteredList = useMemo(getFilteredList, [categoryName]);

    const getSortedList = () => {

        if (value === 'rating') {
            return data?.products.sort((p1, p2) => (p1.rating < p2.rating) ? 1 : (p1.rating > p2.rating) ? -1 : 0)
        }

        if (value === 'price') {
            return data?.products.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
        }

        if (value === 'name') {
            return data?.products.sort((a, b) => a.title.localeCompare(b.title))
        }
    }
    var sortedList = useMemo(getSortedList, [data.products, value]);
    console.log('sortedList', sortedList)
    return (
        <div className={`${style[className]}`}>
            <div className={`${style[classNname]}`}>
                {sortedList?.map((productItem, index) => {
                    return (
                        <>
                            <FeaturedCart key={index} {...productItem} />
                        </>
                    );
                })}
            </div>
            <div className={style.loading} onClick={() => setClassNname('featuredImagesLoading')}>
                <img alt="loading" src='assets/images/loading.png' />
                <Btn buttonContent='LOADING' className='loadingBtn' />
            </div>

        </div>
    )
}

export default FeaturedCarts