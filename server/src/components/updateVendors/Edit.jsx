import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addVendors/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

    const initialVender = {
        name: "",
        location: "",
        employee_name: "",

      };

 const {id} = useParams();
 const navigate = useNavigate();
 const [vender, setVender] = useState(initialVender);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setVender({...vender, [name]:value});
    console.log(vender);
 }


 useEffect(()=>{
    axios.get(`http://localhost:8080/api/getOne/${id}`)
    .then((response)=>{
        setVender(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/${id}`, vender)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addVender'>
        <Link to={"/"}>Back</Link>
        <h3>Update Vendor</h3>
        <form className='addUserForm' onSubmit={submitForm}>

            <div className="inputGroup">
                <label htmlFor="name">First name</label>
                <input type="text" value={vender.name} onChange={inputChangeHandler} id="name" name="name"  placeholder=' name' />
            </div>

            <div className="inputGroup">
                <label htmlFor="location">Last name</label>
                <input type="text" value={vender.location} onChange={inputChangeHandler} id="location" name="location"  placeholder='location ' />
            </div>

            <div className="inputGroup">
                <label htmlFor=" employee_name"> employee_name</label>
                <input type="text" value={vender.employee_name} onChange={inputChangeHandler} id=" employee_name" name=" employee_name"  placeholder='employee_name' />
            </div>

            <div className="inputGroup">
                <button type="submit">UPDATE VENDER</button>
            </div>

        </form>
    </div>
  )
}

export default Edit;