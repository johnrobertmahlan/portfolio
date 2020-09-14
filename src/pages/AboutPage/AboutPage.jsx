import React, { Component } from 'react';
// import Slider from 'react-animated-slider';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return(
            <div className={styles.AboutPage}>
                <div className={styles.Bio}>
                    <h5>
                        I am a full stack web developer based in Denver. Right now, I am an Implementation Engineer at <a href="https://drizly.com/" target="_blank">Drizly</a>. 
                        <br /><br />
                        Before becoming a developer, I taught philosophy for more than a decade at the <a href="https://uwm.edu/" target="_blank">University of Wisconsin-Milwaukee</a>, the <a href="https://www.virginia.edu/" target="_blank">University of Virginia</a>, <a href="https://www.aucegypt.edu/home" target="_blank">The American University in Cairo</a>, the <a href="https://www.richmond.edu/" target="_blank">University of Richmond</a>, and the <a href="https://www.umw.edu/" target="_blank">University of Mary Washington</a>.
                    </h5>
                </div>
                {/* <Slider>
                    {content.map((article, index) => <div key={index}>
                        <h2>Title</h2>
                        <p>Description</p>
                    </div>)}
                </Slider> */}
                <Footer />
            </div>
        )
    }
}

export default AboutPage;