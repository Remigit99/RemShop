import { LiaShoppingBagSolid } from "react-icons/lia"
import { CiSearch } from "react-icons/ci"
import { BsPersonCircle } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"

import { useSelector } from "react-redux"

const Navbar = () => {

    const { numberOfItem } = useSelector(state => state.cart)

    return (
        <>
            <nav>
                <div className="container nav__container">

                    <div className="logo">
                        <h2>RemShop</h2>
                    </div>



                    <ul className="nav__left">

                        <div className="search__box">
                            <input type="search" name="search" id="search" placeholder="Search" />
                            <CiSearch />
                        </div>

                        <div className="nav__more">
                            <div>
                                <BsPersonCircle />
                            </div>
                            <div>
                                <AiOutlineHeart />
                            </div>
                            <div className="nav__cart">
                                <LiaShoppingBagSolid className="icon" />
                                <span className="items">{numberOfItem}</span>
                            </div>
                        </div>

                    </ul>

                </div>
            </nav>


            <div className="container nav__sec">
                <ul className="nav__sec-items">
                    {/* change to React Router Link */}
                    <li>New Arrivals</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Brands</li>
                    <li>Sales</li>
                </ul>
            </div>

        </>

    )
}

export default Navbar