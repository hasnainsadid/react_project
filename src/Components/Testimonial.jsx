import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    useEffect(() => {
        allTestimonial();
    }, []);

    const [testimonial, setTestimonial] = useState([]);

    const allTestimonial = async () => {
        axios.get(`http://localhost/WDPF55_React/react_project/api/testimonial.php`).then(result => {
            console.log(result.data.testimoniallist)
            setTestimonial(result.data.testimoniallist);
        })
    }

    if (testimonial) {
        return (
            <>
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h6>
                            <h1>What Say Our Clients</h1>
                        </div>
                        <OwlCarousel items={3} margin={20} loop autoplay className="owl-carousel owl-theme testimonial-carousel">
                            {
                                testimonial.map(item => (
                                    <div className="text-center pb-4">
                                        <img className="img-fluid mx-auto" src="assets/img/testimonial-1.jpg" style={{ width: "100px", height: "100px" }} />
                                        <div className="testimonial-text bg-white p-4 mt-n5">
                                            <p className="mt-5">{item.details}</p>
                                            <h5 className="text-truncate">{item.name}</h5>
                                            <span>{item.profession}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </OwlCarousel>
                    </div>
                </div>
            </>
        )
    }
}

export default Testimonial