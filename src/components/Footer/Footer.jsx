import logo from '../../assets/img/AP_Logo_Min.png';
import iconLinkedIn from '../../assets/icons/icon-Linkedin.svg';
import iconGithub from '../../assets/icons/icon-Github.svg';

const linkedin = 'https://www.linkedin.com/in/apradoslink/';
const github = 'https://github.com/prados91';

import './Footer.css';

const Footer = () => {

    return (
        <footer className='footer_container'>
            <div class='container'>
                <div class='row align-items-center'>
                    <div class='col-12 col-sm-6'>
                        <img src={logo} alt='Logo' class='footer_logo' />
                    </div>
                    <div class='col-12 col-sm-6 text-center text-sm-end'>
                        <div class='social-icon'>
                            <a href={linkedin} target='_blank'>
                                <img src={iconLinkedIn} alt='Linkedin icon' />
                            </a>
                            <a href={github} target='_blank'>
                                <img src={iconGithub} alt='GitHub icon' />
                            </a>
                        </div>
                        <p class='footer_text'>Copyright 2025 - All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
