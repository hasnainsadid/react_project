import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserReg = () => {
    const[msg, setMsg] = useState({});
    const navigate = useNavigate();
  

    const handleSubmit = (e)=> {
        e.preventDefault();
        msgInsert();
    }
    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setMsg((val)=>({...val, [name]:value}));
    }

    const msgInsert = ()=>{
        axios.post("http://localhost/WDPF55_React/react_project/api/booking.php", {data:msg})
        .then(res=>{
            alert(res.data.msg);
            return navigate('/registration');
        })
       
    }

    return (
        <>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                        <h3 className="display-4 text-white text-uppercase">Booking</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">
                                Booking
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h3 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Book a Package</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form bg-white" style={{ padding: "20px" }}>
                                <div id="success"></div>


                                <form name="sentMessage" onSubmit={handleSubmit} id="contactForm">
                                    <div className="form-row">

                                        <div className="control-group col-sm-6">
                                            <input type="text" className="form-control p-4" name="name" value={msg.name} onChange={handleChange} id="name" placeholder="Your Name" 
                                                required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger"></p>
                                        </div>

                                        <div className="control-group col-sm-6">
                                            <input type="email" className="form-control p-4" name="email" value={msg.email} onChange={handleChange} id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" name="phone" value={msg.phone} onChange={handleChange} id="phone" placeholder="Phone Number"
                                            required="required" data-validation-required-message="Please enter a Phone Number" />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="control-group">
                                        <select name="package" value={msg.package} onChange={handleChange} className="form-control">
                                            <option value="8">abc</option>
                                            <option value="3">lkj</option>
                                        </select>
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="control-group">
                                        <input type="date" className="form-control p-4" name="schedule" value={msg.schedule} onChange={handleChange} id="schedule" 
                                            required="required" data-validation-required-message="Please pick a date" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Book Now</button>
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