import React, { Component } from 'react';
import styles from './PhilPage.module.css';
import Footer from '../../components/Footer/Footer';

class PhilPage extends Component {
    render() {
        return(
            <div className={styles.PhilPage}>
                USE MODALS FOR TEACHING VS RESEARCH
                <Footer className={styles.Footer}/>
            </div>
        )
    }
}

export default PhilPage;