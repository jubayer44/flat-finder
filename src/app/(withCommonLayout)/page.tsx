import FlatListSection from "@/components/UI/HomePage/FlatListSection/FlatListSection";
import GetStarted from "@/components/UI/HomePage/GetStartSection/GetStartSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import PopularLocation from "@/components/UI/HomePage/PopularLocation/PopularLocation";

const HomePage = async () => {

    return (
        <>
            <HeroSection />
            <FlatListSection/>
            <PopularLocation/>
            <GetStarted/>
        </>
    );
};

export default HomePage;