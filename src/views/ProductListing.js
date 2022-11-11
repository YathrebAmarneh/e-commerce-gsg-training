import AboutMatter from "../components/about-matter"
import AsSoonOn from "../components/as-soon-on"
import Banner from "../components/banner"
import Explore from "../components/explore"
import Featured from "../components/featured"
import Footer from "../components/footer"
import ImageSlider from "../components/image-slider"
import Navbar from "../components/navbar"
import RecommendedVideos from "../components/recommended-videos"
import Sale from "../components/sale"
import Shop from "../components/shop"
import SortBy from "../components/sortby"

const ProductListing = ({ slides, data }) => {
    return (
        <div>
            <Sale />
            <Navbar />
            <Banner />
            <SortBy />
            {/* <Featured data={data} /> */}
            <Footer />
        </div>
    )
}

export default ProductListing