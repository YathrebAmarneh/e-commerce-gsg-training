import AboutMatter from "../components/about-matter";
import AsSoonOn from "../components/as-soon-on";
import Explore from "../components/explore";
import Featured from "../components/featured";
import ImageSlider from "../components/image-slider";
import RecommendedVideos from "../components/recommended-videos";
import Shop from "../components/shop";

const HomePage = ({ slides, data }) => {
  return (
    <div>
      <ImageSlider slides={slides} />
      <Featured data={data} />
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <AsSoonOn />
    </div>
  );
};

export default HomePage;
