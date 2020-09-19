import React, { Component } from 'react';
import styles from './DevPage.module.css';
import { FaHtml5, FaNode, FaReact, FaGitSquare, FaGithub } from 'react-icons/fa';
import { SiCsswizardry, SiJavascript, SiPython, SiPostgresql} from 'react-icons/si';
import { DiDjango, DiRuby } from 'react-icons/di';
import Footer from '../../components/Footer/Footer';

const iconStyle = {
    color: '#61dafb',
    padding: '10px'
  }

class DevPage extends Component {
    render() {
        return(
            <div className={styles.DevPage}>
                <div className={styles.Content}>
                    SOME MORE STUFF ABOUT CODING HERE
                    <div className={styles.Tech}>
                        <FaHtml5 style={iconStyle}/>
                        <SiCsswizardry style={iconStyle}/>
                        <SiJavascript style={iconStyle}/>
                        <FaNode style={iconStyle}/>
                        {/* EXPRESS AND MONGODB */}
                        <FaReact style={iconStyle}/>
                        <SiPython style={iconStyle}/>
                        <DiDjango style={iconStyle}/>
                        <SiPostgresql style={iconStyle}/>
                        <DiRuby style={iconStyle}/>
                        <FaGitSquare style={iconStyle}/>
                        <FaGithub style={iconStyle}/>
                    </div>
                    USE A CAROUSEL FOR YOUR PROJECTS
                    <Footer className={styles.Footer}/>
                </div>
            </div>
        )
    }
}

export default DevPage;