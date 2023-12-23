import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Booking from '../Components/Booking'

const Contact = () => {
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
        axios.post("http://localhost/WDPF55_React/react_project/api/message.php", {data:msg}).then(res=>{
            alert(res.data.msg);
            return navigate('/contact');
        })
       
    }

  return (
    <>
        <div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-4 text-white text-uppercase">Contact</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Contact</p>
                </div>
            </div>
        </div>
    </div>

    <Booking />

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Contact</h6>
                <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form bg-white" style={{padding: "20px"}}>
                        <div id="success"></div>
                        <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" name='name' value={msg.name} onChange={handleChange} className="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" name='email' value={msg.email} onChange={handleChange} className="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" name='subject' value={msg.subject} onChange={handleChange} className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" name='message' value={msg.message} onChange={handleChange} placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
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

export default Contact