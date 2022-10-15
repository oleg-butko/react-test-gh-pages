import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import { useEffect } from 'react'

const Error404 = props => {
    useEffect(() => {
        document.title = props.title || ''
    }, [props.title])
    return (
        <div style={{ color: 'red' }}>
            <h2>Page not found</h2>
        </div>
    )
}

const isGithub = window.location.host.endsWith('github.io')

class App extends React.Component {
    render() {
        return (
            <Router basename={isGithub ? '/react-test-gh-pages' : ''}>
                <div className="App">
                    <nav
                        style={{
                            borderBottom: 'solid 1px',
                            paddingTop: '.2rem',
                            paddingBottom: '.5rem'
                        }}
                    >
                        <Link to="/">Home</Link>
                        <Link style={{ margin: '1rem' }} to="/about">
                            About
                        </Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <Routes>
                        <Route exact path="/" element={<Home title="CRA - Home" />} />
                        <Route path="/about" element={<About title="CRA - About" />} />
                        <Route path="*" element={<Error404 title="CRA - Error 404" />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App
