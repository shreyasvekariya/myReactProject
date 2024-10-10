import imagePath1 from "./image/shreyas.jpg";
import imagePath2 from "./image/darsh.jpg"; 
import imagePath3 from "./image/daksh.jpg"; 
import './css/homepage.css'

function Homepage(){
    return(
        <>
             <div className="row pt-3">
                  <div className="col"></div>
                  <div className=" home-main col-3" > 
                      <div className="home-card">
                          <div className="home-con">
                              <img src={imagePath1}className="card-img-top" alt="..." />
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Shreyas vekariya</h5>
                              <h5 className="card-title">Founder of Friends restaurant</h5>
                        
                              <div className="discription p-3">
                                  <p>
                                      {/* {project.More_details} */}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col"></div>
                  <div className=" home-main col-3" > 
                      <div className="home-card">
                          <div className="home-con">
                              <img src={imagePath2} className="card-img-top" alt="..." />
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Darsh Vipani</h5>
                              <h5 className="card-title">Founder of Friends restaurant</h5>
                        
                              <div className="discription p-3">
                                  <p>
                                      {/* {project.More_details} */}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                <div className="col"></div>
                <div className=" home-main col-3" > 
                      <div className="home-card">
                          <div className="home-con">
                              <img src={imagePath3} className="card-img-top" alt="..." />
                          </div>
                          <div className="card-body">
                              <h5 className="card-title">Daksh Bhalara</h5>
                              <h5 className="card-title">Founder of Friends restaurant</h5>
                        
                              <div className="discription p-3">
                                  <p>
                                      {/* {project.More_details} */}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col"></div>

        </div>
        </>
    )
}
export default Homepage;