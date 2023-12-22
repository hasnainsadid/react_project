import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Blog = () => {
    useEffect(() => {
        allBlog();
    }, []);

    const [isblog, setBlog] = useState([]);

    const allBlog = async () => {
        axios.get(`http://localhost/react/react_project/api/blog.php`).then(result => {
            console.log(result.data.bloglist)
            setBlog(result.data.bloglist);
        })
    }

    if (isblog) {
        return (
            <div>
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Blog</h6>
                            <h1>Latest From Our Blog</h1>
                        </div>
                        <div className="row pb-3">
                            {
                                isblog.map(item => (
                                    <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                        <div className="blog-item">
                                            <div className="position-relative">
                                                <img className="img-fluid w-100" src="assets/img/blog-1.jpg" alt="" />
                                                {/* <div className="blog-date">
                                                    <h6 className="font-weight-bold mb-n1">01</h6>
                                                    <small className="text-white text-uppercase">Jan</small>
                                                </div> */}
                                            </div>
                                            <div className="bg-white p-4">
                                                <div className="d-flex mb-2">
                                                    <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                                    <span className="text-primary px-2">|</span>
                                                    <a className="text-primary text-uppercase text-decoration-none" href="">{item.title}</a>
                                                </div>
                                                <a className="h5 m-0 text-decoration-none" href="">{item.details}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog