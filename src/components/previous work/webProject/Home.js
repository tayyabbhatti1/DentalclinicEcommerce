import { Carousel } from 'bootstrap';
import Footer from '../webProject/Footer';
import NavbarFitness from '../webProject/navbarFitness';
import Programs from '../webProject/Programs';
import HomeCarousel from './HomeCarousel';


const Home = () => {
    return (
        <div>
        <NavbarFitness/>
        <HomeCarousel/>
        <Programs />
        <Footer />

        </div>
        
    )
};

export default Home;