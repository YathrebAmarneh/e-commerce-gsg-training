import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'
import ProductListing from './views/ProductListing'
import Layout from './Layout'
// import axios from "axios";
// import { useState, useEffect } from "react";
import ProductDetailsPage from './views/ProductDetailsPage';
import useData from './hooks/useData'

const slides = [
    { url: "c97458358789c033061390d08b4fdcf4e98893b0.png" },
    { url: "066bc105c9c7c03204c1c306029ffa7dcc6a9203.png" },
    { url: "3af295aa3c1881b822ecfea58c707e38b4931794.png" },
];


const Router = () => {
    const data = useData('https://dummyjson.com/products')
    console.log('data from router', data)
    // const [data, setData] = useState([]);

    // const [isFetch, setIsFetch] = useState(true);

    // const getData = async () => {
    //     setIsFetch(true);
    //     const response = await axios.get("https://dummyjson.com/products");
    //     setData(response.data);
    //     setIsFetch(false);
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    // if (isFetch) {
    //     return "Data is Loading ...";
    // }
    // console.log('data from router', data)

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage data={data} slides={slides} />} />
                    <Route path="ProductListing" element={<ProductListing data={data} />} />
                    <Route path="ProductDetails" element={<ProductDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router