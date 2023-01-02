import { gql } from "@apollo/client";

export const GET_STATUSES = gql`
  query {
    __type(name: "Status"){
      name
      enumValues{
        name
      }
    }
  }
`

export const GET_TASKS = gql`
  query {
    tasks(input: {}){
      id
      name
      tags
      dueDate
      pointEstimate
      status
      assignee {
        avatar
      }
    }
  }
`

export const GET_TASKS_BY_STATUS = gql`
  query TaskByStatus($status: Status!){
    tasks(input: {status: $status}) {
      id
      name
      tags
      dueDate
      pointEstimate
      status
      assignee {
        avatar
      }
	  }
  }
`