import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Contactservices } from '../../../services/ContactServices';

const AddContact=()=>{

    let navigate=useNavigate();

    let [state,setState]=useState({
        loading:false,
        contact:{
            name:'',
            photo:'',
            contact:'',
            email:'',
            company:'',
            title:'',
            groupId:''
        },
        errorMessage:''
    })

    let updateInput=(e)=>{
        setState({
            ...state,
            contact:{
                ...state.contact,
                [e.target.name]:e.target.value
            }
        })
    }

    let submitForm= async(event)=>{
        event.preventDefault()
        try{
            let response=await Contactservices.createContact(state.contact)
            if(response){
                navigate('/contacts/list', {replace:true})
            }

        }
        catch(error){
            setState({...state,errorMessage:error.message})
            navigate('/contacts/add', {replace:false})
        }

    }

let {loading,contact,errorMessage}=state

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
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                    required={true}
                                    name="name"
                                    value={contact.name}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="photo"
                                    value={contact.photo}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Photo Url" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="contact"
                                    value={contact.contact}
                                    onChange={updateInput}
                                    type="number" className="form-control" placeholder="Mobile Number" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="email"
                                    value={contact.email}
                                    onChange={updateInput}
                                    type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="company"
                                    value={contact.company}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="title"
                                    value={contact.title}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Tiltle" />
                                </div>
                                <div className="mb-2">
                                    <select 
                                    required={true}
                                    name="groupId"
                                    value={contact.groupId}
                                    onChange={updateInput}
                                    className="form-control">
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