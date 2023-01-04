import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({ 
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const ApolloContext = ({children}) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}