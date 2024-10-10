import { useEffect, useState } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import './css/getId.css'

function GetById(){
    const params = useParams()
    const [project,setStudent]=useState({})
    useEffect(() => {
        fetch("http://localhost:3000/schemaProject/"+params.id).
            then(res => res.json()).
            then(res => setStudent (res))
    }
    , [])
    const naviget=useNavigate();
    return (
        <>
            <div className="row pt-3">
                <div className="col-4"></div>
                <div className=" getbyid-main col-4" > 
                    <div className="getbyid-card">
                        <div className="getbyid-con">
                            <img src={project.Image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <h5 className="card-title">PRICE : ₹ {project.price}</h5>
                            
                            <div className="discription p-3">
                                <p>
                                    {project.discription}
                                </p>
                            </div>
                             <div className="row ps-5 pe-5 pb-3">
                                <button className="btn btn-outline-primary col-5 ms-4 " onClick={()=>{naviget('/getAll')}}>Back</button>
                                <Link className="btn btn-outline-warning  col-5 ms-4" to={'/getAll/update/' + project.id}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GetById