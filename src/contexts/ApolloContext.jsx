import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiMDk3YTI3Zjk5YWE4IiwicHJvamVjdElkIjoiODAwNWE3ZjYtNjA1NS00NWVhLWJiNjgtMTczZDMwMmZlNzJmIiwiZnVsbE5hbWUiOiJKb3PDqSBGZXJuYW5kbyBGbG9yZXMgU2FudGFtYXLDrWEiLCJlbWFpbCI6ImZlci5zYW50YW1hcmlhQGhvdG1haWwuY29tIiwiaWF0IjoxNjcyMjQ3NjA5fQ.GT4gggsaGQSU6uhQYGJCk7NsVnK54z6glGyd36txbgg`
  }
});

export const ApolloContext = ({children}) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}