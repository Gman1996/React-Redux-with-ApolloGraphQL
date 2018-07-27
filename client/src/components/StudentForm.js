import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {graphql, compose} from 'react-apollo';
import ListStudents from './ListStudents';
import {getStudentsQuery, addStudentMutation, addGenderMutation, editStudentMutation, deleteStudentMutation} from '../queries/queries';

class StudentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      registerName: '',
      registerEmail: '',
      registerGrade: 0,
      registerGender: ''
    };
  }

  toggleStudentsView = (e)=>{
    e.preventDefault();
    this.setState (prevState => ({
      toggle: !prevState.toggle
    }));
  }


  delete = (id) =>{
    alert('deleted' + id);
    this.props.deleteStudentMutation({
      variables: {
        id: id,
      },
      refetchQueries: [{query: getStudentsQuery}]
    }).catch((err) => {console.log(err);});
  }

  edit = (id) =>{
    alert('edited' + id);
    //   this.props.editStudentMutation({
    //   variables: {
    //     id: '5b54af3b1024641028a153ce',
    //     name: (this.state.registerName.trim() !== '')?this.state.registerName:'' ,
    //     email: (this.state.registerEmail.trim() !== '')?this.state.registerEmail:'' ,
    //     grade: (this.state.registerGrade.trim() !== '')?this.state.registerGrade:'' ,
    //   }
    // }).catch((err) => {console.log(err);});
  }

  studentSubmit = (e) =>{
    e.preventDefault();

    this.props.addStudentMutation({
    variables: {
      name: this.state.registerName,
      email: this.state.registerEmail,
      grade: this.state.registerGrade
    },
    refetchQueries: [{query: getStudentsQuery}]
    });

    // this.props.addGenderMutation({
    // variables: {
    //   gender: this.state.registerGender
    // },
    // refetchQueries: [{query: getStudentsQuery}]
    // });
  }

  render(){
    const data = this.props.getStudentsQuery;
    let renderHTML;
    if(data.loading){
      return renderHTML = (<div>Loading...</div>)
    }

    return(
      <div>
        {renderHTML}
        <p>
          <button type='button' onClick={(e) => this.toggleStudentsView(e)}>View Students</button>
        </p>

        <div>
          {
            (this.state.toggle)?
            data.students.map((student, index) => {
              return (
                <ListStudents
                  key={student.id}
                  student={student}
                  delete={(e)=> this.delete(e)}
                  edit={(e)=> this.edit(e)}
                 />
              );
            }): null
          }
        </div>
        <div className='register'>
            Register Student
            <div>
                <input type="name" onChange={(e) => this.setState({registerName: e.target.value})} placeholder="name"/>
            </div>
            <div>
                <input type="email" onChange={(e) => this.setState({registerEmail: e.target.value})} placeholder="email"/>
            </div>
            <div>
                <input type="name" onChange={(e) => this.setState({registerGender: e.target.value})} placeholder="gender"/>
            </div>
            <div>
                <input type="name" onChange={(e) => this.setState({registerGrade: e.target.value})} placeholder="grade"/>
            </div>
            <div>
                <button onClick={(e) => this.studentSubmit(e)}>Submit</button>
            </div>
          </div>
      </div>
    );
  }
}

export default compose(
  graphql(getStudentsQuery,{name: "getStudentsQuery"}),
  graphql(addStudentMutation,{name: "addStudentMutation"}),
  graphql(addGenderMutation,{name: "addGenderMutation"}),
  graphql(editStudentMutation,{name: "editStudentMutation"}),
  graphql(deleteStudentMutation,{name: "deleteStudentMutation"})
)
(StudentForm);
