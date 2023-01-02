import { gql } from "@apollo/client";

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation(
    $assigneeId: String!
    $dueDate: DateTime!
    $name: String!
    $pointEstimate: PointEstimate!
    $Status: Status!
    $tags: [TaskTag!]!
  ){
    CreateTaskInput(
      assigneeId: $assigneeId
      dueDate: $dueDate
      name: $name
      pointEstimate: $pointEstimate
      status: $Status
      tags: $tags
    ){
      id
    }
  }
`
