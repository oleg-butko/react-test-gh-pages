import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'

const isGithub = window.location.host.endsWith('github.io')

class App extends React.Component {
    render() {
        return (
            <Router basename={isGithub ? '/react-test-gh-pages' : ''}>
                <div className="App">
                    <nav>
                        <ul id="navigation">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App
