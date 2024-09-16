import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './screen.css';

export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })
    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responce = await fetch('https://foodplacebackend.onrender.com/api/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.Geolocation })
            });
            const json = await responce.json();
            
            if (json.success) {
                alert(`Hey! Myself Babun the developer of this site! I would like to draw your attention that this site is in Testing phase!`);
                alert(`Please LogIn with same Email-Id and Password!`);
                navigate("/login");
            }
            if(!json.success){
                alert("Enter Valid Credentials!");
            }
        }

        catch (error) {
            console.log("Error:", error);
        }


    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }



    return (
        <>
            <div className='bg-dark' style={{height:"920px"}} >

                <div className='container' style={{ width: "330px", paddingTop: "8%" }} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                        <symbol id="check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                        </symbol>
                        <symbol id="circle-half" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                        </symbol>
                        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                        </symbol>
                        <symbol id="sun-fill" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                        </symbol>
                    </svg>

                    <main className="form-signin w-100 m-auto">
                        <form onSubmit={handleSubmit}>
                            {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                            <h2 className='h3 text-white ' style={{ "marginLeft": "10px" }}>Welcome to FoodPlace</h2>
                            <h1 className="h5 mt-3 fw-normal blockquote-footer">Please sign in </h1>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputt" placeholder="Name" autoComplete='off' name='name' value={credentials.name} onChange={onChange} />
                                <label htmlFor="floatingInputt">Name (more than 3 characters)</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" autoComplete='off' placeholder="name@example.com" name='email' value={credentials.email} onChange={onChange} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="Password" autoComplete='off' placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                                <label htmlFor="Password">Password</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Location" autoComplete='off' placeholder="Location" name='Geolocation' value={credentials.Geolocation} onChange={onChange} />
                                <label htmlFor="Password">Location</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" name='checkbox' onChange={onChange} />
                                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                                    Privacy Policy
                                    <p>I agree to <Link className="link-opacity-50-hover" to="#">FoodPlace's Terms of Service,</Link><Link className="link-opacity-50-hover" to="#"> Privacy Policy</Link><span> and </span><Link className="link-opacity-50-hover" to="#">Content Policies.</Link></p>
                                </label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                            <Link to="/login" className='mt-3 btn btn-danger w-100 py-2'>Already a user</Link>
                            <p className="mt-3 mb-3  text-white">© FoodPlace B@bun140623</p>
                        </form>
                    </main>
                    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
                </div>
            </div>
        </>
    );
}
