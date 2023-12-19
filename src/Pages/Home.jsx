
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Blog from '../components/Blog'
import BestSeller from '../components/BestSeller'
import Offer from '../components/Offer'
import Footer from '../components/Footer'



const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Categories />
            <Blog />
            <BestSeller />
            <Offer />
            <Footer />
        </div>
    )
}

export default Home