import { BsPersonCircle } from "react-icons/bs"
import { useFormik } from "formik"
import myFormSchema from "../Schema/FormSchema"

const onSubmit = (values) => {
    console.log(values)
}


const Register = () => {

    const { handleChange, errors, values, handleBlur, handleReset, handleSubmit, touched } = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            agree: false

        },
        onSubmit,

        validationSchema: myFormSchema

    })

    console.log(errors)

    // handleSubmit = () => {
    //     console.log(initialValues)
    // }

    return (
        <div className='container register__container'>

            <div className="reg">

                <div className="register__header">
                    <h1>Register</h1>
                    <p>Lets Get You Registered</p>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="reg-form">

                    <div className="user__avatar">
                        <label htmlFor="avatar">
                            {<BsPersonCircle /> || <img src="" alt="" />}
                        </label>
                        <input style={{ display: "none" }} type="file" name="avatar" id="avatar" />
                    </div>

                    <input type="text" name="firstname" id="firstname" placeholder='First Name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname} />

                    <input type="text" name="lastname" id="lastname" placeholder='Last Name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname} />

                    <input type="text" name="username" id="username" placeholder='Username'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username} />

                    <input type="email" name="email" id="email" placeholder='Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />

                    <input type="password" name="password" id="password" placeholder='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password} />

                    <div className="agree">
                        <input type="checkbox" name="agree" id="agree"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.agree} />
                        <p>I agree to the terms and conditions</p>
                    </div>

                    <button className="btn submit-btn" >Submit</button>

                </form>

            </div>

        </div>
    )
}

export default Register