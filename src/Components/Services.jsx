import React, {useEffect,useState} from 'react'
import axios from 'axios';

const Services = () => {
    useEffect( () => {
        allService();
      }, []); 
    
      const [isservice, setService] = useState([]);

      const allService = async () => {
        axios.get(`http://localhost/react/react_project/api/service.php`).then(result => {
            console.log(result.data.servicelist)
            setService(result.data.servicelist);
          })     
      }

      if (isservice) {
        
        return (
        <>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Services</h6>
                        <h1>Tours & Travel Services</h1>
                    </div>
                    <div className="row">
                        {
                            isservice.map((item) => ( 
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                                        <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                                        <h5 className="mb-2">{item.title}</h5>
                                        <p className="m-0">{item.details}</p>
                                    </div>
                                </div>
                            )
                        )}

                    </div>
                </div>
            </div>
        </>
    )}
}

export default Services