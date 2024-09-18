import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'

export default function Login() {
    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        onSubmit:login,
        validate:values =>{
            let errors = {};

            if (values.email.length<=10)
            {
                errors.email = 'Email must be at least 10 characters long';
            }

            if (values.password.length<=8){
                errors.password = 'Password must be at least 8 characters long';
            }
            return errors;
        }
    });

    async function login(){
        const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values);
        console.log(data);
    }
    
  return (
    <div>
            <h1> LOG IN </h1>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="" onChange={formik.handleChange} name="email" value={formik.email} onBlur={formik.handleBlur}/>
                <label htmlFor="email">User Email</label>
                {formik.touched.email && formik.errors.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="pass" placeholder="" onChange={formik.handleChange} name="password" value={formik.password} onBlur={formik.handleBlur} />
                <label htmlFor="pass">User Password</label>
                {formik.touched.password && formik.errors.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}
            </div>

            <button type="submit" className="btn btn-outline-info" > Log in </button>
            </form>
        </div>
  )
}
