import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./add.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
  const initialVender = {
    name: "",
    location: "",
    rating: "",
    employee_name: "",
    contact_number: "",
  };

  const [vender, setVender] = useState(initialVender);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setVender({ ...vender, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(vender);

    await axios
      .post("http://localhost:8080/api/create", vender, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.msg || "Vendor added successfully!", {
          position: "top-right",
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error: " + (err.response?.data?.msg || err.message), {
          position: "top-right",
        });
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
     

      <h1>Add New Vender</h1>

      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Vender Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter vender name"
            onChange={inputHandler}
          />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location"name="location"className="form-control"placeholder="Enter location"onChange={inputHandler}/>
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="form-control"
            placeholder="Enter rating (1-5)"
            onChange={inputHandler}
          />
        </div>

        <div>
          <label htmlFor="employee_name">Employee Name:</label>
          <input
            type="text"
            id="employee_name"
            name="employee_name"
            className="form-control"
            placeholder="Enter employee name"
            onChange={inputHandler}
          />
        </div>

        <div>
          <label htmlFor="contact_number">Contact Number:</label>
          <input
            type="number"
            id="contact_number"
            name="contact_number"
            className="form-control"
            placeholder="Enter contact number"
            onChange={inputHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add Vender
        </button>
      </form>
      <br /><br />
      <Link to="/" className="btn btn-secondary mb-3">
        Back
      </Link>
    </div>
  );
};

export default Add;
