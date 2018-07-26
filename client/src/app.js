import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import StudentForm from "./components/StudentForm";
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <StudentForm />
      </ApolloProvider>
    );
  }
}

export default App;
