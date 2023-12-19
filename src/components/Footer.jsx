import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <div className="main__footer">
                    <div className="footer__left">
                        <h2>RemiShop</h2>
                        <div className="footer__social">

                        </div>
                    </div>
                    <div className="footer__right">
                        <article>
                            <h3>Catalogue</h3>
                            <Link ><h4>Discounts</h4></Link>
                            <Link ><h4>Brands</h4></Link>
                            <Link ><h4>Personal Ofice</h4></Link>
                        </article>

                        <article>
                            <h3>Customer Service</h3>
                            <Link ><p>Orders & Delivery</p></Link>
                            <Link ><p>Returns & Refunds</p></Link>
                            <Link ><p>FAQs</p></Link>
                            <Link ><p>Privacy Policy</p></Link>
                        </article>

                        <article>
                            <h3>About Us</h3>
                            <Link ><p>Loyalty programme</p></Link>
                            <Link ><p>Blog</p></Link>
                            <Link ><p>Sustanability</p></Link>
                            <Link ><p>Corporate governance</p></Link>
                        </article>

                        <article>
                            <h3>Contact</h3>
                            <Link ><p>+2341234567</p></Link>
                            <Link ><p>aderemibiodun@gmail.com</p></Link>
                            <Link ><p>16, Lakowe Ibeju-Lekki</p></Link>
                        </article>
                    </div>
                </div>
                <div className="footer__copywrite">
                    <p>&copy; copywright, 2023 RemShop. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer