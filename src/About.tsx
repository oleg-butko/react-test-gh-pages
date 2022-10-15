import React from 'react'

const divStyle = {
    color: 'white'
}

// interface IAboutProps {
//     title?: string
// }

// interface AppState {}

class About extends React.Component {
    props: any

    componentDidMount() {
        document.title = this.props.title
    }

    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>This section contains information about...</p>
                </main>
            </div>
        )
    }
}

export default About
