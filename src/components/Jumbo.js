import React from 'react'
import { BrowserRouter as Router, Route, Link }
    from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap'

const baseURL = 'http://localhost:3000';


function Jumbo(props) {
    return (
        <Jumbotron>
            <h1>Welcome Teachers!</h1>
            <p>
                This is a simple tool to help you track student progress with the goal of being able to better assist you with your next steps for your students..
            </p>
            <p>
                <Link to={`/TeacherList`} variant="primary"><Button variant="primary">Get Started</Button></Link>
            </p>
        </Jumbotron>
    )
}

export default Jumbo
