import { gql } from 'apollo-boost';

const getStudentsQuery = gql `
  {
    students{
      id
      name
      email
      grade
      gender
    }
  }
`

const addStudentMutation = gql `
  mutation($name: String!, $email: String!, $grade: Int!, $gender: String!){
    addStudent(name: $name, email: $email, grade: $grade, gender: $gender){
      id
      name
      email
      grade
      gender
    }
  }
`

const editStudentMutation = gql `
  mutation($id: String!, $name: String!, $email: String!, $grade: Int!){
    editStudent(id: $id, name: $name, email: $email, grade: $grade){
      id
      name
      email
      grade
    }
  }
`

const deleteStudentMutation = gql `
  mutation($id: String!){
    deleteStudent(id: $id){
      id
      name
      email
      grade
      gender
    }
  }
`
export { getStudentsQuery, addStudentMutation, editStudentMutation, deleteStudentMutation };
