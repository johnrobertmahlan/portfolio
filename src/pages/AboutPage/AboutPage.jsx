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
                        <h3>John Robert Mahlan</h3>
                    </Fade>
                    <Fade left>
                        <h5>
                        I am a full stack web developer based in Denver. I am a fan of clean, crisp code and simple, elegant design, and I strive to achieve both in my work. I am also a lifelong learner who earned a Ph.D. in philosophy before becoming a developer. I work hard and am always looking for the next challenge.
                        </h5>
                    </Fade>
                    <Fade right>
                        <h5>
                        After more than a decade teaching philosophy at the university level, I decided to bring my passion for teamwork, leadership, and clear communication to a new industry. I love working through thorny problems with my peers and sharing hard-won insights with others. I thrive in positive environments when I get the opportunity to tackle a new challenge with my team and increase our knowledge.  
                        </h5>
                    </Fade>
                    <Fade left>
                        <h5>
                        Originally from New York, I have also lived in Scotland, Wisconsin, California, Virginia, Egypt, and now Colorado. When I'm not working (or moving), I enjoy reading, listening to music, traveling, and hiking (every now and then).
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