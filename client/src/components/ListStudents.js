import React, { Component } from 'react';
import ReactDOM from "react-dom";

class ListStudents extends Component {
  constructor(props){
    super(props);
  }

  handleDelete = (props)=>{
    this.props.delete(this.props.student.id);
  }

  handleEdit = (props) =>{
    this.props.toggleEdit(this.props.student.id);
  }

  render(){
    let {student} = this.props;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.gender.gender}</td>
              <td>{student.grade}</td>
              <td><button onClick={(e) => this.handleEdit(e)}>Edit</button></td>
              <td><button onClick={(e) => this.handleDelete(e)}>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListStudents;
