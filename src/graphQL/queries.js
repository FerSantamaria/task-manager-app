import { gql } from "@apollo/client";

//ENUM QUERIES
export const GET_STATUSES = gql`
  query StatusesList{
    __type(name: "Status"){
      enumValues{
        name
      }
    }
  }
`

export const GET_POINT_ESTIMATES = gql`
  query PointEstimatesList{
    __type(name: "PointEstimate"){
      enumValues{
        name
      }
    }
  }
`
export const GET_TAGS = gql`
  query TagsList{
    __type(name: "TaskTag"){
      enumValues{
        name
      }
    }
  }
`

// DATA QUERIES
export const GET_TASKS = gql`
  query FilteredTasks{
    tasks(input: {}){
      id
      name
      tags
      dueDate
      pointEstimate
      status
      position
      assignee {
        id
        fullName
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
      position
      assignee {
        id
        fullName
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

export const GET_USERS = gql`
  query UsersList{
    users {
      id
      avatar
      fullName
    }
  }
`