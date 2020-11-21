import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { Route, Switch, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import DevPage from './pages/DevPage/DevPage';
import PhilPage from './pages/PhilPage/PhilPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import './App.css';
const ReactRotatingText = require('react-rotating-text')

const iconStyle = {
  color: 'rgb(47, 216, 250)',
  padding: '10px',
  transition: '250ms'
}
class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <ReactRotatingText items={['hello, world', 'my name is john robert mahlan', 'and i am a philosopher and software engineer']} />
              <br />
              <div>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                <a href="https://github.com/johnrobertmahlan" target="_blank" style={iconStyle}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/johnrobertmahlan/" target="_blank" style={iconStyle}><FaLinkedin /></a>
                <Link to="/contact" style={iconStyle}><GrMail /></Link>
                <Link to="/about" style={iconStyle}><BsFillInfoCircleFill /></Link>
                </IconContext.Provider>
              </div>
            </header>
          </div>
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/about/dev">
          <DevPage />
        </Route>
        <Route exact path="/about/dev/projects">
          <ProjectPage />
        </Route>
        <Route exact path="/about/phil">
          <PhilPage />
        </Route>
      </Switch>
    )
  }
}




export default App;
