import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

const Plans = () => {
  const [plan, setPlan] = useState([]);

  //getallplans
  const getAllPlans = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/plan/get-plan");
      setPlan(data.plan);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllPlans();
  }, []);
  return (
    <Layout>
      <div className="row m-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center mb-3">View All Participant</h1>
          <div className="d-flex flex-wrap ">
            {plan?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/plan/${p.slug}`}
                className="text-decoration-none text-black"
              >
                  <div
                      key={p._id}
                      navigate={`/plan/${p.slug}`}
                      className="col-sm-1 card m-1 p-2 rounded-2 d-flex flex-row lh-sm"
                      style={{ width: "30rem", height: "auto" }}
                    >
                      <img
                        src={`http://localhost:8080/api/v1/plan/plan-sampleimage/${p._id}`}
                        alt={p.name}
                        className=" p-2 rounded-0 img-thumbnail border-0 me-2"
                        style={{ width: "10rem", height: "10rem" }}
                      />
                    <div>
                      <p
                        className="fs-5  mt-2"
                        style={{ letterSpacing: "0.2em", color: "#47856c" }}
                      >
                        NAME : <span className="text-dark-emphasis text-capitalize">{p.name}</span>
                      </p>
                      <p
                        className="fs-6 text-dark-emphasis"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        ADDRESS : <span className="text-capitalize">{p.address}</span>
                      </p>
                      <p
                        className="fs-6 text-dark-emphasis"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        CITY : <span className="text-capitalize">{p.city}</span>
                      </p>
                      </div>
                     
                    </div>
                
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Plans;
