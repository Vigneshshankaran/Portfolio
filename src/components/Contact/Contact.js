import React, { useState } from 'react';
import './contact.css';
import { GrLocation, GrPhone, GrMailOption } from "react-icons/gr";




export default function Contact() {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };


    return (
        <>
            <div className="contacts-details" id="contact">
                <h1> <span className='underline-box'>Contact</span></h1>
            </div>
            <div className="wapper">
                <div className="container">
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                < GrLocation className="icons" />
                                <div className="topic"> Address</div>
                                <div className="text-one">Chennai, Tamilnadu</div>
                                <div className="text-two details">India</div>
                            </div>
                            <div className="phone details">
                                < GrPhone className="icons"/>
                                <div className="topic"> Phone</div>
                                <div className="text-one">+917200596072</div>
                                {/* <div className="text-two details"></div> */}
                            </div>
                            <div className="email details">
                                <GrMailOption className="icons" />
                                <div className="topic">Email</div>
                                <div className="text-one">vigneshshankaran@hotmail.com</div>
                                {/* <div className="text-two details"></div> */}
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="topic-text">Get In touch</div>
                            <div className="p-txt">
                                <p>If you like my work or if you want to get in touch with me, please leave a message.</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-box">
                                    <input type="text" id="name" required placeholder="Enter Your Name" />
                                </div>
                                <div className="input-box">
                                    <input type="email" id="email" required placeholder="Enter Your Email" />
                                </div>
                                <div className="input-box massage-box">
                                    <textarea id="message" required placeholder="Enter Your Message" />
                                </div>
                                <div className="button">
                                    <button type="submit">{status}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
