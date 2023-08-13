import React from "react";
import Layout from "../components/layout/Layout";
import OnGoingEvents from "../components/OngoingEvents";
import UpComingEvents from "../components/UpComingEvents";
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate()
  

  return (
    <Layout title={"-Tournaments-"}>
      <div className="container-fluid mx-auto text-center ">
        {/* banner */}
        <div className="bg row ">
     
        </div>
        <OnGoingEvents/>
        <UpComingEvents/>
        <p
                className="btn btn-md text-white text-uppercase mt-3 mx-auto"
                style={{ backgroundColor: "#148157", letterSpacing: "0.2em" }}
                onClick={() => navigate('/tournament')}
              >
                {" "}
                View All Tournament{" "}
              </p>

        
       
      </div>
    
     
    </Layout>
  );
}

export default HomePage;
