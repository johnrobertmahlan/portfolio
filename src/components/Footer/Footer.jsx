import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import styles from './Footer.module.css';

const iconStyle = {
    color: '#61dafb',
    padding: '10px'
  }

const Footer = () => {
    return(
        <div className={styles.smIcons}>
            <Link to="/" style={iconStyle}><AiFillHome /></Link>
            <a href="https://github.com/johnrobertmahlan" target="_blank" style={iconStyle}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/johnrobertmahlan/" target="_blank" style={iconStyle}><FaLinkedin /></a>
            <Link to="/contact" style={iconStyle}><GrMail /></Link>
            <Link to="/about" style={iconStyle}><BsFillInfoCircleFill /></Link>
        </div>
    )
}

export default Footer;