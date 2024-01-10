import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IMAGE123 from "../assets/products/perfume.jpg"


const Cart = () => {
    return (
        <div>
            <Navbar />

            <div className="cart__container container">
                <h2>Your Basket</h2>

                <div className="cart">
                    <div className="cart__left">

                        <div className="cart__main">
                            <article className="cart__item">
                                <div className="cart__item-left">
                                    <div className="item__img">
                                        <img src={IMAGE123} alt="cart item image" />
                                    </div>

                                    <div className="item__info">
                                        <h5 className='item__brand'>Jordan</h5>
                                        <h3>Air Jordan High </h3>
                                        <h3>(White/Black)</h3>
                                        <h4>Unisex shoes</h4>
                                        <h5>Size: <span>44</span></h5>
                                        <div className="btn__inc__dec">
                                            <button type="button">+</button>
                                            <span>1</span>
                                            <button type="button">-</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart__item-right">
                                    <div className="prices">
                                        <h3 className="price__main">$179.99</h3>
                                        <strike>$200</strike>
                                    </div>

                                    <div className="remove__wishlist">
                                        <h5>Wi</h5>
                                        <h5>Trash</h5>
                                    </div>
                                </div>
                            </article>
                            <article className="cart__item">
                                <div className="cart__item-left">
                                    <div className="item__img">
                                        <img src={IMAGE123} alt="cart item image" />
                                    </div>

                                    <div className="item__info">
                                        <h5 className='item__brand'>Jordan</h5>
                                        <h3>Air Jordan High </h3>
                                        <h3>(White/Black)</h3>
                                        <h4>Unisex shoes</h4>
                                        <h5>Size: <span>44</span></h5>
                                        <div className="btn__inc__dec">
                                            <button type="button">+</button>
                                            <span>1</span>
                                            <button type="button">-</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart__item-right">
                                    <div className="prices">
                                        <h3 className="price__main">$179.99</h3>
                                        <strike>$200</strike>
                                    </div>

                                    <div className="remove__wishlist">
                                        <h5>Wi</h5>
                                        <h5>Trash</h5>
                                    </div>
                                </div>
                            </article>
                            <article className="cart__item">
                                <div className="cart__item-left">
                                    <div className="item__img">
                                        <img src={IMAGE123} alt="cart item image" />
                                    </div>

                                    <div className="item__info">
                                        <h5 className='item__brand'>Jordan</h5>
                                        <h3>Air Jordan High </h3>
                                        <h3>(White/Black)</h3>
                                        <h4>Unisex shoes</h4>
                                        <h5>Size: <span>44</span></h5>
                                        <div className="btn__inc__dec">
                                            <button type="button">+</button>
                                            <span>1</span>
                                            <button type="button">-</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart__item-right">
                                    <div className="prices">
                                        <h3 className="price__main">$179.99</h3>
                                        <strike>$200</strike>
                                    </div>

                                    <div className="remove__wishlist">
                                        <h5>Wi</h5>
                                        <h5>Trash</h5>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="cart__right">
                        <h3>Basket Summary</h3>
                        <div className="summary">
                            <div className="item__num-price">
                                <h5>2 items:</h5>
                                <h4>$188</h4>
                            </div>

                            <div className="promo__price">
                                <h5>Promocode:</h5>
                                <h4>$0</h4>
                            </div>

                            <div className="promo__input">
                                <input type="text" name="promocode" id="promocode" />
                            </div>

                            <div className="total__price">
                                <h3>Total:</h3>
                                <h4>$200</h4>
                            </div>

                            <button type="button">
                                Go To Checkout
                            </button>

                        </div>
                    </div>
                </div>

            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis deserunt ducimus quibusdam quidem atque non repellat, odio quis ipsa, vitae doloribus officiis? Hic odit possimus velit atque ullam odio sit expedita consequuntur aliquid, magni, ipsum pariatur reprehenderit corrupti officia maxime nostrum non. Quaerat atque architecto nobis odit eius, voluptatibus iure provident voluptas consequuntur adipisci! Nisi vitae sapiente et recusandae totam iste facilis quae ratione.
            </p>
            <Footer />
        </div>
    )
}

export default Cart