import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStudentId: '',
      name: '',
      email: '',
      grade: 0
    };
  }

  componentDidMount() {
    const {studentDetails} = this.props;
    if (studentDetails) {
      studentDetails.map((studentDetail) => {
      const { name, email, grade } = studentDetail;
      this.setState({ name, email, grade });
    });
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdate = (e) =>{
    e.preventDefault();
    let student = {
      name: this.state.name,
      email: this.state.email,
      grade: this.state.grade
    }
    this.props.update(student);
  }

  render(){
    const {studentDetails} = this.props;
    const { name, email, grade } = this.state;
    return(
      studentDetails.map((detail) => {
        return(
          <div key={detail.id}>
            <h3>Edit here</h3>
            <p>Name: <input type="text" value={name} name="name" onChange={this.handleOnChange} /></p>
            <p>Email: <input type="text" value={email} name="email" onChange={this.handleOnChange} /></p>
            <p>Grade: <input type="text" value={grade} name="grade" onChange={this.handleOnChange} /></p>
            <p><button onClick={this.handleUpdate}>Done</button></p>
          </div>
        )
      })
    )
  }
}

export default Edit;
