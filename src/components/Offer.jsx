import EOFFER from "../assets/Imgs/e-offer.jpg"

const Offer = () => {
    return (
        <section>
            <div className="container offer__container">
                <div className="offer__left">
                    <img src={EOFFER} alt="offer img" />
                </div>
                <div className="offer__right">
                    <h1>
                        35% off for only this Friday and get special gift
                    </h1>
                    <p>
                        Subscribe to our newsletter and get a bonus code for a 35% discount during this friday sale, plus a cool gift!!
                    </p>

                    <div className="offer__sub">
                        <input type="email" name="email" id="email" placeholder="Enter E-mail" />
                        <button className="btn btn-go" type="submit">Go</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer