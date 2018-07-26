import React, { Component } from 'react';
import ReactDOM from "react-dom";

class ListStudents extends Component {
  render(){
    let {student} = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.gender.gender}</td>
            <td>{student.grade}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ListStudents;
