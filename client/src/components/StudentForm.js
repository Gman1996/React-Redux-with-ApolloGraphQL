import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getStudentsQuery = gql`
  {
    students{
      name
      email
      grade
      gender{
        gender
      }
    }
  }
`
class StudentForm extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
          Student Form Here
      </div>
    );
  }
}

export default graphql(getStudentsQuery)(StudentForm);
