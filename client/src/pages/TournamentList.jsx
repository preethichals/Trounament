import axios from "axios";
import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

function TournamentList() {

  const [plan, setPlan] = useState([]);
  const [checked, setChecked] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  //Get all plans
  const getAllPlans = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:8080/api/v1/plan/plan-list/${page}`);
      setPlan(data.plan);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/plan/plan-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  //Lifecycle method
  useEffect(() => {
    if (page === 1) return;
    loadmore();
    // eslint-disable-next-line
  }, [page]);

  //Loadmore
  const loadmore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:8080/api/v1/plan/plan-list/${page}`);
      setLoading(false);
      setPlan([...plan, ...data?.plan]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Lifecycle methods
  useEffect(() => {
    if (!checked.length) getAllPlans();
    // eslint-disable-next-line
  }, [checked.length]);

  useEffect(() => {
    if (checked.length) filterPlan();
    // eslint-disable-next-line
  }, [checked]);

  //Get Filter meal plans
  const filterPlan = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/plan/plan-filter", {
        checked,
      });
      setPlan(data?.plan);
    } catch (error) {
      console.log(error);
    }
  };

  //Lifecycle method
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //Get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Filter by Category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  return (
    <Layout title={"Tournament-List"}>
      <main className="container mt-5">
 
        {/* Filter by category */}
        <div className="row ">
          <div className="col-md-3 bg-secondary-subtle">
          <h5 className="mx-4 mt-4 mb-2 fw-medium text-uppercase" style={{color:"#46866c",letterSpacing:"2px"}}>Filter by Events</h5>
            <div className="d-flex flex-column ">
              {categories?.map((c,index) => (
                <Checkbox
                  className="fs-6 text-capitalize mx-4 my-2"
                  key={index}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
            <button
              className=" btn btn-danger mt-3 ms-3"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
          {/* All meal Plan list */}
          <div className="col-md-9 p-3" id="plan">
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <div>
                <h3 className=" text-uppercase text-center mb-3" style={{ letterSpacing: "0.2em"}}>Participant List</h3>
                <div className="row">
                  {plan?.map((p) => (
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
                  ))}
                </div>
              </div>
            )}
            {/* Load More */}
            <div className="m-2 p-3">
              {plan && plan.length < total && (
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {isLoading ? "Loading..." : "Load More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default TournamentList;
