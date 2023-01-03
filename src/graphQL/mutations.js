import { gql } from "@apollo/client";

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

export const DELETE_TASK_MUTATION = gql`
  mutation deleteTaskMutation(
    $id: String!
  ){
    deleteTask( input: {
      id: $id
    }){
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
