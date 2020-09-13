import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return(
            <div className={styles.AboutPage}>
                <h1>john robert mahlan</h1>
                <h3>i am a full stack web developer with a particular interest in backend development. i am an implementation engineer at <a href="https://drizly.com/" target="_blank">drizly</a> and a recent graduate of <a href="https://generalassemb.ly/" target="_blank">general assembly</a>'s software engineering immersive remote flex program.
                </h3>
                <Footer />
            </div>
        )
    }
}

export default AboutPage;