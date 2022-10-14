import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import About from './About'
import Home from './Home'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul id="navigation">
                            <li>
                                <Link to="/react-test-gh-pages">Home</Link>
                            </li>
                            <li>
                                <Link to="/react-test-gh-pages/about">About</Link>
                            </li>
                            <li>
                                <Link to="/react-test-gh-pages/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path="/react-test-gh-pages" element={<Home />} />
                        <Route path="/react-test-gh-pages/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App
