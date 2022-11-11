import AboutMatter from "../components/about-matter"
import AsSoonOn from "../components/as-soon-on"
import Explore from "../components/explore"
import Featured from "../components/featured"
import Footer from "../components/footer"
import ImageSlider from "../components/image-slider"
import Navbar from "../components/navbar"
import RecommendedVideos from "../components/recommended-videos"
import Sale from "../components/sale"
import Shop from "../components/shop"

const HomePage = ({ slides, data }) => {
    return (
        <div>
            <Sale />
            <Navbar />
            <ImageSlider slides={slides} />
            <Featured data={data} />
            <AboutMatter />
            <Explore />
            <Shop />
            <RecommendedVideos />
            <AsSoonOn />
            <Footer />
        </div>
    )
}

export default HomePage