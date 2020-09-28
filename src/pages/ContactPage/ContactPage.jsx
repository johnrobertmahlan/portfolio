import React, { Component } from 'react';
import styles from './ContactPage.module.css';
import Footer from '../../components/Footer/Footer';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ContactPage extends Component {
    render() {
        return(
            <div className={styles.ContactPage}>
                BUILD THIS WITH NODEMAILER
                <Footer className={styles.Footer}/>
            </div>
        )
    }
}

export default ContactPage;