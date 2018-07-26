import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {graphql, compose} from 'react-apollo';
import {getStudentsQuery, addStudentMutation} from '../queries/queries';

class StudentForm extends Component {
  constructor(){
    super();
    this.state = {
      studentName: [],
      registerName: '',
      registerEmail: '',
      registerGrade: '',
      registerGender: ''
    };

    this.displayStudents = this.displayStudents.bind(this);
  }

  displayStudents(e){
    e.preventDefault();
    let data = this.props.data;
    let displayname = [];

    data.students.map((student) => {
      displayname.push(student.name);
    });
    this.setState ({
      studentName: displayname
    });
  }

  studentSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    let format;
    let formatted = this.state.studentName.map((item, index) => {return format = (<li key={index}>{item}</li>)});
    return(
      <div>
        <p>
          <button onClick={(e) => this.displayStudents(e)}>View Students</button>
        </p>

        <p>
        {formatted}
        </p>
          Register Student
          <div>
              <input type="name" onChange={(e) => this.setState({registerName: e.target.value})} placeholder="name"/>
          </div>
          <div>
              <input type="email" onChange={(e) => this.setState({registerEmail: e.target.value})} placeholder="email"/>
          </div>
          <div>
              <input type="gender" onChange={(e) => this.setState({registerGender: e.target.value})} placeholder="gender"/>
          </div>
          <div>
              <input type="grade" onChange={(e) => this.setState({registerGrade: e.target.value})} placeholder="grade"/>
          </div>
          <div>
              <button onClick={(e) => this.studentSubmit(e)}>Submit</button>
          </div>
      </div>
    );
  }
}

export default compose(
  graphql(getStudentsQuery,{name: "getStudentsQuery"}),
  graphql(addStudentMutation,{name: "addStudentMutation"})
)
(StudentForm);
