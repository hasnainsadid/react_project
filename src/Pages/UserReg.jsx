import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserReg = () => {
  const [formData, setFormData] = useState({})

  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((val)=>({...val, [name]:value}))
  }
  console.log(formData);

  const submitHandler=(e)=>{
    e.preventDefault();

    if (formData.password != formData.c_password) {
      alert("password doesn't match")
    } else{
      axios.get("http://localhost:8080/registration", formData)
      .then((res)=>res.data.msg)
    }
  }
  return (
    <>
        <div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-4 text-white text-uppercase">Registration</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Registration</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h3 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>User Registration</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form bg-white" style={{padding: "20px"}}>
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" onSubmit={submitHandler} novalidate="novalidate">
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" name="name" id="name" placeholder="Your Name" onChange={changeHandler}
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" className="form-control p-4" name="email" id="email" placeholder="Your Email" onChange={changeHandler}
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" name="password" id="Password" placeholder="Password" onChange={changeHandler}
                                    required="required" data-validation-required-message="Please enter a Password" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" name="c_password" id="Password" placeholder="Confirm Password" onChange={changeHandler}
                                    required="required" data-validation-required-message="Your password is not matched" />
                                <p className="help-block text-danger"></p>
                            </div>
                            
                            <div className="text-center">
                                <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserReg