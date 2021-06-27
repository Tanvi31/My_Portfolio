import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () =>{
    return(
        <div className = "section-container">
            <Header 
             heading = "Get in touch."
             details = "Interested to collaborate? Feel free to drop me an email."       
            />

            <div className="contact-form-container">
                <form 
                  className = "contact-form"
                  action="https://formspree.io/f/mrgrlede"
                  method="POST">
                    <input
                        type = "email"
                        placeholder = "Your Email ID"
                        name = "_replyto"
                        className = "input-box email-input"
                      />

                      <textarea
                          type = "text"
                          placeholder = "Your Message"
                          name = "message"
                          className = "input-box body-input" >
                      </textarea> 
                      <button type = "submit" className = "contact-btn">
                          Send Email
                          </button> 
                </form> 
            </div>

            <div className="social-icons-container">
                <a href = "https://github.com/Tanvi31" className = "social-icon">
                   <img src = {github} alt = "social" />
                </a>
                <a href = "https://www.linkedin.com/in/tanvi-malhan-354661142" className = "social-icon">
                   <img src = {linkedin} alt = "social" />
                </a>
                <a href = "https://www.instagram.com/tanvi_malhan/" className = "social-icon">
                   <img src = {instagram} alt = "social" />
                </a>
            </div>
            


            <FooterLink 
                phrase = "Read more "
                link = "about me" 
                toAddress = "/about" 
            />

            <div className="vector-frame">
                <img
                    src = {contactVector}
                    alt = 'vector'
                    className = 'about-vector'
                />    
            </div>
        </div>
    );
};

export default Contact;