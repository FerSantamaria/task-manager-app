import { gql } from "@apollo/client"
import { enumType, TaskType } from "./types" 

//ENUM QUERIES
export const GET_STATUSES = gql`
  query StatusesList{
    __type(name: "Status"){
      ${enumType}
    }
  }
`

export const GET_POINT_ESTIMATES = gql`
  query PointEstimatesList{
    __type(name: "PointEstimate"){
      ${enumType}
    }
  }
`
export const GET_TAGS = gql`
  query TagsList{
    __type(name: "TaskTag"){
      ${enumType}
    }
  }
`

// DATA QUERIES
export const GET_TASKS = gql`
  query FilteredTasks{
    tasks(input: {}){
      ${TaskType}
    }
  }
`

export const GET_TASKS_BY_STATUS = gql`
  query TaskByStatus($status: Status!){
    tasks(input: {status: $status}) {
      ${TaskType}
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