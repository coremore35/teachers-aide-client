import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, Form, Card } from 'react-bootstrap'
import axios from 'axios';

const baseURL = 'http://localhost:3000';

class TeacherLanding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lesson_name: '',
            modal: false
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setRedirect = this.setRedirect.bind(this)
    }

    setRedirect = () => {
        this.setState({
            redirect: !this.state.redirect
        });
    };

    handleChange(event) {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
        console.log("lesson_name: ", this.state.lesson_name)
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('Selected teacher: ', this.props.selectedTeacher.id)
        const response = await axios.post(`${baseURL}/lessons`,
            {
                lesson_name: this.state.lesson_name,
                teacher_id: this.props.selectedTeacher.id
            })
        this.setState({
            lesson_name: '',
            teacher_id: ''
        })
        this.props.handleAddLesson(response.data)
        this.setRedirect()
        this.toggle()
    }

    async handleDelete(deletedLesson) {
        console.log("deleted Lesson", deletedLesson.id)
        await axios.delete(`${baseURL}/lessons/${deletedLesson.id}`);
        this.setRedirect()
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }



    render() {
        console.log('TEACHER LAnding: ', this.props)
        return (
            <div>
                <h2>Welcome Educator {this.props.selectedTeacher.name}!</h2>

                <div className="container">
                    {this.props.allLessons.map(lesson => {
                        console.log("LessonList ID: ", lesson.id)
                        return (

                            <div key={lesson.id} onClick={() => {
                                this.props.getLessonID(lesson.id)

                            }}>

                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title>{lesson.lesson_name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Created: {lesson.created_at}}</Card.Subtitle>

                                        <Card.Link>
                                            <Link to={`/teacher/${this.props.selectedTeacher.id}/lessons/${lesson.id}`} variant="primary"><Button variant="primary" onClick={() => { this.props.getStudentData(lesson.id) }}>View Lesson</Button></Link>
                                        </Card.Link>
                                        <Card.Link>
                                            <Button variant="danger" onClick={() => this.handleDelete(lesson)}>Delete</Button>
                                        </Card.Link>

                                    </Card.Body>

                                </Card>
                            </div>
                        )
                    })}

                    {(this.state.modal === false) ?
                        <Button variant="info" onClick={this.toggle}>
                            Add New Lesson
                            </Button>
                        : (<Modal show={this.toggle} >
                            <Form onSubmit={this.handleSubmit} className='add-lesson-form'>
                                <Modal.Header>
                                    <Modal.Title>Add Lesson</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Label htmlFor='lesson_name' />
                                    <Form.Control
                                        type='text'
                                        id='lesson_name'
                                        name='lesson_name'
                                        onChange={this.handleChange}
                                        placeholder='Lesson Title'
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.toggle}>
                                        Close
                                    </Button>
                                    <Button
                                        type='submit'
                                        variant="primary"
                                        className='primary'
                                    >Submit</Button>


                                </Modal.Footer>
                            </Form>
                        </Modal>)}

                </div>
                {this.state.redirect && <Redirect to={`/teacher/${this.props.selectedTeacher.id}`} />}
            </div>
        )
    }
}

export default TeacherLanding;