import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () =>{
    return(
        <div className = 'section-container'>
            <Header 
                 heading = "About Me."
                 details = "Web Developer | Android App Developer | MCA 2020-2022"
            />

            <div className = "about-main">
                <div className = "about-main-left">
                    {/* Sub Section 1 */}
                    <h3 className = "about-sub-head">Student</h3>
                    <p className = "about-details">
                        I'm a pre-final year postgraduate pursuing Master of Computer Applications from Bharati Vidyapeeth's Institute of Computer Applications and Management(BVICAM), New Delhi.
                    </p>

                    {/* Sub Section 2 */}
                    <h3 className = "about-sub-head">Competitive Coder</h3>
                    <p className = "about-details">
                        I've solved more than 500 questions on platforms like Leetcode, HackerRank, HackerEarth and InterviewBit. I'm a 4-star coder in Java on HackerRank.
                    <a
                        className = "about-link-element"
                        href = "https://www.hackerrank.com/tanvimalhan98"
                        > My HackerRank Profile</a>
                    </p>

                </div>
                <div className = "about-main-right">
                    <img src = {aboutAnime} alt = "animation" className = "about-anime" />

                </div>
            </div>
            
            <FooterLink
                 phrase = "Check out my "
                 link = "projects!"
                 toAddress = '/projects'
            />

            {/*Vector Frame! */}
            <div className = "vector-frame">
                <img src = {aboutVector} className = "about-vector" alt ="about" />

            </div>
        
        </div>
    );
};

export default About;