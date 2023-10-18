import * as yup from "yup"


const myFormSchema = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    username: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    password: yup.string().min(6).required("Required"),
    agree: yup.boolean(true).required("Required"),

})

export default myFormSchema;