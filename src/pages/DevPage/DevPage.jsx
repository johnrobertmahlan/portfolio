import React, { Component } from 'react';
import styles from './DevPage.module.css';
import { FaHtml5, FaNode, FaReact, FaGitSquare, FaGithub } from 'react-icons/fa';
import { SiCsswizardry, SiJavascript, SiPython, SiPostgresql} from 'react-icons/si';
import { DiDjango, DiRuby } from 'react-icons/di';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from '../../components/Footer/Footer';

const iconStyle = {
    color: '#61dafb',
  }

class DevPage extends Component {
    render() {
        return(
            <div className={styles.DevPage}>
                <div className={styles.Content}>
                    <h3>Some Background</h3>
                    <div className={styles.Job}>
                        <p>My journey as a developer began in the spring of 2019, when I left my career as an academic and joined <a href="https://drizly.com/" target="_blank">Drizly</a>, where I currently work as an Implementation Engineer.</p>
                        <p>In this role, I work on Drizly's inventory data extraction pipeline. This involves writing, editing, and installing batch scripts and their associated SQL queries to onboard new retail partners, providing technical support for existing retail partners, and writing, editing, and deploying parsers to interpret the extracted data.</p>
                    </div>
                    <div className={styles.GA}>
                        <p>I am also a recent graduate of <a href="https://generalassemb.ly/" target="_blank">General Assembly's</a> Software Engineering Immersive Remote Flex Program.
                        This course provided 420+ hours of instruction in a wide variety of languages, frameworks, and technologies, such as:</p>
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
                    </div>
                    <h3>Recent Projects</h3>
                    <div className={styles.Project}>

                        <CarouselProvider 
                            naturalSlideHeight={125}
                            naturalSlideWidth={150}
                            totalSlides={2}
                        >
                            <Slider>
                                <Slide index={0}><a href="https://github.com/johnrobertmahlan/take-a-hike"><Image hasMasterSpinner={true} src={'https://i.imgur.com/JxAsbuK.jpg'}></Image></a></Slide>
                                <Slide index={1}>SECOND SLIDE</Slide>
                            </Slider>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </CarouselProvider>
                    </div>
                </div>
                <Footer className={styles.Footer}/>
            </div>
        )
    }
}

export default DevPage;