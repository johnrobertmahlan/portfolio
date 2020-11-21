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
                <Flip left>
                    <h2>John Robert Mahlan</h2>
                </Flip>
                <div className={styles.BioImage}>
                    <Fade left>
                        <img className={styles.Profile} src="https://i.imgur.com/jIf1H2h.jpg?1"></img>
                    </Fade>
                    <Fade right>
                    <div className={styles.BioContent}>
                        <h5>
                            I am a full-stack software engineer with a Ph.D. in philosophy, a humanist working in tech, a recovering academic and lifelong learner.
                        </h5>
                        <h5>
                            I am an Implementation Engineer at <a href="https://drizly.com/" target="_blank">Drizly</a> and a recent graduate of <a href="https://generalassemb.ly/" target="_blank">General Assembly's</a> Software Engineering Immersive Remote Flex Program. Before this, I spent a decade teaching philosophy at the <a href="https://uwm.edu/" target="_blank">University of Wisconsin - Milwaukee</a>, the <a href="https://www.virginia.edu/" target="_blank">University of Virginia</a>, <a href="https://www.aucegypt.edu/home" target="_blank">The American University in Cairo</a>, the <a href="https://www.richmond.edu/" target="_blank">University of Richmond</a>, and the <a href="https://www.umw.edu/" target="_blank">University of Mary Washington</a>.
                        </h5>
                        <h5>
                        Originally from New York, I have also lived in Scotland, Wisconsin, Virginia, California, Egypt, and now Colorado. When I'm not working (or moving), I enjoy reading, listening to music, traveling, and - sometimes - hiking. 
                        </h5>
                        <div className={styles.ButtonField}>
                            <Link to="/about/dev" className={styles.Button}>Development</Link>
                            <Link to="/about/phil" className={styles.Button}>Philosophy</Link>
                        </div>
                    </div>
                    </Fade>
                </div>
                <Flip right>
                    <Footer className={styles.Footer}/>
                </Flip>
            </div>
        )
    }
}

export default AboutPage;