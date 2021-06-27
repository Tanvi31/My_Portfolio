 import React from 'react';
 import ReactDOM  from 'react-dom';
 import './Modal.css';

 const Modal = ({closeModal}) => {
     return ReactDOM.createPortal(
         <div onClick = {closeModal} className = 'modal-overlay'>
             <div onClick = {(e) => e.stopPropagation()} className = "modal-container">
                <div className = "upper-section">
                    <h1>Latest Development !</h1>
                    <p onClick = {closeModal} className = "close">&times;</p>
                </div>
                <div className = "middle-section">
                    <h3>Completed a project on Web Scraping using NodeJS !</h3>
                    <p>Do you wish to learn? </p>
                    <p>
                    I built ESPN Cricinfo webscraper that scrapes whole IPL using NodeJS. Check it out ! 
                    </p>
                    <p> I am planning to create a new web application using MERN soon.
                     
                    </p>  
                </div>
                <div className = "lower-section">
                     <a onClick={closeModal} className = "modal-btn btn-red">Close</a>
                      <a 
                         href = "https://www.youtube.com/watch?v=1mS06Ni4QT0&list=PL-Jc9J83PIiG6ounHtDqugH2Vn9OS19zk&index=3" 
                         target = "_blank" 
                         rel = "nonreferrer" 
                         className = "modal-btn btn-green" >
                            Start Tutorial
                      </a>

                </div>
             </div>
         </div>,
         document.getElementById('modal')
     )
 }

 export default Modal; 