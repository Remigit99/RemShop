import React from 'react'
import { GoArrowUpRight } from "react-icons/go"
import { bestSellerData } from '../Data/BestSellerData'


const BestSeller = () => {
    return (
        <section>
            <div className="container bestseller__container">
                <div className="bsell__header">
                    <h1>Best Seller</h1>
                    <button className='btn btn-view' type="button">
                        <GoArrowUpRight />
                        View all
                    </button>
                </div>

                <main>

                    {
                        bestSellerData.map(({ id, BImg, title, brand, newPrice, oldPrice }) => {
                            return <article className="bsell__main">
                                <div className="bsell__img">
                                    <img src={BImg} alt={title} />
                                </div>
                                <div className="bsell__info">
                                    <h5>{brand}</h5>
                                    <h4>{title}</h4>
                                    <div className="prices">
                                        <h2>{newPrice}</h2>
                                        <h3>{oldPrice}</h3>
                                    </div>
                                </div>
                            </article>
                        })

                    }

                </main>

            </div>


        </section>
    )
}

export default BestSeller