import { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import './css/insert.css'

function Updatedata() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(() => {
      fetch(`http://localhost:3000/schemaProject/${id}`)
        .then((res) => res.json())
        .then((res)=>setData(res))
    },[id])
    return <>

        <div className="form-container">
            <h2>New Food Item</h2>
                <label htmlFor="food-name" >Food Name:</label>
                <input type="text" 
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value })
                }}
                id="food-name" name="food-name" required />

                <label htmlFor="food-image">Food Image:</label>
                <input type="text" 
                 value={data.Image}
                 onChange={(e) => {
                   setData({ ...data, Image: e.target.value })
                 }} 
                id="food-image" name="food-image" accept="image/*" required />

                <label htmlFor="price">Price:</label>
                <input type="number" 
                value={data.price}
                onChange={(e) => {
                  setData({ ...data, price: e.target.value })
                }} 
                id="price" name="price" required />

                <label htmlFor="food-id">Food ID:</label>
                <input type="number" 
                 value={data.id}
                 onChange={(e) => {
                   setData({ ...data, id: e.target.value })
                 }} 
                id="food-id" name="food-id" required />

                <label htmlFor="food-detail">Food Detail:</label>
                <textarea id="food-detail" 
                value={data.discription}
                onChange={(e) => {
                  setData({ ...data, discription: e.target.value })
                }}
                name="food-detail" rows="4" required></textarea>

                <div className="submit-style row" >
                  <button type="submit" className='btn btn-outline-success submit-style-update col-6  '
                  onClick={() => {

                    fetch("http://localhost:3000/schemaProject/"+id,
                      {
                        method:"PATCH",
                        body: JSON.stringify(data),
                        headers: {
                          "Content-Type": "application/json"
                        }
                      })
                      .then((res)=> res.json())
                      .then(() => navigate("/getAll"))
                    }}>Submit</button>
                    <button className="btn btn-outline-danger col-6 submit-style-update" onClick={() => {
                      fetch("http://localhost:3000/schemaProject/" + id, { method: 'DELETE' })
                          .then((res)=>{navigate("/getAll")});
                      }}>Delete
                    </button>
                </div>
                
        </div>
    </>
  }
export default Updatedata