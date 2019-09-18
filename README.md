# Project Name

> Quick Check &#9989;

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## General info

Spending six years teaching in public schools, I always struggled to keep track of student understanding on the fly. The purpose of this app is to give teachers the ability to quickly assess student understanding. Once the data has been recorded, teachers will be able to visualize student understanding and better support students who need remediation or is ready for a challenge.

## Screenshots

![Example welcome](/public/images/welcome.png)
![Example keyword entry](/public/images/lessons.png)
![Example grade entries](/public/images/grades.png)

## Technologies

- HTML5
- CSS3
- Javascript ES6
- React
- Rails
- PostgreSQL
- Bootstrap for React

## Setup



## Code Examples

`

    ActiveRecord::Schema.define(version: 2019_09_17_181120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "grades", force: :cascade do |t|
    t.integer "student_grade"
    t.bigint "lesson_id", null: false
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lesson_id"], name: "index_grades_on_lesson_id"
    t.index ["student_id"], name: "index_grades_on_student_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.string "lesson_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "teacher_id"
    t.bigint "grades_id"
    t.index ["grades_id"], name: "index_lessons_on_grades_id"
    t.index ["teacher_id"], name: "index_lessons_on_teacher_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "grades_id"
    t.index ["grades_id"], name: "index_students_on_grades_id"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "grades", "lessons"
  add_foreign_key "grades", "students"
  add_foreign_key "lessons", "grades", column: "grades_id"
  add_foreign_key "lessons", "teachers"
  add_foreign_key "students", "grades", column: "grades_id"
end

`

`
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

`

## Features

List of features ready and TODOs for future development

- RESTful API
- Responsive web-design
- Takes user input to display student grades 

To-do list:

- At this point, I still need to add the create new student, add grades, and add charts to help visualize the data.

## Status

Project is: _in progress_, with plenty of room for growth as I gain more skills that can be applied.

## Contact

Created by Corey Morrison  corey.neil.morrison@gmail.com

- feel free to contact me!

Thank you

```

```
