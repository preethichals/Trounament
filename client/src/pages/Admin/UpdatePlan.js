import axios from "axios";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";

const { Option } = Select;

function UpdatePlan() {
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sampleimage, setSampleImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  //Get Single Plan
  const getSinglePlan = async () => {
    try {
      const { data } = await axios.get(`https://capstone-proj-82p2.onrender.com/api/v1/plan/get-plan/${params.slug}`);
      setName(data.plan.name);
      setId(data.plan._id);
      setDescription(data.plan.description);
      setCategory(data.plan.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlan();
    //eslint-disable-next-line
  }, []);

  //Get all catogory
  const getAllPlan = async () => {
    try {
      const { data } = await axios.get("https://capstone-proj-82p2.onrender.com/api/v1/category/get-category");
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

  //Update Plan
  const handleUpdatePlan = async (e) => {
    e.preventDefault();
    try {
      const planData = new FormData();
      planData.append("name", name);
      planData.append("description", description);
      sampleimage && planData.append("sampleimage", sampleimage);
      planData.append("category", category);
      const { data } = axios.put(`https://capstone-proj-82p2.onrender.com/api/v1/plan/update-plan/${id}`, planData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Plan Updated successfully");
        navigate("/dashboard/admin/plan");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //Delete Plan
  const handleDeletePlan = async (e) => {
    try {
      let answer = window.confirm("You want to delete? Type yes or cancel ");
      if (answer) {
        const { data } = await axios.delete(`https://capstone-proj-82p2.onrender.com/api/v1/plan/delete-plan/${id}`);
        toast.success("Plan deleted Successfully");
        navigate("/dashboard/admin/plan");
        toast.success(data?.message)
      }
    } catch (error) {
      console.log(error);
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
            <h1>Update Plan</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Click here and Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
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
                {sampleimage ? (
                  <div className="">
                    <img
                      src={URL.createObjectURL(sampleimage)}
                      alt="plan-sampleimage"
                      height={"2rem"}
                      className="img img-fluid"
                    />
                  </div>
                ) : (
                  <div className=" text-center">
                    <img
                      src={`https://capstone-proj-82p2.onrender.com/api/v1/plan/plan-sampleimage/${id}`}
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
                  value={description}
                  placeholder="Description about plan"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn btn-primary text-center me-2"
                  onClick={handleUpdatePlan}
                >
                  Update Participant
                </button>
                <button
                  className="btn btn-danger text-center me-2"
                  onClick={handleDeletePlan}
                >
                  Delete Participant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UpdatePlan;
