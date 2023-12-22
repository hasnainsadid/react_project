import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Packages = () => {
    useEffect(() => {
        allPackage();
    }, []);

    const [ispackage, setPackage] = useState([]);

    const allPackage = async () => {
        axios.get(`http://localhost/react/react_project/api/package.php`).then(result => {
            console.log(result.data.packagelist)
            setPackage(result.data.packagelist);
        })
    }

    if (ispackage) {
        return (
            <>
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Packages</h6>
                            <h1>Pefect Tour Packages</h1>
                        </div>
                        <div className="row">
                            {
                                ispackage.map(item => (
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="package-item bg-white mb-2">
                                            <img className="img-fluid" src="assets/img/package-1.jpg" alt="" />
                                            <div className="p-4">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{item.tour_location}</small>
                                                    <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                                    <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                                                </div>
                                                <a className="h5 text-decoration-none" href="">{item.title}</a>
                                                <div className="border-top mt-4 pt-4">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                        <h5 className="m-0">{item.cost}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Packages