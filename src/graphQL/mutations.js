import { gql } from "@apollo/client"
import { TaskType } from "./types" 

export const CREATE_TASK_MUTATION = gql`
  mutation createTaskMutation(
    $assigneeId: String!
    $dueDate: DateTime!
    $name: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ){
    createTask( input: {
      assigneeId: $assigneeId
      dueDate: $dueDate
      name: $name
      pointEstimate: $pointEstimate
      status: $status
      tags: $tags
    }){
      ${TaskType}
    }
  }
`

export const UPDATE_TASK_MUTATION = gql`
  mutation updateTaskMutation(
    $id: String!
    $dueDate: DateTime!
    $name: String!
    $position: Float!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ){
    updateTask( input: {
      id: $id
      dueDate: $dueDate
      name: $name
      position: $position
      pointEstimate: $pointEstimate
      status: $status
      tags: $tags
    }){
      ${TaskType}
    }
  }
`

export const DELETE_TASK_MUTATION = gql`
  mutation deleteTaskMutation(
    $id: String!
  ){
    deleteTask( input: {
      id: $id
    }){
      ${TaskType}
    }
  }
`
