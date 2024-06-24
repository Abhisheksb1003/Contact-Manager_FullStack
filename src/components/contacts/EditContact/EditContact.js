import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Contactservices } from "../../../services/ContactServices";
import Spinner from "../../Spinner/Spinner";

const EditContact = () => {
    const navigate = useNavigate(); // Correctly invoke useNavigate

    const { contactId } = useParams();

    const [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            contact: '',
            email: '',
            company: '',
            title: '',
            groupId: ''
        },
        errorMessage: ""
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                setState(prevState => ({ ...prevState, loading: true }));
                let response = await Contactservices.getContact(contactId);
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    contact: response.data
                }));
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    errorMessage: error.message
                }));
            }
        };

        fetchContact();
    }, [contactId]);

    const updateInput = (e) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [e.target.name]: e.target.value
            }
        });
    }

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            let response = await Contactservices.updateContact(state.contact, contactId);
            if (response) {
                navigate('/contacts/list', { replace: true });
            }

        } catch (error) {
            setState({ ...state, errorMessage: error.message });
            navigate(`/contacts/edit/${contactId}`, { replace: false });
        }
    }

    const { loading, contact, errorMessage } = state;

    return (
        <React.Fragment>
            {
                loading ? <Spinner /> : (
                    <React.Fragment>
                        <section className="add-contact p-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <p className="h4 text-danger fw-bold">Update Contact</p>
                                        <i className="fst-italic">The sun dipped below the horizon, casting a golden glow across the tranquil sea, while the gentle waves whispered secrets to the sandy shore.</i>
                                    </div>
                                </div>
                                <div className="container p-3">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <form onSubmit={submitForm}>
                                                <div className="mb-2">
                                                    <input
                                                        required
                                                        name="name"
                                                        value={contact.name}
                                                        onChange={updateInput}
                                                        type="text" className="form-control" placeholder="Name" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        required
                                                        name="photo"
                                                        value={contact.photo}
                                                        onChange={updateInput}
                                                        type="text" className="form-control" placeholder="Photo Url" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        required
                                                        name="contact"
                                                        value={contact.contact}
                                                        onChange={updateInput}
                                                        type="number" className="form-control" placeholder="Mobile Number" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        required
                                                        name="email"
                                                        value={contact.email}
                                                        onChange={updateInput}
                                                        type="email" className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        required
                                                        name="company"
                                                        value={contact.company}
                                                        onChange={updateInput}
                                                        type="text" className="form-control" placeholder="Company" />
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        required
                                                        name="title"
                                                        value={contact.title}
                                                        onChange={updateInput}
                                                        type="text" className="form-control" placeholder="Title" />
                                                </div>
                                                <div className="mb-2">
                                                    <select
                                                        required
                                                        name="groupId"
                                                        value={contact.groupId}
                                                        onChange={updateInput}
                                                        className="form-control">
                                                        <option value="">Select Group</option>
                                                        <option value="Friend">Friend</option>
                                                        <option value="Family">Family</option>
                                                    </select>
                                                </div>
                                                <div className="mb-4">
                                                    <input type="submit" className="btn btn-warning me-2" value="Update" />
                                                    <Link to={'/contacts/list'} className="btn btn-dark">Close</Link>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-8">
                                            <img src={contact.photo}
                                                alt=""
                                                className="contact-img" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

export default EditContact;
