import axios from "axios";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

const { Option } = Select;

function CreatePlan() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [sampleimage, setSampleImage] = useState("");
  
  //Get all catogory
  const getAllPlan = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };

  //Lifecycle method
  useEffect(() => {
    getAllPlan();
  }, []);

  //Create Plan
  const handleCreatePlan = async (e) => {
    e.preventDefault();
    try {
      const planData = new FormData();
      planData.append("name", name);
      planData.append("address", address);
      planData.append("city", city);
      planData.append("sampleimage", sampleimage);
      planData.append("category", category);
      const { data } = axios.post("http://localhost:8080/api/v1/plan/create-plan", planData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Plan Created successfully");
        navigate("admin/plan");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"create plan"}>
      <div className=" container-fluid m-6 p-4">
        <div className=" row">
          <div className=" col-md-3">
            <AdminMenu />
          </div>
          <div className=" col-md-9">
            <h1>Participant Detail</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select Tournament"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-primary col-md-12">
                  {sampleimage ? sampleimage.name : "Upload Image"}
                  <input
                    type="file"
                    name="sampleimage"
                    accept="image/*"
                    onChange={(e) => setSampleImage(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-2">
                {sampleimage && (
                  <div className="">
                    <img
                      src={URL.createObjectURL(sampleimage)}
                      alt="plan-sampleimage"
                      height={"2rem"}
                      className="img img-fluid"
                    />
                  </div>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Name here"
                  className=" form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <textarea
                  type="text"
                  value={address}
                  placeholder="Enter Your Address"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  value={city}
                  placeholder="Enter Your City / Town"
                  className=" form-control"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn btn-primary text-center"
                  onClick={handleCreatePlan}
                >
                  Add Participant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreatePlan;
