import React, { Component } from 'react';
import styles from './ProjectPage.module.css';
import { AiFillBackward, AiFillForward } from 'react-icons/ai';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Footer from '../../components/Footer/Footer';

class ProjectPage extends Component {
    render() {
        return(
            <div className={styles.ProjectPage}>
                <h1>Recent Projects</h1>
                <div className={styles.Project}>
                    <CarouselProvider 
                        isPlaying={true}
                        infinite={true}
                        naturalSlideHeight={75}
                        naturalSlideWidth={75}
                        totalSlides={3}
                    >
                        <Slider>
                            <Slide index={0}>
                                NextMusic! is a simple front-end app designed to help users discover new music by ingesting the Last.fm API. Check out the repo on <a href="https://github.com/johnrobertmahlan/johnrobertmahlan.github.io" target="_blank">GitHub</a>.
                                <br /><br />
                                <a href="https://johnrobertmahlan.github.io/">
                                    <Image hasMasterSpinner={true} src={'https://i.imgur.com/5TvqyAc.jpg'}></Image>
                                </a>
                            </Slide>
                            <Slide index={1}>
                                Know Your Vote is a quick Django app designed to help users learn more about upcoming elections by ingesting the Google Civic API. Check out the repo on <a href="https://github.com/johnrobertmahlan/rock-the-vote" target="_blank">GitHub</a>.
                                <br /><br />
                                <a href="https://do-you-know-your-vote.herokuapp.com/">
                                        <Image hasMasterSpinner={true} src={'https://i.imgur.com/aGi7iCK.jpg'}></Image>
                                </a>
                            </Slide>
                            <Slide index={2}>
                                Take A Hike is a MERN-stack app designed to help users find local hikes in their area. Check out the repo on <a href="https://github.com/johnrobertmahlan/take-a-hike" target="_blank">GitHub</a>.
                                <br /><br />
                                <a href="https://infinite-fortress-44591.herokuapp.com/">
                                    <Image hasMasterSpinner={true} src={'https://i.imgur.com/JxAsbuK.jpg'}></Image>
                                </a>
                            </Slide>
                        </Slider>
                        <div className={styles.ButtonField}>
                            <ButtonBack className={styles.Button}><AiFillBackward /></ButtonBack>
                            <ButtonNext className={styles.Button}><AiFillForward /></ButtonNext>
                        </div>
                    </CarouselProvider>
                    <Footer className={styles.Footer} />
                </div>
            </div>
        )
    }
};

export default ProjectPage;