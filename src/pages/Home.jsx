import { Container } from "react-bootstrap"
import NavigationBar from "../components/ui/NavigationBar"
import HomeCarousel from "../components/ui/HomeCarousel"
import HorizontalScrollGallery from "../components/ui/HorizontalScrollGallery"
import SocialJusticeHeader from "../components/ui/SocialJusticeHeader"
import PrioritiesSection from "../components/ui/PrioritiesSection"

const Home=()=>{
return(
    <Container fluid className="px-0 page">
        <NavigationBar/>
        <HomeCarousel/>
        <HorizontalScrollGallery/>
        <SocialJusticeHeader/>
        <PrioritiesSection/>
    </Container>
)
}
export default Home