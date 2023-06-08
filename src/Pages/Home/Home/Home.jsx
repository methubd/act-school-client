import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhyActSchool from "../WhyActSchool/WhyActSchool";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ACT SCHOOL | Home</title>
            </Helmet>
            
            <Banner></Banner>
            
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <WhyActSchool></WhyActSchool>
        </div>
    );
};

export default Home;