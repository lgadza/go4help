import { Container } from "react-bootstrap"
import NavigationBar from "../components/ui/NavigationBar"
import HomeCarousel from "../components/ui/HomeCarousel"

const Home=()=>{
return(
    <Container fluid className="px-0 page">
        <NavigationBar/>
        <HomeCarousel/>
    </Container>
)
}
export default Home