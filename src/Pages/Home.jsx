
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Blog from '../components/Blog'
import BestSeller from '../components/BestSeller'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Categories />
            <Blog />
            <BestSeller />
        </div>
    )
}

export default Home