import React from "react";
import { Link } from "react-router-dom";

const EditContact=()=>{
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-danger fw-bold">Update Contact</p>
                            <i className="fst-italic">The sun dipped below the horizon, casting a golden glow across the tranquil sea, while the gentle waves whispered secrets to the sandy shore The sun dipped below the horizon, casting a golden glow across the tranquil sea,the horizon, casting a golden glow across the tranquil sea, while the gentle waves whispered secrets to the sandy shore.</i>
                        </div>
                    </div>
                    <div className="container p-3">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Photo Url" />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder="Mobile Number" />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Tiltle" />
                                </div>
                                <div className="mb-2">
                                    <select className="form-control">
                                        <option vlaue="">Select Group</option>
                                        <option vlaue="">Friend</option>
                                        <option vlaue="">Family</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <input type="submit" className="btn btn-warning me-2" value="Update" />
                                    <Link to={'/contacts/list'} className="btn btn-dark">Close</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
                        alt=""
                        className="contact-img"/>
                    </div>
                    </div>
                    
                    </div>
                </div>
            </section>
        </React.Fragment>
        
    )

}

export default EditContact;