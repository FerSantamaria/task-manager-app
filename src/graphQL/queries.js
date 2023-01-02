import { gql } from "@apollo/client";

export const GET_STATUSES = gql`
  query StatusesList{
    __type(name: "Status"){
      name
      enumValues{
        name
      }
    }
  }
`

export const GET_TASKS = gql`
  query FilteredTasks{
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

export const GET_PROFILE_INFO = gql`
  query ProfileInfo{
    profile {
      fullName
      email
      type
      createdAt
      updatedAt
    }
  }
`