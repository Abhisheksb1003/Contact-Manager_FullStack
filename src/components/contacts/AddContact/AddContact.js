import React from 'react';
import { Link } from 'react-router-dom';

const AddContact=()=>{
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <i className="fst-italic">The sun dipped below the horizon, casting a golden glow across the tranquil sea, while the gentle waves whispered secrets to the sandy shore The sun dipped below the horizon, casting a golden glow across the tranquil sea,the horizon, casting a golden glow across the tranquil sea, while the gentle waves whispered secrets to the sandy shore.</i>
                        </div>
                    </div>
                    <div className="container mt-3">
                    <div className="row">
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
                                    <input type="submit" className="btn btn-success me-2" value="Create" />
                                    <Link to={'/contacts/list'} className="btn btn-dark">Close</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
};

export default AddContact;