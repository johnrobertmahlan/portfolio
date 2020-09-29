import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return(
            <div className={styles.AboutPage}>
                <div className={styles.Bio}>
                    <Fade top>
                        <img className={styles.Profile} src="https://i.imgur.com/jIf1H2h.jpg?1"></img>
                    </Fade>
                    <Fade left>
                        <h5>
                        I am a full stack web developer based in Denver. I am a fan of clean, crisp code and simple, elegant design, and I strive to achieve both in my work. I am also a philosopher who enjoys grappling with foundational questions about the nature of existence, goodness, and reason. I am a lifelong learner who is always looking for the next challenge.
                        </h5>
                    </Fade>
                    <Fade right>
                        <h5>
                        After earning my Ph.D. in philosophy and spending more than a decade teaching philosophy at the university level, I decided to bring my passion for teamwork, leadership, and clear communication to tech. I love working through thorny problems with my peers and sharing hard-won insights with others. I thrive in positive, fast-paced environments.
                        </h5>
                    </Fade>
                    <Fade left>
                        <h5>
                        Originally from New York, I have also lived in Scotland, Wisconsin, Virginia, California, Egypt, and now Colorado. When I'm not working (or moving), I enjoy reading, listening to music, traveling, and - sometimes - hiking.
                        </h5>
                    </Fade>
                    <Fade bottom>
                        <div className={styles.ButtonField}>
                        <Link to="/about/dev" className={styles.Button}>Development</Link>
                        <Link to="/about/phil" className={styles.Button}>Philosophy</Link>
                        </div>
                    </Fade>
                </div>
                <Footer className={styles.Footer}/>
            </div>
        )
    }
}

export default AboutPage;