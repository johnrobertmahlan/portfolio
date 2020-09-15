import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import AboutPage from './pages/AboutPage/AboutPage';
import './App.css';
const ReactRotatingText = require('react-rotating-text')

const iconStyle = {
  color: '#61dafb',
  padding: '10px'
}

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <ReactRotatingText items={['hello, world', 'my name is john robert mahlan', 'and i am a full stack web developer']} />
              <br />
              <div>
                <a href="https://github.com/johnrobertmahlan" target="_blank" style={iconStyle}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/johnrobertmahlan/" target="_blank" style={iconStyle}><FaLinkedin /></a>
                <Link to="/contact" style={iconStyle}><GrMail /></Link>
                <Link to="/about" style={iconStyle}><BsFillInfoCircleFill /></Link>
              </div>
            </header>
          </div>
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    )
  }
}




export default App;
