import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Team = () => {
    useEffect(() => {
        allTeam();
    }, []);

    const [isteam, setTeam] = useState([]);

    const allTeam = async () => {
        axios.get(`http://localhost/WDPF55_React/react_project/api/team.php`).then(result => {
            console.log(result.data.teamlist)
            setTeam(result.data.teamlist);
        })
    }
    if (isteam) {
        return (
            <>
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Guides</h6>
                            <h1>Our Travel Guides</h1>
                        </div>
                        <div className="row">
                            {
                                isteam.map(item => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                                        <div className="team-item bg-white mb-4">
                                            <div className="team-img position-relative overflow-hidden">
                                                <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt="" />
                                                <div className="team-social">
                                                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                                                    <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>
                                            <div className="text-center py-4">
                                                <h5 className="text-truncate">{item.name}</h5>
                                                <p className="m-0">{item.designation}</p>
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

export default Team