import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './css/insert.css'


function Insertdata() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    return <>
    
<div className="form-container">
    <h2>New Food Item</h2>
        <label htmlFor="food-name" >Food Name:</label>
        <input type="text" 
         onChange={(e)=>{
          setData({...data,name:e.target.value})
        }} 
        id="food-name" name="food-name" required />

        <label htmlFor="food-image">Food Image:</label>
        <input type="text" 
        onChange={(e) => {
          setData({ ...data, Image: e.target.value })
        }} 
        id="food-image" name="food-image" accept="image/*" required />

        <label htmlFor="price">Price:</label>
        <input type="number" 
         onChange={(e) => {
          setData({ ...data, price: e.target.value })
        }}
        id="price" name="price" required />

        <label htmlFor="food-id">Food ID:</label>
        <input type="number" 
        onChange={(e) => {
          setData({ ...data, id: e.target.value })
        }}
        id="food-id" name="food-id" required />

        <label htmlFor="food-detail">Food Detail:</label>
        <textarea id="food-detail" 
         onChange={(e) => {
          setData({ ...data, discription: e.target.value })
        }}
        name="food-detail" rows="4" required></textarea>

        <button type="submit" 
        onClick={()=>{
          fetch("http://localhost:3000/schemaProject/",
            {
              method:"POST",
              body:JSON.stringify(data),
              headers:{
                "Content-Type":"application/json"
              }
            }
          )
          .then(
            (res)=>{
              navigate("/getAll")
            }
          )
        }} 
        className="col-12 btn btn-outline-success mt-2">Submit</button>
</div>
    </>
  }
  export default Insertdata;