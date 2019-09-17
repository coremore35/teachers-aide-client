import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios'
import cellEditFactory from 'react-bootstrap-table2-editor';


// function beforeSaveCell(oldValue, newValue, row, column, done) {
//     setTimeout(() => {
//         if (confirm('Do you want to accep this change?')) {
//             done(true);
//         } else {
//             done(false);
//         }
//     }, 0);
//     return { async: true };
// }

class LessonCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                dataField: 'student.first_name',
                text: 'First Name',
                sort: true
            },
            {
                dataField: 'student.last_name',
                text: 'Last Name',
                sort: true

            },
            {
                dataField: "student_grade",
                text: 'Grade',
                sort: true
            }]
        }
    }
    // async afterSaveCell() {

    // }



    render() {
        console.log(this.props.selectedLesson)
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <h4>Lesson Check</h4>
                <h5>Lesson: {this.props.selectedLesson.lesson_name}</h5>

                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={this.props.selectedLesson}
                    columns={this.state.columns}
                    cellEdit={cellEditFactory({
                        mode: 'click'
                    })}

                ></BootstrapTable>

            </div>
        )
    }
}

export default LessonCheck;