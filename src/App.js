import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import News from './components/News';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://www.graphqlhub.com/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={News} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
