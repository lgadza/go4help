import { Container } from "react-bootstrap"
import NavigationBar from "../components/ui/NavigationBar"
import HomeCarousel from "../components/ui/HomeCarousel"
import HorizontalScrollGallery from "../components/ui/HorizontalScrollGallery"
import SocialJusticeHeader from "../components/ui/SocialJusticeHeader"

const Home=()=>{
return(
    <Container fluid className="px-0 page">
        <NavigationBar/>
        <HomeCarousel/>
        <HorizontalScrollGallery/>
        <SocialJusticeHeader/>
    </Container>
)
}
export default Home