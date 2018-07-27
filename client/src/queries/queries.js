import { gql } from 'apollo-boost';

const getStudentsQuery = gql `
  {
    students{
      id
      name
      email
      grade
      gender{
        gender
      }
    }
  }
`

const addStudentMutation = gql `
  mutation($name: String!, $email: String!, $grade: Int!){
    addStudent(name: $name, email: $email, grade: $grade){
      id
      name
      email
      grade
    }
  }
`

const addGenderMutation = gql `
  mutation($gender: String!){
    addGender(gender: $gender){
      id
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
    }
  }
`
export { getStudentsQuery, addStudentMutation, addGenderMutation, editStudentMutation, deleteStudentMutation };
