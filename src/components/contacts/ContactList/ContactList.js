import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contactservices } from "../../../services/ContactServices";
import Spinner from "../../Spinner/Spinner";  // Make sure this path is correct

const ContactList = () => {

    const [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: ""
    });

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setState(prevState => ({ ...prevState, loading: true }));
                let response = await Contactservices.getALLContacts();
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    contacts: response.data,
                    errorMessage: ""
                }));
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    errorMessage: error.message
                }));
            }
        };

        fetchContacts();
    }, []);

    let { loading, contacts, errorMessage } = state;

    return (
        <React.Fragment>

            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"></i>New
                                    </Link>
                                </p>
                                <p className="fst-italic">This program defines a function add_matrices that takes two 2D arrays (matrices) as input, iterates over each element, adds corresponding elements, and returns the resultant matrix. The input matrices MT1 and MT2 are then added using this function, and the result is printed.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"></div>
                            <form className="row">
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Search Names" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : 
                <React.Fragment>
                    <section className="contact-list">
                        <div className="container">
                            <div className="row">
                                {
                                    contacts.length>0 &&
                                    contacts.map(contact=>{
                                        return (<div className="col-md-6" key={contact.id}>
                                            <div className="card my-2">
                                                <div className="card-body">
                                                    <div className="row align-items-center d-flex justify-content-around">
                                                        <div className="col-md-4">
                                                            <img src={contact.photo}
                                                                alt=""
                                                                className="contact-img" />
                                                        </div>
                                                        <div className="col-md-7">
                                                            <ul className="list-group">
                                                                <li className="list-group-item list-group-item-action">
                                                                    Name:<span className="fw-bold">{contact.name}</span>
                                                                </li>
                                                                <li className="list-group-item list-group-item-action">
                                                                    Mobile Number:<span className="fw-bold">{contact.contact}</span>
                                                                </li>
                                                                <li className="list-group-item list-group-item-action">
                                                                    Email ID:<span className="fw-bold">{contact.email}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                                            <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                                <i className="fa fa-eye" />
                                                            </Link>
                                                            <Link to={`/contacts/edit/:ContactId`} className="btn btn-primary my-1">
                                                                <i className="fa fa-pen" />
                                                            </Link>
                                                            <button className="btn btn-danger my-1">
                                                                <i className="fa fa-trash" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    })
                                }
                                
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }
        </React.Fragment>
    );

}

export default ContactList;