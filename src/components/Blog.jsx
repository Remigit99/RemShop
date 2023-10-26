import React from 'react'
import CTABANNER1 from "../assets/Imgs/cta-banner.jpg"
import BANNER1 from "../assets/Imgs/blog-1.jpg"
import NEWSLET from "../assets/Imgs/newsletter.png"


const Blog = () => {
    return (
        <section>
            <div className="container blog__container">
                <div className="blog__header">
                    <h1>Blog</h1>
                    <button className='btn btn-view' type="button">
                        View all
                    </button>
                </div>

                <main>
                    <div id="blog__main">
                        <img src={CTABANNER1} alt="main blog" />
                        <div id="blog__more">
                            2023 Lookbook
                        </div>
                        <div id="blog__title">
                            <h3>New Release</h3>
                            <p>Presenting new trends of 2023</p>
                        </div>
                    </div>

                    <div className="blog__other">
                        <article>
                            <img src={BANNER1} alt="main blog" />
                            <div className="blog__more">
                                Watching Trending
                            </div>
                            <div className="blog__title">
                                <h3>New Release</h3>
                                <p>Presenting new trends of 2023</p>
                            </div>

                        </article>

                        <div className="newsletter">
                            <div className="newslet__header">
                                <button type="button" className='btn btn-subscribe'> subscribe</button>
                                <div className="sub__people">
                                    <img src={NEWSLET} alt="subscribed" />
                                </div>
                            </div>

                            <p>Subscribe to the newsletter and receive new offers from our store with hot offers</p>
                        </div>

                    </div>
                </main>
            </div>
        </section>
    )
}

export default Blog