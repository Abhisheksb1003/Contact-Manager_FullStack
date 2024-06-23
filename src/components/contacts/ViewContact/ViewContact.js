import React from "react"
import { Link } from "react-router-dom"

const ViewContact=()=>{
    return (
        <React.Fragment>
            <section className="view-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">View Contact</p>
                            <p className="fst-italic">Nature has an uncanny ability to inspire awe and wonder, with its intricate ecosystems and breathtaking landscapes. From the majestic peaks of snow-capped mountains to the serene beauty of a quiet forest glade, each element of the natural world tells a unique story of resilience and harmony. The rustling of leaves in the wind, the gentle flow of a river, and the vibrant colors of a sunset all serve as reminders of the delicate balance that sustains life on Earth. Immersing ourselves in nature not only rejuvenates our spirit but also deepens our appreciation for the planet's diverse and interconnected web of life</p>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
                        alt=""
                        className="contact-img"/>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Name:<span className="fw-bold"> Deppa S Bikkannavar</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile Number:<span className="fw-bold"> 9113032141</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email ID:<span className="fw-bold"> deepa@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Company:<span className="fw-bold"> deepa@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Title:<span className="fw-bold"> deepa@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Group:<span className="fw-bold"> deepa@gmail.com</span>
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
        </React.Fragment>
    )

} 

export default ViewContact