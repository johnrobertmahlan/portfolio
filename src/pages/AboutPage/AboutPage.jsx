import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return(
            <div className={styles.AboutPage}>
                <Fade top>
                    <div className={styles.BioImage}>
                        <img className={styles.Profile} src="https://i.imgur.com/jIf1H2h.jpg?1"></img>
                        <h2>JOHN ROBERT MAHLAN</h2>
                        <div className={styles.ButtonField}>
                            <a href="/about/#phil" className={styles.Button}>Philosophy</a>
                            <a href="/about/#dev" className={styles.Button}>Development</a>
                        </div>
                    </div>
                    <div className={styles.Bio}>
                        <h5>
                            I am a full-stack software engineer with a Ph.D. in philosophy, a humanist working in tech, a recovering academic and lifelong learner.
                            <br /><br />
                            I am an Implementation Engineer at <a href="https://drizly.com/" target="_blank">Drizly</a> and a recent graduate of <a href="https://generalassemb.ly/" target="_blank">General Assembly's</a> Software Engineering Immersive Remote Flex Program. Before this, I spent a decade teaching philosophy at the <a href="https://uwm.edu/" target="_blank">University of Wisconsin - Milwaukee</a>, the <a href="https://www.virginia.edu/" target="_blank">University of Virginia</a>, <a href="https://www.aucegypt.edu/home" target="_blank">The American University in Cairo</a>, the <a href="https://www.richmond.edu/" target="_blank">University of Richmond</a>, and the <a href="https://www.umw.edu/" target="_blank">University of Mary Washington</a>.
                            <br /><br />
                            Originally from New York, I have also lived in Scotland, Wisconsin, Virginia, California, Egypt, and now Colorado. When I'm not working (or moving), I enjoy reading, listening to music, traveling, and - sometimes - hiking. 
                        </h5>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div id={'phil'}>
                        PHILOSOPHY
                    </div>
                    <div id={'dev'}>
                        DEVELOPMENT
                    </div>
                </Fade>
                <Fade bottom>
                    <Footer className={styles.Footer}/>
                </Fade>
            </div>
        )
    }
}

export default AboutPage;