import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Contactservices } from "../../../services/ContactServices";
import Spinner from "../../Spinner/Spinner";

const ViewContact = () => {
    let { contactId } = useParams();

    const [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: '',
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                setState((prevState) => ({ ...prevState, loading: true }));
                let response = await Contactservices.getContact(contactId);
                setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    contact: response.data,
                }));
            } catch (error) {
                setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    errorMessage: error.message,
                }));
            }
        };

        fetchContact();
    }, [contactId]);

    let { loading, contact, errorMessage } = state;

    return (
        <React.Fragment>
            <section className="view-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">View Contact</p>
                            <p className="fst-italic">Nature has an uncanny ability to inspire awe and wonder, with its intricate ecosystems and breathtaking landscapes. From the majestic peaks of snow-capped mountains to the serene beauty of a quiet forest glade, each element of the natural world tells a unique story of resilience and harmony. The rustling of leaves in the wind, the gentle flow of a river, and the vibrant colors of a sunset all serve as reminders of the delicate balance that sustains life on Earth. Immersing ourselves in nature not only rejuvenates our spirit but also deepens our appreciation for the planet's diverse and interconnected web of life.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : 
                <React.Fragment>
                    {
                        Object.keys(contact).length>0 &&
                        <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <img src={contact.photo}
                                        alt=""
                                        className="contact-img" />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: <span className="fw-bold">{contact.name}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile Number: <span className="fw-bold">{contact.contact}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email ID: <span className="fw-bold">{contact.email}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Company: <span className="fw-bold">{contact.company}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Title: <span className="fw-bold">{contact.title}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Group: <span className="fw-bold">{contact.groupID}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    }
                </React.Fragment>
            }
        </React.Fragment>
    );
};

export default ViewContact;
