import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
//import Add from './components/addVendors/add.jsx';
//import Add from '../addVendors/add.jsx';

const Vender = () => {
  const [vender, setVender] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/getAll");
        setVender(response.data);
      } catch (error) {
        console.error("Error fetching venders:", error);
        
      }
    };

    fetchData();
  }, []);

  const deleteVender = async (venderId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/deleteone/${venderId}`);
      setVender((prevVenders) => prevVenders.filter((vender) => vender._id !== venderId));

      toast.success(response.data.msg, { position: 'top-right' });
    } 
    catch (error) {
      console.error("Error deleting vender:", error);
      toast.error("Error deleting vender", { position: 'top-right' });
    }
  };

  return (
    
    <div className="container mt-4">
      <h1>Vender List</h1>
      <Link to={"/create"} className="btn btn-primary mb-3">Add New Vender</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Employee Name</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vender.map((vender) => (
            <tr key={vender._id}>
              <td>{vender.name}</td>
              <td>{vender.location}</td>
              <td>{vender.rating}</td>
              <td>{vender.employee_name}</td>
              <td>{vender.contact_number}</td>
              <td>
                <Link to={`/update/${vender._id}`} className="btn btn-primary">Edit</
                Link>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => deleteVender(vender._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vender;
