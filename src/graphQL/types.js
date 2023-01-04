export const enumType = `
  enumValues{
    name
  }
`

export const TaskType = `
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
`
