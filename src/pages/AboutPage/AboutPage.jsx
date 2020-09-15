import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return(
            <div className={styles.AboutPage}>
                <div className={styles.Bio}>
                    <Fade left>
                        <h5>
                        I am a full stack web developer based in Denver, Colorado. I am a fan of clean, crisp code and simple, elegant design, and I strive to achieve both in my work. I am a lifelong learner (and recovering academic) who holds a Ph.D. in philosophy from the <a href="https://philosophy.virginia.edu/" target="_blank">University of Virginia</a> and is a recent graduate of General Assembly's <a href="https://generalassemb.ly/education/software-engineering-immersive-remote-flex" target="_blank">Software Engineering Immersive Remote Flex Program</a>. I am always looking for the next challenge.
                        </h5>
                    </Fade>
                    <Fade right>
                        <h5>
                        With more than a decade of experience teaching philosophy at such institutions as the <a href="https://uwm.edu/" target="_blank">University of Wisconsin-Milwaukee</a>, the <a href="https://www.virginia.edu/" target="_blank">University of Virginia</a>, <a href="https://www.aucegypt.edu/home" target="_blank">The American University in Cairo</a>, the <a href="https://www.richmond.edu/" target="_blank">University of Richmond</a>, and the <a href="https://www.umw.edu/" target="_blank">University of Mary Washington</a>, I bring a passion and talent for illuminating challenging concepts and facilitating communication between many stakeholders.
                        </h5>
                    </Fade>
                    <Fade left>
                        <h5>
                        When I'm not writing code, I enjoy reading a wide variety of fiction and non-fiction, going to punk rock shows, and - more recently, since I moved to Denver - hiking.
                        </h5>
                    </Fade>
                    <div className={styles.ButtonField}>
                        <button className={styles.Button} type="submit" value="Code">Code</button>
                        <button className={styles.Button} type="submit" value="Philosphy">Philosophy</button>
                    </div>
                </div>
                <Footer className={styles.Footer}/>
            </div>
        )
    }
}

export default AboutPage;