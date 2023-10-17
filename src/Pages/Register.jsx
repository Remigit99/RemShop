import { BsPersonCircle } from "react-icons/bs"

const Register = () => {
    return (
        <div className='container register__container'>

            <div className="reg">

                <div className="register__header">
                    <h1>Register</h1>
                    <p>Lets Get You Registered</p>
                </div>

                <form className="reg-form">

                    <div className="user__avatar">
                        <label htmlFor="avatar">
                            {<BsPersonCircle /> || <img src="" alt="" />}
                        </label>
                        <input style={{ display: "none" }} type="file" name="avtar" id="avatar" />
                    </div>

                    <input type="text" name="firstname" id="firstname" placeholder='First Name' />

                    <input type="text" name="lastname" id="lastname" placeholder='Last Name' />

                    <input type="text" name="username" id="username" placeholder='Username' />

                    <input type="email" name="email" id="email" placeholder='Email' />

                    <input type="password" name="password" id="password" placeholder='Password' />
                </form>

            </div>

        </div>
    )
}

export default Register