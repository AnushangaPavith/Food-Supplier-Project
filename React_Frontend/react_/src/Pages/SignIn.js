import React, { useState } from "react";
import bgImg from "../assets/Grocery Delivery Final.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/v1";

export default function Form() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Prepare the request data based on your form fields
        const requestData = {
            userName: data.username,
            password: data.password,
            mobileNo: data.mobile,
        };
        // Make a POST request to the API endpoint
        axios
            .post(`${BASE_API_URL}/signin`, requestData)
            .then((response) => {
                // Handle the response here
                console.log("Sign-in successful", response.data);
                navigate('/');

                // You can navigate to a different route on successful sign-in
                // For example, navigate to "/ViewProducts"
            })
            .catch((error) => {
                // Handle errors
                console.error("Sign-in failed", error);

                // You can also display an error message to the user
            });
    };

    // console.log(watch('username'));

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>register and enjoy the service</span>

                    <form
                        id="form"
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="text"
                            {...register("username", { required: true})}
                            placeholder="username"
                        />
                        <input
                            type="password"
                            {...register("password", { required: true})}
                            placeholder="password"
                        />
                        <input
                            type="password"
                            {...register("confirmpwd")}
                            placeholder="confirm password"
                        />
                        <input
                            type="text"
                            {...register("mobile", { required: true, maxLength: 10 })}
                            placeholder="mobile number"
                        />
                        {errors.username?.type === "required" && "User Name is required."}
                        {errors.mobile?.type === "required" && "Mobile Number is required."}
                        {errors.mobile?.type === "maxLength" && "Incorrect Number"}
                        <Link
                            className="text-decoration-none btn btn-sm btn-info custom-button "
                            to={"/"}
                            style={{ backgroundColor: "green", color: "white" }}
                        >
                            {" "}
                            Login{" "}
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-sm btn-info custom-button"
                            style={{ backgroundColor: "green", color: "white" }}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
}

// export default function Form() {

//     const { register, handleSubmit, watch, formState: { errors } } = useForm()
//     const onSubmit = data => console.log(data);

//   return (
//     <section>
//         <div className="register">
//             <div className="col-1">
//                 <h2>Sign In</h2>
//                 <span>register and enjoy the service</span>

//                 <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
//                     <input type="text" {...register("username")} placeholder='username' />
//                     <input type="text" {...register("password")} placeholder='password' />
//                     <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
//                     <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
//                     {errors.mobile?.type === "required" && "Mobile Number is required"}
//                     {errors.mobile?.type === "maxLength" && "Incorrect Number"}

//                     <Link
//                     className="text-decoration-none btn btn-sm btn-info custom-button "
//                     to={"/products"}
//                     style={{ backgroundColor: 'green', color: 'white' }}
//                   >
//                       {' '}Sign In{' '}
//                   </Link>
//                 </form>

//             </div>
//             <div className="col-2">
//                 <img src={bgImg} alt="" />
//             </div>
//         </div>
//     </section>
//   )
// }
