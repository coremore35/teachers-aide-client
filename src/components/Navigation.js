



import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Modal, Button } from 'react-materialize';
import AddStudent from './components/AddStudent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addStuToggle: false,
        }

    }



    render() {
        return (
            <div className="App">
                <Router>
                    <nav className="light-blue darken-4">
                        <div className="nav-wrapper ">
                            <div href="#" className="brand-logo">Quick Check <span>&#9989;</span></div>

                            <div id="nav-mobile" className="right">
                                <Link to="/">HOME</Link>
                                <Link to="/add_teacher">ADD TEACHER</Link>
                                <Link to="/add_students">ADD STUDENTS</Link>
                                <Link to="/lessons">LESSONS</Link>
                                <Link to="/grades">GRADES</Link>
                            </div>
                        </div>
                    </nav>
                    { /*         <Route to="/" exact component={} />
*/}          {   /*       <Route to="/add_teacher" component={} />
    */}          <Route to="/add_students" component={AddStudent} />
                    {/*<Route to="/lessons" component={} />
  <Route to="/grades" component={} />*/}
                </Router>
            </div>
        );
    }
}

export default App;
