
import Bshoe from "../assets/Imgs/Bshoe.jpg"

const Header = () => {
    return (
        <main>
            <div className="container header__container">
                {/* <h1>Good</h1> */}
                {/* {SwiperJs for slides} */}
                <img className="header__img" src={Bshoe} alt="shoe" />
            </div>
        </main>
    )
}

export default Header