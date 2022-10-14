import SimpleSlider from "./Slider"
import Footer from "../Footer/Footer"
import Right from "./Right"
import Banner from "./Banner"
import PolicyHome from "./PolicyHome"

function Home() {
    return (
        <div>
            <Right />
            <SimpleSlider />
            <Banner />
            <PolicyHome />
            <Footer />
        </div>
    )

}
export default Home