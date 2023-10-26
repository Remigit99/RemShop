import React from 'react'
import { catData } from "../Data/CatData"

const Categories = () => {
    return (
        <section>
            <div className="container categories__container">
                <div className="cat__header">
                    <h1>Categories</h1>
                    <button className='btn btn-view' type="button">
                        View all
                    </button>
                </div>

                <div className="cat__main">

                    {
                        catData.map(({ id, catName, title, coverImg }) => {
                            return <article className="cat" key={id}>
                                <div className="cover__img">
                                    <img src={coverImg} alt="cover-img" />
                                    <div className="cat__title">
                                        <p>{catName}</p>

                                    </div>

                                </div>
                                <div className="cat__name">
                                    <h3>{title}</h3>
                                </div>
                            </article>
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Categories